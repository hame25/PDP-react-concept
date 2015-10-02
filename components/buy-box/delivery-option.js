import React from 'react';

class DeliveryOption extends React.Component {

  constructor () {
    super();
    this.displayName = 'DeliveryOption';
  }

  render () {
    let classValue = 'delivery';

    if(this.props.option.type === 'collect') {
      classValue = 'collect';
    }

    return (
      <li className={classValue}>
        {this.props.option.name} {this.props.option.price}
      </li>
    );
  }
}

export default DeliveryOption;