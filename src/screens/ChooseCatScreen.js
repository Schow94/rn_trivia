import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
const category = [
  { category: 'Any Category', code: '' },
  { category: 'General Knowledge', code: '9' },
  { category: 'Entertainment: Books', code: '10' },
  { category: 'Entertainment: Film', code: '11' },
  { category: 'Entertainment: Music', code: '12' },
  { category: 'Entertainment: Musical & Theatres', code: '13' },
  { category: 'Entertainment: Television', code: '14' },
  { category: 'Entertainment: Video Games', code: '15' },
  { category: 'Entertainment: Board Games', code: '16' },
  { category: 'Entertainment: Comics', code: '29' },
  { category: 'Entertainment: Japanese Anime & Manga', code: '31' },
  { category: 'Entertainment: Cartoon & Animations', code: '32' },
  { category: 'Science & Nature', code: '17' },
  { category: 'Science: Computers', code: '18' },
  { category: 'Science: Mathematics', code: '19' },
  { category: 'Science: Gadgets', code: '30' },
  { category: 'Mythology', code: '20' },
  { category: 'Sports', code: '21' },
  { category: 'Geography', code: '22' },
  { category: 'History', code: '23' },
  { category: 'Politics', code: '24' },
  { category: 'Art', code: '25' },
  { category: 'Celebrities', code: '26' },
  { category: 'Animals', code: '27' },
  { category: 'Vehicles', code: '28' },
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
        keyExtractor={(cat) => cat.category}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => chooseCat(item.code)}
              style={styles.btn}
            >
              <Text style={styles.btnText}>{item.category}</Text>
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
