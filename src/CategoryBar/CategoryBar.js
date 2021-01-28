import React from 'react';
import './CategoryBar.scss';

function CategoryBar(props) {
	return (
		<ul className={'bar-container'}>
			{props.categories ? props.categories.map((category, id) =>
				<li className={'bar'} key={id}>
					{category}
					{id !== props.categories.length - 1? <i/> : null}
				</li>)
				: null}
		</ul>
	);
}

export default CategoryBar;
