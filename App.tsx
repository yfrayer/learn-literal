import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Appearance } from 'react-native';
import Translate from 'components/Translate';
import styles from 'themes/app';

export default function App() {
  const theme = Appearance.getColorScheme();
  return (
    <View style={[styles.app, theme === 'light'
      ? { backgroundColor: '#8FC7EF' }
      : { backgroundColor: '#051A2E' }
    ]}>
      <View style={styles.header}>
        <Text style={[styles.title, theme === 'light'
          ? { color: 'white' }
          : { color: '#D9D9D9' }
        ]}>Learn Literal</Text>
      </View>
      <View style={[styles.translate, theme === 'light'
        ? { backgroundColor: 'white' }
        : { backgroundColor: 'black' }
      ]}>
        <Translate/>
      </View>
    </View>
  );
}
