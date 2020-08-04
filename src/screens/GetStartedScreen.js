import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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
      <Text style={styles.titleText}>Test your trivia knowledge</Text>
      <TouchableOpacity
        style={styles.beginBtn}
        onPress={() => {
          navigation.navigate('ChooseQuestion');
        }}
      >
        <Text style={styles.beginBtnText}>Let's get started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0ae2ff',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },

  beginBtn: {
    width: 180,
    height: 70,
    backgroundColor: '#d4d4d4',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderColor: '#b5b5b5',
    borderWidth: 1,
  },
  beginBtnText: {
    fontSize: 20,
  },
  titleText: {
    fontSize: 30,
    margin: 10,
  },
});

export default GetStartedScreen;
