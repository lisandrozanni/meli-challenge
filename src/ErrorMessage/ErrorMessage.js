import React from 'react';
import './ErrorMessage.scss';

function ErrorMessage(props) {
	return (
		<div className={`message-container ${props.error ? 'error' : ''}`}>
			<h4 className={'message-title'}><i className={`message-icon ${props.error ? 'error' : ''}`} />No hay publicaciones que coincidan con tu búsqueda.</h4>
			<p className={'message-text'}>{props.message}</p>
		</div>
	);
}

export default ErrorMessage;
