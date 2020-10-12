import React, {Component} from 'react'


import './component.message.less'

export default class Message extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className={'message' + (this.props.message ? ' animate': '')}>
				{this.props.message}
			</div>
		);
	}
}