import React, { Component } from 'react';

import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { Button, Divider } from "react-native-elements";

const localStyles = StyleSheet.create({
    container: {
        height: null,
        padding: 15
    },
});

export default class resultsAnalysis extends Component {
    static navigationOptions = {
        title: 'RÉSULTATS DE LA DÉTECTION',
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
