import {View, Text, useWindowDimensions, StyleSheet} from 'react-native';
import React from 'react';
import Octicon from 'react-native-vector-icons/Octicons';

interface Props {
  title: string;
}

const Header = ({title}: Props) => {
  const HEIGHT = useWindowDimensions().height;

  return (
    <View style={[styles.container, {height: HEIGHT * 0.09}]}>
      <Octicon name="arrow-left" style={styles.icon} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  icon: {
    position: 'absolute',
    left: 15,
    fontSize: 26,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Header;
