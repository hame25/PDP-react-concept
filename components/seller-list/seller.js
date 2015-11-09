import React from 'react';
import Panel from '../pdp-panel';
import BuyBox from '../buy-box';

class Seller extends React.Component {

  constructor () {
    super();
    this.displayName = 'Seller';

    this.state = {showPanel: false};
  }

  showPanel () {
    this.setState({showPanel: true});
  }

  render () {

    return (
      <div className="seller">
        <h3 onClick={this.showPanel.bind(this)}>{this.props.item.seller.name}</h3>
        <Panel showPanel={this.state.showPanel}>
          <BuyBox item={this.props.item}/>
        </Panel>
      </div>
    );
  }
}

export default Seller;