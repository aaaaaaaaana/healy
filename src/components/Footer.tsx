


import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, Text, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';



export default function Footer (  ) {


  const openZap = () => {
    Linking.openURL('whatsapp://send'); // whatsapp://send?phone=seu-numero-de-telefone
  };


  const openInsta = () => {
    Linking.openURL('https://www.instagram.com/');
  };


  const openEmail = () => {
    Linking.openURL('https://mail.google.com/mail/u/0/#inbox');
  };
 

  return (


    <SafeAreaView style={style.container}>

      <View style={style.footer}>
      
        <View style={style.logoContainer}>

          <Image 
            style={style.logo}
            source={require('../assets/LOGO.png')}
          />

        </View>


        <View style={style.separador}/>

            
        <View style={style.iconsContainer}>

          <TouchableOpacity style={style.icon} onPress={openZap}>

            <FontAwesome 
              name="whatsapp"
              size={20}
              color="#FBF9F7"

            />

          </TouchableOpacity>



          <TouchableOpacity style={style.icon} onPress={openInsta}>

            <MaterialCommunityIcons 
              name="instagram"
              size={20}
              color="#FBF9F7"

            />

          </TouchableOpacity>



          <TouchableOpacity style={style.icon} onPress={openEmail}>

            <MaterialCommunityIcons 
              name="email-multiple" 
              size={20} 
              color="#FBF9F7" 
            />

          </TouchableOpacity>

        </View>
  

        <View style={style.separador}/>


        <View style={style.txtContainer}>


          <Text style={style.txt}>       RM 551401       |       RM 551856       |       RM 99708       {'\n\n'}       RM 98672       |       RM 552295       </Text>


        </View> 


      </View>  


    </SafeAreaView>


  )

}




const style = StyleSheet.create({


  container: {
    flex: 1
  },


  footer: {
    flex: 1,
    backgroundColor: '#272727',
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
    paddingHorizontal: '10%',
    marginBottom: -10,
    justifyContent: 'flex-end',
    marginTop: 100,
  },


  logoContainer: {
    alignItems: 'center',
    marginBottom: '5%',
  },


  logo: {
    padding: 10,
    width: 70,
    height: 70,
    marginTop: 50,
    marginBottom: 30,
  },


  separador: {
    backgroundColor: '#fbf9f7',
    borderRadius: 0.51,
    height: 1,
    left: 0,
    alignItems: 'center',
    top: 0,
    width: 342,
  },


  iconsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    marginBottom: '10%',
    marginTop: '10%',
  },


  icon: {
    padding: 10,
    marginRight: '5%',
    marginLeft: '5%',
  },


  txtContainer: {
    flexWrap: 'wrap', 
    alignItems: 'center',
    marginTop: '10%',
  },


  txt: {
    color: '#FBF9F7',
    fontFamily: 'Georgia',
    fontSize: 10,
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 10,
  },


});


