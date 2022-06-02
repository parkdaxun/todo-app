import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TextInput, Platform} from 'react-native';

const {height, width} = Dimensions.get("window");

export default function App() {
  state = {
    NewToDo : ""
  };

  const {NewToDo} = this.state;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>To Do List</Text>
      <View style={styles.card}>
        <TextInput
         style={styles.input}
         placeholder={"New To Do"} 
         vaule = {NewToDo} 
         onChangeText={this._controllNewToDo}
         placeholderTextColor={"#999"}
         returnkeytype={"done"}
         />
      </View>
    </View>
  );
}
_controllNewToDo = text => {
  this.setState({
    NewToDo : text
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F23657',
    alignItems: 'center'
  },
  title: {
    color : "white",
    fontSize : 30,
    marginTop : 50,
    fontWeight : "200",
    marginBottom : 30
  },
  card: {
    backgroundColor : "white",
    flex : 1,
    width: width-25,
    borderTopLeftRadius : 10,
    borderTopRightRadius : 10,
    ...Platform.select({
      ios : {
        shadowColor : "rgb(50 50 50)",
        shadowOpacity : 0.5,
        shadowRadius : 5,
        shadowOffset : {
          height : -1,
          weight : 0
        }
      },
      android : {
        elevation : 3
      }
    })
  },
  input : {
    padding : 20,
    borderBottomColor : "#bbb",
    borderBottomWidth : 1,
    fontSize : 20


  }
});
