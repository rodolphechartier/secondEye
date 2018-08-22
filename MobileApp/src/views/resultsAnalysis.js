import React, { Component } from 'react';

import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { Button, Divider } from "react-native-elements";

const localStyles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        padding: 15
    },
});

export default class resultsAnalysis extends Component {
    static navigationOptions = {
        title: 'CHOIX DE LA DÉTECTION',
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView contentContainerStyle={localStyles.container}>
                <Text> Résultats de l'analyse </Text>
            </ScrollView>
        );
    }
}
