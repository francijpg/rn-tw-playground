/**
 * @format
 */

import * as React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Debug from './src/domain/user/components/Debug';
import Login from './src/domain/user/components/Login/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ApiDummy from './src/domain/api/components/ApiDummy';
import { RoutesStr } from './src/assets/string';

const IS_DEBUG = false;

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={RoutesStr.LOGIN_SCREEN}
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RoutesStr.API_SCREEN}
          component={ApiDummy}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

AppRegistry.registerComponent(appName, () => (IS_DEBUG ? Debug : App));
