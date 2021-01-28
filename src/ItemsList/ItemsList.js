import React from 'react';
import './ItemsList.scss';
import Item from '../Item/Item';
import CategoryBar from '../CategoryBar/CategoryBar';

function ItemsList(props) {
	return (
		<div className={'items-list-container'}>
			<CategoryBar categories={props.categories} />
			{props.items.slice(0,4).map((item, id) =>
				<Item key={id} info={item} categories={props.categories}
			/>)}
		</div>
	);
}

export default ItemsList;
