import React from 'React';
import Route from './router';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setTopLevelNavigator } from '../router/navigationService';
import { withLoading } from '../hoc/withLoading'

const mainRouter = (props) => {
    return (
        <Route
          ref={(refs) => {
            setTopLevelNavigator(refs)
          }}
        />
    );
  }

  mainRouter.propTypes = {
    loginLoading:PropTypes.bool
  }

  mainRouter.defaultProps = {
    loginLoading:true
  }

  const mapState = (state) => {
    const {
      login: {
        handlelogin: loginLoading
      }
    } = state.loading.effects;
    return {
        loginLoading
    }
  }
  
  export default compose(
    connect(mapState,null),
    withLoading(['loginLoading'])
  )(mainRouter)   