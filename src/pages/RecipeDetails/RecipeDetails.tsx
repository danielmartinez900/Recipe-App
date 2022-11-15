import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Octicons from 'react-native-vector-icons/Octicons';

interface Irecipe {
  name: string;
  prepTime: string;
  serves: number;
  description: string;
  recipeImage: HTMLImageElement;
  ingredientsList: Array<string>;
  stepsList: Array<string>;
}

const RecipeDetails = ({route, navigation}) => {
  const [recipe, setRecipe] = React.useState<Irecipe | null>(null);

  React.useEffect(() => {
    let {recipe} = route.params;
    setRecipe(recipe);
  }, [recipe, route.params]);

  if (recipe) {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View>
          <Text style={styles.title}>{recipe.name}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={recipe.recipeImage} />
          <View style={styles.infoOverImagesContainer}>
            <View style={styles.iconAndText}>
              <Octicons name="clock" style={styles.icon} />
              <Text style={{color: 'white', fontSize: 25}}> {recipe.prepTime}</Text>
            </View>
            <View style={styles.iconAndText}>
              <Octicons name="people" style={styles.icon} />
              <Text style={{color: 'white', fontSize: 25}}> {recipe.serves} people</Text>
            </View>
          </View>
        </View>
        <View>
          <Text>{recipe.description}</Text>
        </View>
      </ScrollView>
    );
  } else {
    return <></>;
  }
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    marginVertical: 10,
    height: 350,
  },
  image: {
    width: '98%',
    height: '100%',
    alignSelf: 'center',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  infoOverImagesContainer: {
    position: 'absolute',
    height: 100,
    width: 150,
    bottom: 0,
    left: 4,
    backgroundColor: 'rgba(0,0,0,0.25)',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    padding: 5,
  },
  icon: {
    fontSize: 35,
    color: 'white',
  },
  iconAndText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default RecipeDetails;
