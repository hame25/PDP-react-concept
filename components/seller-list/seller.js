import React from 'react';

class Seller extends React.Component {

  constructor () {
    super();
    this.displayName = 'Seller';
  }

  render () {

    return (
      <div className="seller">
        <h3>{this.props.item.seller.name}</h3>
      </div>
    );
  }
}

export default Seller;