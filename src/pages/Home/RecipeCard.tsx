import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Recipe} from '../../shared/types';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/RootStackParamLIst';
import Octicons from 'react-native-vector-icons/Octicons';

type Props = {
  recipe: Recipe;
};

const RecipeCard = (props: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {recipe} = props;
  const title = recipe.name;

  const onRecipeClicked = () => {
    navigation.navigate('RecipeDetails', {recipe, title});
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onRecipeClicked}>
        <Image style={styles.image} source={recipe.recipeImage} />
        <Text style={styles.title}>{recipe.name}</Text>

        <View style={styles.midSection}>
          <View style={styles.iconAndText}>
            <Octicons name="clock" style={styles.icon} />
            <Text style={styles.text}> {recipe.prepTime}</Text>
          </View>

          <View style={styles.iconAndText}>
            <Octicons name="people" style={styles.icon} />
            <Text style={styles.text}> {recipe.serves}</Text>
          </View>
        </View>

        <Text style={styles.text}>{recipe.description}</Text>
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
