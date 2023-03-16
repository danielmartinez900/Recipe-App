import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import {RootStackParamList} from '../../navigation/RootStackParamLIst';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RecipeDetailsNavigationProp = StackNavigationProp<
  RootStackParamList,
  'RecipeDetails'
>;
type RecipeDetailsRouteProp = RouteProp<RootStackParamList, 'RecipeDetails'>;

type Props = {
  navigation: RecipeDetailsNavigationProp;
  route: RecipeDetailsRouteProp;
};

const RecipeDetails = (props: Props): JSX.Element => {
  const {recipe} = props.route.params;

  if (recipe) {
    let ingredList = [];
    let stepList = [];

    for (let i = 0; i < recipe.ingredientsList.length; i++) {
      ingredList.push(
        <Text style={styles.text}>
          • {recipe.ingredientsList[i]} {'\n'}
        </Text>,
      );
    }

    for (let i = 0; i < recipe.stepsList.length; i++) {
      stepList.push(
        <Text style={styles.text}>
          {i + 1}. {recipe.stepsList[i]} {'\n\n'}
        </Text>,
      );
    }

    return (
      <ScrollView
        style={{backgroundColor: 'white'}}
        showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.title}>{recipe.name}</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image style={styles.image} source={recipe.recipeImage} />
          <View style={styles.infoOverImagesContainer}>
            <View style={styles.iconAndText}>
              <Octicons name="clock" style={styles.icon} />
              <Text style={{color: 'white', fontSize: 25}}>
                {''} {recipe.prepTime}
              </Text>
            </View>
            <View style={styles.iconAndText}>
              <Octicons name="people" style={styles.icon} />
              <Text style={{color: 'white', fontSize: 25}}>
                {''} {recipe.serves} people
              </Text>
            </View>
          </View>
        </View>

        <View style={{padding: 15}}>
          <Text style={styles.header}>Ingredients</Text>
          <Text style={{marginStart: 10}}>{ingredList}</Text>

          <Text style={styles.header}>Directions</Text>
          <Text style={{marginStart: 10}}>{stepList}</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  infoOverImagesContainer: {
    position: 'absolute',
    height: 100,
    width: 160,
    bottom: 0,
    left: 4,
    backgroundColor: 'rgba(0,0,0,0.25)',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    paddingStart: 5,
    paddingEnd: 5,
  },
  icon: {
    fontSize: 35,
    color: 'white',
  },
  iconAndText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
});

export default RecipeDetails;
