import { Appearance } from 'react-native';
import { useEffect, useState } from 'react';
import { Pressable, Text, TextInput, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import styles from 'themes/translate';

export default function Translate() {
  const url = Constants.expoConfig?.extra?.urlTranslate;
  const theme = Appearance.getColorScheme();

  interface OutputFormat {
    id: number;
    words: { id: number; in: string; out: string }[];
    translation: string;
  }
  const initialOutput: OutputFormat[] = [];

  const [sourceText, setSourceText] = useState('');
  const [submitText, setSubmitText] = useState('Translate');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(initialOutput);

  const fetchTranslate = async(query: string) => {
    return fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        q: query,
        source: 'fr',
        target: 'en',
        format: 'text',
        api_key: ''
      })
    })
    .then(res => res.json())
    .then(res => res.translatedText)
    .catch(err => {
      console.log(err);
    });
  };
  const submit = async() => {
    if (sourceText && url) {
      setLoading(true);
      setSubmitText('Translating...');
      //sentences extracted by line break
      let linesIn = sourceText.split('\n');
      let linesOut: OutputFormat[] = [];
      for (let i = 0; i < linesIn.length; i++) {
        if (linesIn[i].trim() === '') { continue; }
        let line = {
          id: i,
          words: [] as {id: number, in: string, out: string}[],
          translation: ''
        };
        //words extracted by spaces
        let words = linesIn[i].split(' ');
        for (let j = 0; j < words.length; j++) {
          let word = {
            id: j,
            in: words[j],
            out: ''
          };
          if (words[j].trim() !== '') {
            word.out = await fetchTranslate(words[j]);
          }
          line.words.push(word);
        }
        if (linesIn[i].trim() !== '') {
          line.translation = await fetchTranslate(linesIn[i]);
        }
        linesOut.push(line);
      }
      setResult(linesOut);
      setSubmitText('Translate');
      setLoading(false);
    }
  };
  return (
    <ScrollView>
      <View style={styles.input}>
        <TextInput
          multiline
          style={[styles.field, theme === 'light'
            ? { color: '#575757' }
            : { color: '#A9A9A9' }
          ]}
          value={sourceText}
          onChangeText={setSourceText}
          placeholder={'Enter your text to be translated'}
          placeholderTextColor={'#AEAEAE'}
        />
      </View>
      <View style={styles.submitBtnView}>
        <Pressable disabled={loading} onPress={submit}
          style={[styles.submitBtn, theme === 'light'
            ? { backgroundColor: '#8FC7EF' }
            : { backgroundColor: '#1E528E' }
          ]}
        >
          <Text style={[styles.btnTxt,
            { 'color': loading ? 'gray' : 'white' }
          ]}>{submitText}</Text>
        </Pressable>
      </View>
      <View>
        {result.map((item) => (
          <View key={item.id} style={styles.line}>
            <View style={styles.words}>
              {item.words.map((word) => (
                <View key={word.id} style={styles.word}>
                  <Text style={styles.wordOut}>{word.out}</Text>
                  <Text style={[styles.wordIn, theme === 'light'
                    ? { color: '#323232' }
                    : { color: '#D9D9D9' }
                  ]}>{word.in}</Text>
                </View>
              ))}
            </View>
            <Text style={[styles.translation, theme === 'light'
              ? { color: '#787878' }
              : { color: '#A9A9A9' }
            ]}>{item.translation}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
