import React from 'react';
import DeliveryOption from './delivery-option.js';

class DeliveryOptions extends React.Component {

  constructor () {
    super();
    this.displayName = 'BuyBoxDeliveryOptions';
  }

  render () {
    let options = this.props.options;
    return (
      <div>
        <ul>
        {options.map((item, i) => 
          <DeliveryOption key={i} option={item}/>
        )}
        </ul>
      </div>
    );
  }
}

export default DeliveryOptions;