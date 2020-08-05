import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Foundation } from '@expo/vector-icons';

const category = [
  'Any Category',
  'General Knowledge',
  'Entertainment: Books',
  'Entertainment: Film',
  'Entertainment: Musical & Theatres',
  'Entertainment: Television',
  'Entertainment: Video Games',
  'Entertainment: Board Games',
  'Entertainment: Gadgets',
  'Entertainment: Board Games',
  'Entertainment: Japanese Anime & Manga',
  'Entertainment: Cartoon & Animations',
  'Science & Nature',
  'Science: Computers',
  'Science: Mathematics',
  'Science: Gadgets',
  'Mythology',
  'Sports',
  'Geography',
  'History',
  'Politics',
  'Art',
  'Celebrities',
  'Animals',
  'Vehicles',
];

const GetStartedScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(8, 181, 255, 0.8)', 'transparent']}
        start={[0.1, 0.5]}
        style={styles.gradient}
      />
      <View style={styles.titleContainer}>
        <Foundation style={styles.pencilIcon} name="pencil" />
        <Text style={styles.titleText}>TriviApp</Text>
      </View>
      <Text style={styles.sloganText}>How good is your trivia knowledge</Text>
      <TouchableOpacity
        style={styles.beginBtn}
        onPress={() => {
          navigation.navigate('ChooseQuestion');
        }}
      >
        <LinearGradient
          colors={['#8f7d96', '#7d3b96']}
          start={[0.1, 0.5]}
          style={styles.btnGradient}
        >
          <Text style={styles.beginBtnText}>Let's get started</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#0ae2ff',
    width: '100%',
    height: '100%',
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },

  pencilIcon: {
    fontSize: 40,
    marginRight: 10,
  },

  beginBtn: {
    width: 180,
    height: 70,
    // backgroundColor: '#d4d4d4',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  beginBtnText: {
    fontSize: 20,
  },
  titleText: {
    fontSize: 40,
    marginBottom: 10,
    color: 'white',
  },
  sloganText: {
    marginBottom: 40,
    fontSize: 18,
    color: 'white',
  },
  btnGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GetStartedScreen;
