import React, {Component} from 'react'

import './component.dice.less'

import {
	faDiceOne,
	faDiceTwo,
	faDiceThree,
	faDiceFour,
	faDiceFive,
	faDiceSix,
	faDice
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export class Dice extends Component {

	constructor(props) {
		super(props);

		this.diceNoGeneratedToDiceIcon = {
			1: faDiceOne,
			2: faDiceTwo,
			3: faDiceThree,
			4: faDiceFour,
			5: faDiceFive,
			6: faDiceSix,
			0: faDice
		};

		this.state = {
			rolling: false
		}
	}


	diceOnClickHandler = () => {
		this.setState({
			rolling: true
		});

		setTimeout(() => {
			this.setState({
				rolling: false
			});
		}, 2000);
		setTimeout(this.props.rollTheDice, 2000)
	};


	render() {


		return (
			<div className={'dice-component'}>
				<div className={'dice-icon-wrapper'}>
					<button
						onClick={this.diceOnClickHandler}
						className={'dice-icon' + (this.state.rolling ? ' rolling' : '')}
						disabled={this.state.rolling}>
						<FontAwesomeIcon icon={
							this.props.diceNoGenerated == null ?
								this.diceNoGeneratedToDiceIcon[0] :
								this.diceNoGeneratedToDiceIcon[this.props.diceNoGenerated]
						}/>
					</button>
				</div>
			</div>

		)
	}
}