import React from 'react';
import DeliveryOption from './delivery-option.js';
import Panel from '../pdp-panel';
import './additional-delivery-options.css';

class AdditionalDeliveryOptions extends React.Component {

  constructor () {
    super();
    this.displayName = 'AdditionalDeliveryOptions';
    this.state = {'showPanel': false};
  }

  showPanel () {
    alert('clicked');
    this.setState({showPanel: 'true'})
  }

  render () {
    return (

   	  <div className="additional-delivery-options">	
     	  <p onClick={this.showPanel.bind(this)}>{this.props.options.length} more delivery {this.props.options.length > 1 ? 'options' : 'option'}</p>
        <Panel showPanel={this.state.showPanel}>
  	      <ul>
  	        {this.props.options.map((item, i) => 
  	          <DeliveryOption key={i} option={item}/>
  	        )}
  	      </ul>
        </Panel>
      </div>
    );
  }
}

export default AdditionalDeliveryOptions;