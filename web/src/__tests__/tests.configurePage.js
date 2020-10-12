// import {test} from "jest"

import React from "react"
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Configure from "../component/configure/component.configure";
configure({adapter: new Adapter()});



describe('configure page test', function () {

	it('disable submit button if inputs not valid', function () {


		let props = {
			game: {
				playerCount: 1,
				minPointsToWin: 1
			},
			history: {
				push: function () {

				}
			}
		};

		const wrapper = shallow(<Configure {...props}/>);
		// console.log('wrapper.find(\'button\').prop(\'disabled\')', wrapper.find('button').prop('disabled'));
		expect(wrapper.find('button').prop('disabled')).toBe(false);

	});

	it('enable submit button if inputs are valid', function () {


		let props = {
			game: {
				playerCount: 1,
				minPointsToWin: 1
			},
			history: {
				push: function () {

				}
			}
		};

		const wrapper = shallow(<Configure {...props}/>);
		// console.log('wrapper.find(\'button\').prop(\'disabled\')', wrapper.find('button').prop('disabled'));
		expect(wrapper.find('button').prop('disabled')).toBe(false);

	});



});