import React from 'react';
import { Link } from 'react-router-dom';
import './Item.scss';
import * as helper from '../helper';

function Item({ info, categories }) {
	return (
		<div className={'item-container'}>
			<div className={'item-info'} id={info.id}>
				<Link to={{pathname: `/items/${info.id}`, itemInfo: info, categories: categories}}>
					<img src={info.picture} alt={info.title} />
				</Link>
				<div className={'item-general-info'}>
					<p className={'item-price'}>{helper.formatPrice(info.price)}</p>
					{info.free_shipping ? <i className={'item-price-free-shipping'} /> : null}
					<Link className={'item-title'} to={{pathname: `/items/${info.id}`, itemInfo: info, categories: categories}}>
						<p>{info.title}</p>
					</Link>
				</div>
				<div className={'item-condition'}>
					<p>{info.condition === 'new' ? 'Nuevo' : 'Usado'}</p>
				</div>
			</div>
		</div>
	);
}

export default Item;
