import React, {Component} from 'react'
import * as GameActionCreators from '../../redux/action-creator/redux.actionCreator.game'

import {connect} from 'react-redux'


import AppCSS from './component.app.less'

import {BrowserRouter} from "react-router-dom";


import BodyComponent from "../body/component.body";

class AppComponent extends Component {
  constructor(props) {
    super(props);
    console.log('props', props);
    this.props = props;
  }

  render() {
    return (
      <React.Fragment>
        <div className={"app-component"}>

          {/*<React.Suspense fallback={"loading"}>*/}
          <BrowserRouter>
            <BodyComponent {...this.props} />
          </BrowserRouter>
          {/*</React.Suspense>*/}
        </div>
      </React.Fragment>
    )
  }

  componentDidMount() {
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    game: state.game,
    ...ownProps
  }
};

const mapDispatchToProps = {
  ...GameActionCreators,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);