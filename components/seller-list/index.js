import React from 'react';
import BuyBox from '../buy-box';

class SellerList extends React.Component {

  constructor () {
    super();
    this.displayName = 'BuyBox';
  }

  render () {
    let sellers = this.props.sellers;
    sellers.shift();

    return (
      <div className="seller-list">
        <h2>Additional sellers</h2>
        {sellers.map((item, i) => 
          <BuyBox key={i} item={item}/>
        )}
      </div>
    );
  }
}

export default SellerList;