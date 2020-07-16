import React from 'react';
import { Logo } from '../components/Logo';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { InputGroup, FormControl } from 'react-bootstrap';
// import PropTypes from 'prop-types';

export const Main = () => {
	return (
		<Grid>
			<Row center="xs">
				<Col xs={6} md={2}>
					<Logo />
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<InputGroup size="sm" className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
					</InputGroup>
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<p>asdasdsadasdas</p>
				</Col>
			</Row>
		</Grid>
	);
};
