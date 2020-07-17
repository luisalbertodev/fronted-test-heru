import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import LOGO from '../images/logo.svg';

const style = {
	wrapperImg: {
		width: '100%',
		height: 'auto',
	},
};

export const Logo = () => {
	return (
		<Row center="xs">
			<Col xs>
				<img src={LOGO} alt="logotipo" style={style.wrapperImg} />
			</Col>
		</Row>
	);
};
