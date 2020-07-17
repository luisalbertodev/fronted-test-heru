import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Logo } from '../components/Logo';
import PropTypes from 'prop-types';

const style = {
	paddingTop: {
		paddingTop: 248,
	},
};

export const EmptyData = (props) => {
	return (
		<Grid>
			<Row center="xs" style={style.paddingTop}>
				<Col xs={6}>
					<Logo />
				</Col>
				<Col xs={12}>
					<h3>Sin gif disponibles</h3>
					<p>{props.description}</p>
				</Col>
			</Row>
		</Grid>
	);
};

EmptyData.propTypes = {
	description: PropTypes.string,
};

EmptyData.defaultProps = {
	description: '',
};
