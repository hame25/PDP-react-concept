import React from 'react';
import DeliveryOptions from './delivery-options.js';

class BuyBox extends React.Component {

  constructor () {
    super();
    this.displayName = 'BuyBox';
  }

  render () {
    return (
      <div>
        <h2>Buy box!!</h2>
        <div className="seller-logo">
          <p>Sold by {this.props.item.seller.name}</p>
          <img src={this.props.item.seller.logo}/>
        </div>
        <p className="buy-box-price">
          £{this.props.item.price}
        </p>
        <p className="buy-box-points">
          Earn {this.props.item.seller.clubcardPoints} Clubcard Points
        </p>
        <form className="buy-box-add-form">
          <input type="text" name="quantity" defaultValue="1"/>
          <button type="submit">Add to basket</button>
        </form>
        {this.props.item.deliveryOptions ? <DeliveryOptions options={this.props.item.deliveryOptions}/> : ''}
      </div>
    );
  }
}

export default BuyBox;