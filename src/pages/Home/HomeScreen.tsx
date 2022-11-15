import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React from 'react';

import {avocado_toastImage} from '../../assets/data/images';
import {soupImage} from '../../assets/data/images';
import {oatmealImage} from '../../assets/data/images';
import {tamalesImage} from '../../assets/data/images';
import {hotCocoaImage} from '../../assets/data/images';
import {pieImage} from '../../assets/data/images';

import RecipeCard from './RecipeCard';

const HomeScreen = () => {
  const HEIGHT = useWindowDimensions().height;

  const recipeList = [
    {
      name: 'Avocado toast',
      prepTime: '15 mins',
      serves: 2,
      description: 'A quick and easy dish, yet full of flavor.',
      recipeImage: avocado_toastImage,
      ingridientsList: [
        'Half a large avocado',
        '1 Egg',
        'Lemon pepper seasoning',
        '2 slices of sour dough bread',
      ],
      stepsList: [
        'Toast bread',
        'While bread is toasting, smash avocado in a bowl with a fork and add lemon pepper seasoning to taste',
        'fry egg to prefered doneness',
        'Once the bread is done toasting, smear your avocado on top, and add egg on top',
        'enjoy!',
      ],
    },
    {
      name: 'Tomato soup',
      prepTime: '1 hour',
      serves: 3,
      description: 'A nice soup to warm you up this winter.',
      recipeImage: soupImage,
    },
    {
      name: 'Banana oatmeal',
      prepTime: '10 mins',
      serves: 2,
      description: 'Bananas + oatmeal = a great breakfast.',
      recipeImage: oatmealImage,
    },
    {
      name: 'Tamales',
      prepTime: '3 1/2 hours',
      serves: 6,
      description:
        'A mexican dish that is definitely worth the time and effort.',
      recipeImage: tamalesImage,
    },
    {
      name: 'Loaded hot cocoa',
      prepTime: '10 mins',
      serves: 4,
      description: 'Hot cocoa with a holiday twist.',
      recipeImage: hotCocoaImage,
    },
    {
      name: 'Pecan pie',
      prepTime: '2 hours',
      serves: 5,
      description: `You're sure to be the life of the party with this delicious pecan pie!`,
      recipeImage: pieImage,
    },
  ];

  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style={[styles.header, {height: HEIGHT * 0.15}]}>
        <Text style={styles.headerText}>Welcome</Text>
        <Text style={styles.paragraphText}>
          Here are our featured recipes for December 2022!
        </Text>
      </View>

      <View style={{flex: 1}}>
        <FlatList
          numColumns={2}
          data={recipeList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <RecipeCard recipe={item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  headerText: {
    marginHorizontal: 10,
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  paragraphText: {
    marginHorizontal: 10,
    fontSize: 20,
    color: 'black',
  },
});

export default HomeScreen;
