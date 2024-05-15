

import React, { useState, useRef, useEffect } from 'react';
import { Text, StyleSheet, View, Platform, StatusBar, SafeAreaView, ScrollView, Animated, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useFonts } from 'expo-font';

import Header from "../components/Header"
import Footer from "../components/Footer"
import Sobre from '../components/Sobre'

const Stack = createStackNavigator();



export default function Home({ navigation }){
  
  const [loaded] = useFonts({
    Clarendon: require('../assets/ClarendonLTRegular.ttf'),
    Corporate: require('../assets/CorporateSRegular.otf'),
  });



  if (!loaded) {
    return null; 
  }



  return (
    

    <ImageBackground source={require('../assets/fundofinal.jpg')} style={style.container}>

      <StatusBar backgroundColor="#048A8F" />



      <Header navigation={navigation}/>

      <ScrollView
        style={style.scrollView}
        contentContainerStyle={style.contentContainer}
      >

 
        <Sobre/>

        <Footer/>

      
      </ScrollView>

    </ImageBackground>

    
  );
}




const style = StyleSheet.create({


  container: {
    flex: 1,
    marginTop: '1%',
    width: '100%',
    height: '100%'
  },


  scrollView: {
    flex: 1,
  },


  contentContainer: {
    alignItems: 'center',
  },




});


