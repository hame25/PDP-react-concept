import React from 'react';
import AdditionalDeliveryOptions from './additional-delivery-options.js';

class DeliveryOptions extends React.Component {

  constructor () {
    super();
    this.displayName = 'BuyBoxDeliveryOptions';
  }

  render () {
    //let firstOption = this.props.options.shift();
    let firstOption = this.props.options[0];

    let options = this.props.options;

    return (
      <div>
        <p>{firstOption.name} {firstOption.price}</p>
        {options.length > 0 ? <AdditionalDeliveryOptions options={options}/> : ''}
      </div>
    );
  }
}

export default DeliveryOptions;