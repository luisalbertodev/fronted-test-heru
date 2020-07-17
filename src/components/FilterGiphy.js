import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const style = {
	btnMargin: {
		margin: '0 0 0 8px ',
	},
	paddingTopOne: {
		paddingTop: 16,
	},
};

export const FilterGiphy = (props) => {
	return (
		<Row style={style.paddingTopOne}>
			<Col xs={12}>
				<form onSubmit={props.onSubmit}>
					<InputGroup size="sm" className="mb-3">
						<FormControl
							aria-label="Small"
							aria-describedby="inputGroup-sizing-sm"
							name="text_filter"
							onChange={props.onInput}
						/>
						<Button color="primary" type="submit" size="sm" style={style.btnMargin}>
							BUSCAR
						</Button>
					</InputGroup>
				</form>
			</Col>
		</Row>
	);
};

FilterGiphy.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onInput: PropTypes.func.isRequired,
};

FilterGiphy.defaultProps = {
	onSubmit: () => {},
	onInput: () => {},
};
