import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import Component from './component';
import * as authActions from '../../reducers/auth/authActions'
import * as deviceActions from '../../reducers/device/deviceActions'
import * as globalActions from '../../reducers/global/globalActions'


function mapStateToProps (state) {
  return {
    deviceVersion: state.device.version,
    auth: {
      form: {
        isFetching: state.auth.form.isFetching
      }
    },
    global: {
      currentState: state.global.currentState,
      showState: state.global.showState
    }
  }
};


function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...authActions, ...deviceActions, ...globalActions }, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Component)
