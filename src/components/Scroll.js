import React from 'react';

const Scroll = (props) => {
	return (
		<div className='forScroll'>
			{props.children}
		</div>
	);
};

export default Scroll;