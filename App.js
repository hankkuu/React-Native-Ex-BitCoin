import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import CoinView from './components/ConinView';
import TopBar from './components/TopBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshDate: '-',
    };
  }

  _setRefreshDate(date) {
    //console.log('Updated: '+ date);
    this.setState({
      refreshDate: date,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} backgroundColor='blue' barStyle='light-content' />
        <TopBar title="코인 시세" refreshDate={this.state.refreshDate}></TopBar>
        <CoinView style={styles.coinView} refreshDate={(date) => this._setRefreshDate(date) }></CoinView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  coinView: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    backgroundColor: 'white',
    //alignItems: 'center',
    //justifyContent: 'space-around'
  }
});
