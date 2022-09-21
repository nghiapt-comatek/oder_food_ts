/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppSecond from './AppSecond';

AppRegistry.registerComponent(appName, () => AppSecond);
