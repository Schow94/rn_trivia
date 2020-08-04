import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

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

const ChooseCatScreen = ({ navigation }) => {
  const numQuestions = navigation.getParam('numQuestions');

  const [cat, setCat] = useState('');

  const chooseCat = (val) => {
    setCat(val);
    navigation.navigate('ChooseDifficulty', {
      numQuestions: numQuestions,
      category: val,
    });
  };


  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Choose a category</Text>

      <FlatList
        style={styles.list}
        data={category}
        showsVerticalScrollIndicator={false}
        keyExtractor={(num) => num}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => chooseCat(item)}
              style={styles.btn}
            >
              <Text style={styles.btnText}>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
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

  titleText: {
    fontSize: 30,
    margin: 10,
  },

  btn: {
    width: 320,
    height: 40,
    backgroundColor: '#d4d4d4',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderColor: '#b5b5b5',
    borderWidth: 1,
  },
  btnText: {
    fontSize: 18,
  },
});

export default ChooseCatScreen;
