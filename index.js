/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import ApiDummy from './src/domain/api/components/ApiDummy';
import Debug from './src/domain/user/components/Debug';
import Login from './src/domain/user/components/Login/Login';

const IS_DEBUG = false;
AppRegistry.registerComponent(appName, () => (IS_DEBUG ? Debug : ApiDummy));
