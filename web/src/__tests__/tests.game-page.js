// import {test} from "jest"

import React from "react"
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

import GamePage from "../component/gamePage/component.gamePage";
import GameStats from "../component/game-stats/component.gameStats";
import QueueImmutable from "../services/service.queue";


describe('game page test', function () {

    it('show end stats if all players have won', function () {

        // Object.keys(this.props.game.wonPlayer).length == this.props.game.playerCount && this.props.game.playerCount != 0

        let props = {
            game: {
                wonPlayer: { 1: 1},
                playerCount: 1,
                playerQueue: new QueueImmutable([])
            },
            history: {
                push: function () {

                }
            }
        };

        const wrapper = shallow(<GamePage {...props}/>);
        expect(wrapper.find(GameStats).exists()).toBe(true);

    });

    it('donr show end stats if not all players have won', function () {

        // Object.keys(this.props.game.wonPlayer).length == this.props.game.playerCount && this.props.game.playerCount != 0

        let props = {
            game: {
                wonPlayer: { },
                playerCount: 1,
                playerQueue: new QueueImmutable([])
            },
            history: {
                push: function () {

                }
            }
        };

        const wrapper = shallow(<GamePage {...props}/>);
        expect(wrapper.find(GameStats).exists()).toBe(false);

    });


    // it('hide-searching ', function () {
    //     const component = shallow(<SearchComponent searchSeriesStatus={UNKNOWN}/>)
    //     expect(component.find('.searching-series').exists()).toBe(false);
    // });
});