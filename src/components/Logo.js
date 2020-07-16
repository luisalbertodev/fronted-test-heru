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

// Logo.propTypes = {
// 	image: PropTypes.string,
// 	display: PropTypes.string,
// };

// Logo.defaultProps = {
// 	image: 'https://images.unsplash.com/photo-1578986175247-7d60c6df07c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1929&q=80',
// 	display: '',
// };
