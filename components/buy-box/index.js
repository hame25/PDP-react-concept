import React from 'react';
import DeliveryOptions from './delivery-options.js';

const styles = {
    buyBoxText: {
      color: 'grey'
    },

    bold: {
      fontWeight: 'bold'
    }
};

class BuyBox extends React.Component {

  constructor () {
    super();
    this.displayName = 'BuyBox';
  }

  render () {
    return (
      <div>
        <div className="seller-logo">
          <p styles={styles.buyBoxText}>Sold by <span styles={styles.bold}>{this.props.item.seller.name}</span></p>
          <img src={this.props.item.seller.logo}/>
        </div>
        <p className="buy-box-price">
          £{this.props.item.price}
        </p>
        <p className="buy-box-points" style={styles.buyBoxText}>
          Earn <span styles={styles.bold}>{this.props.item.seller.clubcardPoints}</span> Clubcard Points
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