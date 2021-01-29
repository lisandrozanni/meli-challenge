import React from 'react';
import './ErrorMessage.scss';

function ErrorMessage({ error, message }) {
	return (
		<div className={`message-container ${error ? 'error' : ''}`}>
			<h4 className={'message-title'}><i className={`message-icon ${error ? 'error' : ''}`} />No hay publicaciones que coincidan con tu búsqueda.</h4>
			<p className={'message-text'}>{message}</p>
		</div>
	);
}

export default ErrorMessage;
