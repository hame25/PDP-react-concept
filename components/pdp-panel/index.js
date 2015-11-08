import React from 'react';

class PdpPanel extends React.Component {

  constructor () {
    super();
    this.displayName = 'PdpPenel';
  }

  render () {

    let panelClass = 'panel';

    if(this.props.showPanel) {
      panelClass= 'panel open';
    }

    return (
      <div className={panelClass}>
  	      {this.props.children}
      </div>
    );
  }
}

export default PdpPanel;