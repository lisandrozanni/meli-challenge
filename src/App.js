import React, { useState } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import SearchBox from './SearchBox/SearchBox';
import ItemsList from './ItemsList/ItemsList';
import ItemDetail from './ItemDetail/ItemDetail';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import Spinner from './Spinner/Spinner';
import { Helmet } from 'react-helmet';
import './App.scss';

function App() {
	let history = useHistory();
	const [results, setResults] = useState({});
	const [loading, setLoading] = useState(false);

	const getResults = query => {
		setLoading(true);
		fetch(`http://localhost:8080/api/items?q=${query}`)
			.then(response => response.json())
			.then(response => {
				if (response.error) {
					console.error(response);
					setLoading(false);
					setResults({error: response});
				} else {
					setLoading(false);
					setResults(response);
					history.push(`/items?search=${query}`);
				}
			})
			.catch(error => {
				console.error(error);
				setLoading(false);
				setResults({error: 'Connection lost'});
			});
	};

	return (
		<div className='App'>
			<Helmet>
				<title>Mercado Libre Argentina</title>
				<meta name='description' content='La comunidad de compra y venta online más grande de América Latina.' />
				<meta name='keywords' content='mercadolibre, comprar, vender' />
			</Helmet>
			<SearchBox onSubmit={query => getResults(query)} />
			{
				loading ? <Spinner /> :
				<Switch>
					<Route exact path='/items'>
					{
						results.error ?
							<ErrorMessage error={true}
								message={'Hubo un problema buscando ese producto. Probá nuevamente más tarde.'} />
							: results.items ? results.items.length ?
							<ItemsList categories={results.categories} items={results.items} />
							: <ErrorMessage error={false}
									message={
										<ul>
											<li><b>Revisá la ortografía</b> de la palabra.</li>
											<li>Utilizá <b>palabras más genéricas</b> o menos palabras.</li>
											<li><a href={'https://www.mercadolibre.com.ar/categorias'}>Navegá por las categorías</a> para encontrar un producto similar.</li>
										</ul>
									}/>
								: <Redirect to={'/'} />
						}
					</Route>
					<Route path='/items/:id' component={props => <ItemDetail {...props} categories={results.categories} /> } />
				</Switch>
			}
		</div>
	);
}

export default App;
