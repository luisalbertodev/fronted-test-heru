import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';

const style = {
	wrapperGif: { width: '100%', height: '100%', padding: 4, objectFit: 'cover' },
	paddingNone: { padding: 0 },
};

export const CardItemGif = (props) => {
	return (
		<Row>
			{props.data.map((item) => (
				<Col md={4} key={item.id} style={style.paddingNone}>
					<img src={item.images.preview_gif.url} alt={item.slug} style={style.wrapperGif} />
				</Col>
			))}
		</Row>
	);
};

CardItemGif.propTypes = {
	data: PropTypes.array.isRequired,
};

CardItemGif.defaultProps = {
	data: [],
};
