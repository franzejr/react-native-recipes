# Simple Action

At this Example, we will know how to implement a simple action using React Native.
Basically, click in a button and do some action.

![Before][/recipes/SimpleAction/Press.png]

![After][Pressed.png]

We are using two components:

#### TouchableHighlight

https://facebook.github.io/react-native/docs/touchablehighlight.html

#### Text Component

https://facebook.github.io/react-native/docs/text.html


### Code

```javascript
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
```
