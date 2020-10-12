import React, {Component} from 'react'

import './component.home.less'
import {faDiceOne, faDiceFive, faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

export default class Home extends Component {

	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div>
				<div className={'dice-container'}>
					<div className={'dice wobble'}>
						<FontAwesomeIcon icon={faDiceOne}/>
					</div>
					<div className={'dice wobble'}>
						<FontAwesomeIcon icon={faDiceFive}/>
					</div>
				</div>
				<div className={'action'}>
					<Link to={'/configure'}>
						<div>Continue to play</div>
						<div className={'action-icon'}><FontAwesomeIcon icon={faArrowCircleRight}/></div>
					</Link>
				</div>
			</div>
		);
	}

}