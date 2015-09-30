import React from 'react';
import fetch from 'isomorphic-fetch';
import 'whatwg-fetch';
import BuyBox from '../buy-box';
import SellerList from '../seller-list';

class PDP extends React.Component {

  constructor () {
    super();
    this.displayName = 'PDP';
    this.state = {loading: true, product: {}};
  }

  componentDidMount () {
    let self = this;
    fetch('http://localhost:1991/product')
      .then(function(response) {
        return response.json();
      }).then(function(product) {
        self.setState({product: product, loading: false});
    });
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

//PDP.defaultProps = {data: {}};

export default PDP;