import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WebViewTest from './src/webViewTest';
import Form from './src/form';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Form"
          component={Form}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WebViewTest"
          component={WebViewTest}
          options={{title: 'Web View'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
