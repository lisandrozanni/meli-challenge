import React from 'react';
import './CategoryBar.scss';

function CategoryBar({ categories }) {
	return (
		<ul className={'bar-container'}>
			{categories ? categories.map((category, id) =>
				<li className={'bar'} key={id}>
					{category}
					{id !== categories.length - 1? <i/> : null}
				</li>)
				: null}
		</ul>
	);
}

export default CategoryBar;
