import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class HighorderLoadedTag extends PureComponent {
  render() {
    const { isBalanceInfoLoaded, isVerifyInfoLoaded } = this.props;
    if (!isBalanceInfoLoaded || !isVerifyInfoLoaded) {
      return null;
    }

    return <div id="loaded" style={{ display: 'none' }}></div>;
  }
}

function mapStateToProps(state) {
  const { balanceInfo, verifyInfo } = state;

  return {
    isBalanceInfoLoaded: balanceInfo.isLoaded,
    isVerifyInfoLoaded: verifyInfo.isLoaded,
  };
}

export default connect(mapStateToProps)(HighorderLoadedTag);
