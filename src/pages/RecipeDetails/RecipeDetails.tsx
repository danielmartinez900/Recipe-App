import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

import {avocado_toastImage} from '../../assets/data/images';

const RecipeDetails = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={avocado_toastImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: '98%',
    height: 300,
    resizeMode: 'cover',
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
});

export default RecipeDetails;
