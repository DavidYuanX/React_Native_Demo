/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './js/page/WelcomePage';
import {name as appName} from './app.json';
import AppNavigators from './js/naviartor/AppNavigators';

AppRegistry.registerComponent(appName, () => AppNavigators);
