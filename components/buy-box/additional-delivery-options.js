import React from 'react';
import DeliveryOption from './delivery-option.js';

class AdditionalDeliveryOptions extends React.Component {

  constructor () {
    super();
    this.displayName = 'AdditionalDeliveryOptions';
  }

  render () {

    return (
   	  <div className="additional-delivery-options">	
   	  <p>{this.props.options.length} more delivery {this.props.options.length > 1 ? 'options' : 'option'}</p>
	      <ul>
	        {this.props.options.map((item, i) => 
	          <DeliveryOption key={i} option={item}/>
	        )}
	      </ul>
      </div>
    );
  }
}

export default AdditionalDeliveryOptions;