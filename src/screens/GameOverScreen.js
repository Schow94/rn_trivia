import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

const GameOverScreen = ({ navigation }) => {
  const right = navigation.getParam('right');
  const wrong = navigation.getParam('wrong');

  console.log('From game over screen: ', 'right: ', right, 'wrong: ', wrong);

  const restart = () => {
    navigation.navigate('GetStarted');
  };

  const score = right / (right + wrong);
  let grade;

  if (score >= 0.9) {
    grade = 'A';
  } else if (score >= 0.8) {
    grade = 'B';
  } else if (score >= 0.7) {
    grade = 'C';
  } else if (score >= 0.6) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  console.log(grade, score);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(4, 207, 58, 0.8)', 'transparent']}
        start={[0.1, 0.5]}
        style={styles.gradient}
      />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Game Over</Text>
      </View>

      <View style={styles.scoreContainer}>
        <View>
          <Text style={styles.scoreText}>Score: {score * 100}%</Text>
          <Text style={styles.gradeText}>Grade: {grade}</Text>
        </View>

        <View>
          <Text style={styles.correctText}>Correct: {right}</Text>
          <Text style={styles.wrongText}>Wrong: {wrong}</Text>
        </View>
      </View>

      <View style={styles.btnContainer}>
        {/* <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('ReviewQuestions')}
        >
          <Text style={styles.btnText}>Review your questions</Text>
        </TouchableOpacity> */}

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

  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    width: '100%',
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
    marginTop: 50,
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
  scoreText: {
    fontSize: 25,
    color: 'blue',
  },
  gradeText: {
    fontSize: 25,
    color: 'blue',
  },
});

export default GameOverScreen;
