import { View, StyleSheet, ScrollView, Linking, Image } from 'react-native';
import React from 'react';
import { Button } from '../components/Button';
import { MyText } from '../components/MyText';

export default function Info() {
  return (
    <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
      <View style={styles.logo}>
        <Image
          source={require('../../assets/adaptive-icon.png')}
          style={{
            width: 100,
            height: 100,
            alignSelf: 'center',
          }}
        />
        <MyText style={styles.version}>1.0.0</MyText>
      </View>
      <MyText style={styles.textAbout}>
        QuickMath was created by a three FSTG students who were looking for a
        way to help their colleges with solving math problems. Three
        datascientists by background :
      </MyText>
      <MyText style={styles.bold}>Aboughazaouat Ghassane </MyText>
      <MyText style={styles.bold}>Ayoujil Doha </MyText>
      <MyText style={styles.bold}>Aglaw Abdenacer </MyText>
      <MyText style={styles.textAbout}>
        Found it challenging trying to solve math problems in an easy,
        approachable way, and so it was out of there personal struggles that
        sparked the idea for QuickMaht.
      </MyText>
      <MyText style={styles.textAbout}>
        Our current mission is to help students understand math, one step at a
        time and it&apos;s our belief that everyone can be good at math!
      </MyText>
      <Button
        onPress={() =>
          Linking.openURL(
            `mailto:smartalertreply@gmail.com?subject=${"Suggestions pour l'application Smart Alert"}`,
          )
        }
        name="AboutUs"
        style={{
          alignSelf: 'center',
          paddingHorizontal: 20,
          width: 200,
          height: 60,
          justifyContent: 'center',
          marginTop: 20,
        }}
      />
      <MyText style={styles.copyright}>
        © 2022 QuickMath. All rights are reserved.
      </MyText>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  version: {
    textAlign: 'left',
    margin: 30,
  },
  logo: {
    alignSelf: 'center',
    margin: 60,
    marginBottom: 10,
  },
  textAbout: {
    textAlign: 'left',
  },
  bold: { fontWeight: 'bold', fontSize: 16, textAlign: 'left' },
  copyright: {
    textAlign: 'center',
    margin: 20,
    fontSize: 10,
  },
});
