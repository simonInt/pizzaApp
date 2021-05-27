import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { Button, ThemeProvider } from 'react-native-elements';
import { Header } from 'react-native-elements';
import { Card, ListItem, Icon } from 'react-native-elements';


class PizzaCard extends Component {

    constructor(props){
        super(props)
    }

    render() {

        return (

            <Card>
                <Card.Title>{this.props.data.nom}</Card.Title>
                <Card.Divider />
                <Card.Image source={{ uri: this.props.data.imgPath}}>                  
                </Card.Image>   
                <Text style={{ marginBottom: 10 }}>
                        {this.props.data.description}
                </Text>
                <Button
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, color: '#015d80' }}
                    title='AJOUTER'
                />
            </Card>
        );
    }
}

  export default PizzaCard;

