import React from 'react';
import fetch from 'isomorphic-fetch';
import 'whatwg-fetch';
import BuyBox from '../buy-box';
import SellerList from '../seller-list';
import AppStore from '../../stores/app-store';
import AppActions from '../../actions/app-actions';

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

  render () {

    if(this.state.loading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      )
    } else {

      let defaultSeller = this.state.product.sellers[0];
      return (
        <div>
          <h1>{this.state.product.name}</h1>
          <div className="default-buy-box">
            <BuyBox item={defaultSeller}/>
          </div>
          <SellerList sellers={this.state.product.sellers}/>
        </div>
      );
    }
  }
}

export default PDP;