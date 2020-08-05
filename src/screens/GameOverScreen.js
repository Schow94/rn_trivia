import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GameOverScreen = ({ navigation }) => {
  const right = navigation.getParam('right');
  const wrong = navigation.getParam('wrong');

  console.log('From game over screen: ', 'right: ', right, 'wrong: ', wrong);

  const restart = () => {
    navigation.navigate('GetStarted');
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Game Over</Text>
      </View>

      <View style={styles.scoreContainer}>
        <Text style={styles.correctText}>Correct: {right}</Text>
        <Text style={styles.wrongText}>Wrong: {wrong}</Text>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Restart</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => restart()}>
          <Text style={styles.btnText}>Main Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderColor: 'red',
    // borderWidth: 2,
    height: '100%',
    width: '100%',
    backgroundColor: '#0ae2ff',
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    // borderColor: 'blue',
    // borderWidth: 2,
    margin: 20,
  },
  title: {
    fontSize: 40,
    color: 'white',
  },
  btnContainer: {
    alignItems: 'center',
  },
  btn: {
    width: 200,
    height: 50,
    backgroundColor: '#d4d4d4',
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#b5b5b5',
    borderWidth: 1,
  },
  btnText: {
    fontSize: 20,
  },
  scoreContainer: {
    // backgroundColor: '#ffcf57',
    backgroundColor: 'white',
    width: '80%',
    height: '30%',
    borderRadius: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  correctText: {
    fontSize: 30,
    color: 'green',
  },
  wrongText: {
    fontSize: 30,
    color: 'red',
  },
});

export default GameOverScreen;
