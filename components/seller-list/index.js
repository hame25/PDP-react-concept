import React from 'react';
import BuyBox from '../buy-box';
import Seller from './seller.js';
import './seller-list.css';

class SellerList extends React.Component {

  constructor () {
    super();
    this.displayName = 'SellerList';
  }

  render () {
    let sellers = this.props.sellers;
    //sellers.shift();

    return (
      <div className="seller-list">
        <h2>Additional sellers</h2>
        {sellers.map((item, i) => 
          <Seller key={i} item={item}/>
        )}
      </div>
    );
  }
}

export default SellerList;