import React from 'react';
import './pdp-panel.css';

class PdpPanel extends React.Component {

  constructor (props) {
    super(props);
    this.displayName = 'PdpPanel';

    this.state = {showPanel: props.showPanel}
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps)
    this.setState({showPanel: nextProps.showPanel})
  }

  close () {
    this.setState({showPanel: false})
  }

  render () {

    let panelClass = 'panel';

    if(this.state.showPanel) {
      panelClass= 'panel open';
    }

    return (
      <div className={panelClass}>
          <a href='#' onClick={this.close.bind(this)}>Close</a>
  	      {this.props.children}
      </div>
    );
  }
}

export default PdpPanel;