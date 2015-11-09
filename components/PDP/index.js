import React from 'react';
import BuyBox from '../buy-box';
import Panel from '../pdp-panel';
import SellerList from '../seller-list';
import AppStore from '../../stores/app-store';
import AppActions from '../../actions/app-actions';
import '../../assets/styles/normalize.css';
import './pdp.css';

class PDP extends React.Component {

  constructor () {
    super();
    this.displayName = 'PDP';
    this.state = AppStore.getAllData();
    AppActions.load();
  }

  componentDidMount () {
    AppStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount () {
    AppStore.removeChangeListener(this._onChange);
  }

  _onChange () {
    this.setState(AppStore.getAllData());
  }

  togglePanel () {
    let state = true;
    if(this.state.showPanel) {
      state = false
    }

    AppActions.togglePanel(state);
  }

  render () {
    let text = 'hide';
    if(this.state.showPanel) {
      text = 'show';
    }

    if(this.state.loading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      )
    } else {

      let defaultSeller = this.state.product.sellers[0];
      return (
        <div className ="pdp-container">
          <div className="pdp-main-container">
            <h1>{this.state.product.name}</h1>
          </div>
          <div className="pdp-right-container">
            <div className="default-buy-box">
              <BuyBox item={defaultSeller}/>
            </div>
            <SellerList sellers={this.state.product.sellers}/>
          </div>
          <a onClick={this.togglePanel.bind(this)}>Panel toggle</a>
          <Panel showPanel={this.state.showPanel}>
            {text}
          </Panel>
        </div>
      );
    }
  }
}

export default PDP;