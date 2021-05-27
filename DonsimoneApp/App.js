import React, { Component } from "react";
import PizzaCard from './pizzaCard';
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { Button, ThemeProvider } from 'react-native-elements';
import { Header } from 'react-native-elements';
import { Card, ListItem, Icon } from 'react-native-elements';
import {ScrollView} from 'react-native'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      pizzas: []
    }
  }

  componentDidMount(){
    fetch('https://pizzaworld20210430170205.azurewebsites.net/pizza', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({
          pizzas: data
        }, () => console.log(this.state.pizzas))
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {

    return (
      <ScrollView>
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'DonSimone', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
        {
          this.state.pizzas.map((value, key) => {
            return(
              <PizzaCard data={value} key={key} />
            )
          })
        }
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default App;