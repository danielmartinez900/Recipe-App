import {
  View,
  Text,
  FlatList,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

import RecipeCard from './RecipeCard';
import recipeList from '../../assets/data/recipeList';

const HomeScreen = () => {
  const HEIGHT = useWindowDimensions().height;

  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style={[styles.header, {height: HEIGHT * 0.15}]}>
        <Text style={styles.headerText}>Welcome</Text>
        <Text style={styles.paragraphText}>
          Here are our featured recipes for March 2023!
        </Text>
      </View>

      <View style={{flex: 1}}>
        <FlatList
          numColumns={2}
          data={recipeList}
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
