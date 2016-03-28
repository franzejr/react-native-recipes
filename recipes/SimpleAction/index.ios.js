import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class SimpleAction extends Component {
  constructor(props){
    super(props);
    this.state = {
      myAction: ''
    }
  }
  myAction(){
    this.setState({
       myAction: 'JUST PRESSED THE BUTTON'
     })
  }
  render() {
    return (
      <View style={styles.container}>
      <TouchableHighlight
          onPress={this.myAction.bind(this)}
          underlayColor="#88D4F5">
            <Text style={styles.buttonText}>Press</Text>
      </TouchableHighlight>
        <Text style={styles.pressedButton}>
          {this.state.myAction}
       </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  pressedButton:{
    marginTop: 10,
    fontSize: 20,
    backgroundColor: '#ff0000'
  }
});

AppRegistry.registerComponent('SimpleAction', () => SimpleAction);
