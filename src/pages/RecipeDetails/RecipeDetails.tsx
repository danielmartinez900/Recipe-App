import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
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
  const HEIGHT = useWindowDimensions().height;

  if (recipe) {
    let ingredList = [];
    let stepList = [];

    for (let i = 0; i < recipe.ingredientsList.length; i++) {
      ingredList.push(
        <Text key={i} style={styles.text}>
          • {recipe.ingredientsList[i]} {'\n'}
        </Text>,
      );
    }

    for (let i = 0; i < recipe.stepsList.length; i++) {
      stepList.push(
        <Text key={i} style={styles.text}>
          {i + 1}. {recipe.stepsList[i]} {'\n\n'}
        </Text>,
      );
    }

    return (
      <ScrollView
        style={{backgroundColor: 'white'}}
        showsVerticalScrollIndicator={false}>
        <View style={[styles.imageContainer, {height: HEIGHT * 0.5}]}>
          <Image style={styles.image} source={recipe.recipeImage} />
        </View>

        <View style={styles.iconAndTextView}>
          <View style={styles.iconAndText}>
            <Octicons name="clock" style={styles.icon} />
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
              {''} {recipe.prepTime}
            </Text>
          </View>

          <View style={styles.iconAndText}>
            <Octicons name="people" style={styles.icon} />
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
              {''} {recipe.serves} people
            </Text>
          </View>
        </View>

        <View style={{padding: 15}}>
          <Text style={styles.title}>Ingredients</Text>
          <Text style={{marginStart: 10}}>{ingredList}</Text>

          <Text style={styles.title}>Directions</Text>
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
    //height: 350,
  },
  image: {
    width: '98%',
    height: '100%',
    alignSelf: 'center',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  iconAndTextView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon: {
    fontSize: 30,
    color: 'black',
  },
  iconAndText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
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
