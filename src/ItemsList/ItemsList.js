import React from 'react';
import './ItemsList.scss';
import Item from '../Item/Item';
import CategoryBar from '../CategoryBar/CategoryBar';

function ItemsList({ categories, items }) {
	return (
		<div className={'items-list-container'}>
			<CategoryBar categories={categories} />
			{items.slice(0,4).map((item, id) =>
				<Item key={id} info={item} categories={categories}
			/>)}
		</div>
	);
}

export default ItemsList;
