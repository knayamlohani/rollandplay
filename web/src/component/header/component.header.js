import React, {Component} from 'react'

import {faDiceD6} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import './component.header.less'
import {Link} from "react-router-dom";

export default class Header extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className={'header'}>
				<Link to={"/"}>
					<div className={'app-icon'}>
						<FontAwesomeIcon icon={faDiceD6}/>
					</div>
					<div className={'app-name'}>Roll & Play</div>
				</Link>
			</div>
		);
	}
}