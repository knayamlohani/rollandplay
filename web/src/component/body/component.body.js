import React, {Component, Fragment} from "react"
import {Route} from "react-router-dom";


import './component.body.less'

import BlurComponent from "../blur/component.blur";
import Header from "../header/component.header";
import GamePage from "../gamePage/component.gamePage";
import Home from "../home/component.home";
import Configure from "../configure/component.configure";


export default class BodyComponent extends Component {
	constructor(props) {
		super(props);
		console.log('body props', props, this.props.game.playerQueue.getQueueElements())
	}

	render() {
		return (

			<Fragment>
				<Header/>
				{/*<BlurComponent*/}
					{/*backgroundUrl={'https://c4.wallpaperflare.com/wallpaper/269/857/159/dice-simple-background-monochrome-wallpaper-preview.jpg'}*/}
				{/*/>*/}

				<BlurComponent
					backgroundUrl={'/img/background.jpg'}
				/>
				<Route
					path="/play"
					exact={true}
					render={(props) => {
						return <GamePage {...props} {...this.props}/>
					}}
				/>

				<Route
					path="/configure"
					exact={true}
					render={(props) => {
						return <Configure {...props} {...this.props}/>
					}}
				/>

				<Route
					path="/"
					exact={true}
					render={(props) => {
						return <Home {...props} {...this.props}/>
					}}
				/>

			</Fragment>
		)
	}
}