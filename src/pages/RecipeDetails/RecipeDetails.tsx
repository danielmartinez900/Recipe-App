import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState, FC} from 'react';

interface Irecipe {
  name: string;
  prepTime: string;
  serves: number;
  description: string;
  recipeImage: HTMLImageElement;
}

const RecipeDetails = ({route, navigation}) => {
  const [recipe, setRecipe] = React.useState<Irecipe | null>(null);

  React.useEffect(() => {
    let {recipe} = route.params;
    setRecipe(recipe);
  }, [recipe]);

  if (recipe) {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View>
          <Text style={styles.title}>{recipe.name}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={recipe.recipeImage} />
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
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default RecipeDetails;
