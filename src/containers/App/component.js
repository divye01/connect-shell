import React, {Component} from 'react'

import
{
    StyleSheet,
    View,
    Text
} from 'react-native'

var reactMixin = require('react-mixin')
import TimerMixin from 'react-timer-mixin'

var I18n = require('react-native-i18n')
import Translations from '../../lib/Translations'
I18n.translations = Translations

import Header from '../../components/Header';

export default class App extends Component {
  componentDidMount () {
    this.setTimeout(
            () => {
              this.props.actions.getSessionToken()
            },
            2500
        )
  }

  render () {
    return (
      <View style={styles.container}>
        <Header isFetching={this.props.auth.form.isFetching}
          showState={this.props.global.showState}
          currentState={this.props.global.currentState}
          onGetState={this.props.actions.getState}
          onSetState={this.props.actions.setState} />

        <Text style={styles.summary}>Snowflake {I18n.t('App.version')}:{this.props.deviceVersion}</Text>

      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    marginTop: 80,
    padding: 10
  },
  summary: {
    fontFamily: 'BodoniSvtyTwoITCTT-Book',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

// Since we're using ES6 classes, have to define the TimerMixin
reactMixin(App.prototype, TimerMixin)
/**
 * Connect the properties
 */
