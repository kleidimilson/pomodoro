import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pomodoro } from '../screens/Pomodoro';
import { Tasks } from '../screens/Tasks';

export const Routes = () => {
    const Tab = createBottomTabNavigator();

  return(
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Pomodoro'  component={Pomodoro}/>
            <Tab.Screen name='Tasks'  component={Tasks}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}

