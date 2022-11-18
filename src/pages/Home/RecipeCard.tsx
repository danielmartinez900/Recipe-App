import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Octicons from 'react-native-vector-icons/Octicons';
import React from 'react';

const RecipeCard = ({recipe}) => {
  const {name, prepTime, serves, description, recipeImage} = recipe;
  const navigation = useNavigation();

  const onRecipeClicked = () => {
    navigation.navigate('RecipeDetails', {recipe: recipe});
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onRecipeClicked}>
        <Image style={styles.image} source={recipeImage} />
        <Text style={styles.title}>{name}</Text>

        <View style={styles.midSection}>
          <View style={styles.iconAndText}>
            <Octicons name="clock" style={styles.icon} />
            <Text style={styles.text}> {prepTime}</Text>
          </View>

          <View style={styles.iconAndText}>
            <Octicons name="people" style={styles.icon} />
            <Text style={styles.text}> {serves}</Text>
          </View>
        </View>

        <Text style={styles.text}>{description}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    margin: 5,
  },
  image: {
    alignSelf: 'center',
    height: 175,
    width: 175,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    alignSelf: 'center',
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
  icon: {
    color: 'black',
    fontSize: 16,
  },
  midSection: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  iconAndText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {},
});

export default RecipeCard;
