import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

import { AppStack } from './src/Router';
import {name as appName} from './app.json';

export default class GPEETNA extends Component {
    render() {
        return <AppStack />
    }
} 

AppRegistry.registerComponent(appName, () => GPEETNA);
