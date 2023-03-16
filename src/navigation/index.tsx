import 'react-native-gesture-handler';
import React from 'react';
//import {Recipe} from '../shared/types';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './RootStackParamLIst';

import HomeScreen from '../pages/Home/HomeScreen';
import RecipeDetails from '../pages/RecipeDetails/RecipeDetails';

// type RootStackParamList = {
//   Home: undefined;
//   RecipeDetails: {recipe: Recipe};
// };

const RootStack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="RecipeDetails"
          component={RecipeDetails}
          options={{headerShown: true}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
