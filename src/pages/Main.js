import React, { Component } from 'react';
import { Logo } from '../components/Logo';
import { FilterGiphy } from '../components/FilterGiphy';
import { CardItemGif } from '../components/CardItemGif';
import { EmptyData } from '../components/EmptyData';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { fetchTopGiphy, fetchFindGiphy } from '../redux/actions/fetchTopGiphy';

class Main extends Component {
	state = { text_filter: '' };

	handleOnChangeInput = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	handleOnSubmit = (e) => {
		e.preventDefault();
		this.props.fetchFindGiphy({ payload: this.state.text_filter });
	};

	componentDidMount() {
		this.props.fetchTopGiphy();
	}

	componentDidUpdate(prevState, prevProps) {
		if (prevProps.results !== this.props.results) {
			if (Array.isArray(this.props.results) && this.props.results.length === 0) {
				this.props.fetchTopGiphy();
			}
		}
	}

	render() {
		const { results } = this.props;
		return (
			<Grid>
				<Row center="xs">
					<Col xs={6} md={2}>
						<Logo />
					</Col>
				</Row>
				<FilterGiphy onSubmit={this.handleOnSubmit} onInput={this.handleOnChangeInput} />
				{results.data !== undefined ? <CardItemGif data={results.data} /> : <EmptyData />}
			</Grid>
		);
	}
}

const mapStateToProps = (state) => ({
	results: state.getData,
});

const mapDispatchToProps = {
	fetchTopGiphy,
	fetchFindGiphy,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
