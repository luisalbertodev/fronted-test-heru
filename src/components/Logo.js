import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import LOGO from '../images/logo.svg';

export const Logo = () => {
	return (
		<Row center="xs">
			<Col xs>
				<img src={LOGO} alt="logotipo" className="img-fluid" />
			</Col>
		</Row>
	);
};
