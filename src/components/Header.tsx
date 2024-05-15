


import React from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, Text, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

 

 
export default function Header ({ navigation }) {


 
  return (

    <SafeAreaView style={style.headerContainer}>
 

  
      <View style={style.contentContainer}>
  
         <View style={style.iconContainer1}>

          <TouchableOpacity
            onPress={() => navigation.navigate("Perfil")}
          >

            <FontAwesome5 
              name="heartbeat" 
              size={24} 
              color="#DAB9E3" 
            />

          </TouchableOpacity>
  
        </View>
  
  
  
        <View style={style.txtContainer}>

            <Text style={style.txtTitulo}>
              Home
            </Text>
  
  
        </View>
  
  
  
        <View style={style.iconContainer2}>
  
          <TouchableOpacity
            onPress={() => navigation.navigate("Menu")}
          >
  
            <Entypo 
              name="menu" 
              size={27} 
              color="#DAB9E3" 
            />
  
          </TouchableOpacity>
  
        </View>

      </View>


    </SafeAreaView>
  )
}
 


const style = StyleSheet.create({
 
 
  headerContainer: {
    paddingHorizontal: 16,
    paddingBottom: 40,
    paddingTop: 25,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
 



  contentContainer: {
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
 
 
  iconContainer1: {
    flex: 1, 
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'flex-start', 
    top: '5%',

  },


  iconContainer2: {
    flex: 1, 
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'flex-end', 
    top: '5%',
  },


 
  txtContainer: {
    flex: 3, 
    justifyContent: 'center',
    alignItems: 'center',
    top: '5%',

  },
 

  txtTitulo: {
    color: '#ffff', 
    fontSize: 20,
    fontFamily: 'Georgia',
    fontWeight: 'bold',
  },
 

 
 
});
 
 
 
 