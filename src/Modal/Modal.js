import React, { Component } from 'react';
import ModalOverlay from './styled/ModalOverlay';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../actions/cartActions';

class Modal extends Component {
    render() {
        const { isOpened, children } = this.props;
        return (
            isOpened && <ModalOverlay>{children}</ModalOverlay>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(cartActions, dispatch)
    }
}
function mapStateToProps(state) {
    return {
        isOpened: state.cart.isOpened,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
