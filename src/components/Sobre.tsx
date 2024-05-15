


import React, { useState, useRef } from 'react';
import { Text, StyleSheet, View, Image, SafeAreaView, Animated, Dimensions } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';
 


const { width: screenWidth } = Dimensions.get('window');


const Card: React.FC<{ titulo: string; txt: string; icon?: string; fundo: boolean; icon2?: string }> = ({ titulo, txt, icon, fundo, icon2 }) => {
  
  return(

    <View style={[style.cardContainer, { width: screenWidth * 0.10 }]}>

      <View style={[style.iconContainer, { backgroundColor: fundo ? '#E1D4E9' : 'transparent' }]}>
        {icon2 ? (

          <FontAwesome6 name={icon2} size={35} color={fundo ? '#DAB9E3' : '#E1D4E9'} />
        ) : (

          <FontAwesome5 name={icon} size={35} color={fundo ? '#DAB9E3' : '#E1D4E9'} />

        )}

      </View>

      <Text style={style.cardTitle}>{titulo}</Text>
      <Text style={style.cardText}>{txt}</Text>

    </View>
  );
};



const Sobre = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [cardsLargura, setCardsWidth] = useState(0);

  const handleLayout = (event) => {
    setCardsWidth(event.nativeEvent.layout.width);
  };
  

  return (


    <SafeAreaView style={style.container}>

      <View style={style.contentContainer}>

        <View style={style.imagemContainer}>
          <Image
            style={style.imagem}
            source={require('../assets/maosegurandocoracao.jpg')}
            resizeMode="cover"
          />


          <View style={style.overlayConheca}>

            <Text style={style.txtTitulo}>Conheça Healy!!</Text>

            <Text style={style.txtTexto}>
              Este é um exemplo de texto sobre a imagem. Ele cobre apenas metade da
              imagem e está posicionado no topo dela.

            </Text>

          </View>

        </View>

      
        <View style={style.overlayPlanos}>

          <Text style={style.txtTitulo}>Como funciona nossos serviço</Text>

          <Text style={style.txtTexto}>
            Este é um exemplo de texto sobre a imagem. Ele cobre apenas metade da
            imagem e está posicionado no topo dela.

          </Text>

          <Animated.ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            onLayout={handleLayout}
            style={style.overlayPlanosCards}
          >

            <View style={{ width: cardsLargura * 3.5, flexDirection: 'row' }}>

              <Card
                fundo
                icon= 'brain'
                titulo= "Neurológica"
                txt= "Trata as doenças que acometem o sistema nervoso central, nervos, nervos periféricos e músculos."

              />

              <Card
                fundo
                icon= 'heartbeat'
                titulo= "Cardiológica"
                txt= " Trata do coração e vasos sanguíneos."

              />

              <Card
                fundo
                icon2= 'person'
                titulo= "Endocrinologia"
                txt= "Trata de hormônios e metabolismo."

              />

              <Card
                fundo
                titulo= "Nefrologia"
                txt= "Trata o sistema renal e urinário. "

              >

              <Image source={require('../assets/rim.png')} style={{ width: 30, height: 30 }} /> 

              </Card>

              <Card
                fundo
                titulo= "Oncologia"
                txt= "Trata de tumores benignos ou malignos."

              >


              </Card>
              <Image source={require('../assets/cancer.png')} style={{ width: 30, height: 30 }} /> 


            </View>
          </Animated.ScrollView>


        </View>


      </View>

    </SafeAreaView>



  );
};





const style = StyleSheet.create({


  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  contentContainer: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },


  imagemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 310,
    width: screenWidth,
    aspectRatio: 1, 
    maxHeight: '80%', 
  },


  imagem: {
    flex: 1,
    height: '100%',
    width: '110%',
    borderRadius: 20,
  },


  overlayConheca: {
    position: 'absolute',
    top: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBF9F7', 
    borderRadius: 15,
    width: '110%',
    maxWidth: '100%',
    elevation: 2,
    marginBottom: '15%',
    marginTop: '10%',

  },


  overlayPlanos: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#FBF9F7', 
    borderRadius: 10,
    width: '90%',
    maxWidth: '100%',
    marginTop: '40%',
  },


  overlayPlanosCards: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#048A8F', 
    padding: 20,
    width: '100%',
    maxWidth: '100%',
    borderRadius: 10,
  },


  cardContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffff', 
    padding: 10,
    borderRadius: 20, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2, 
    marginBottom: 20,
    marginTop: 20,
    marginHorizontal: 30,
    width: '100%',


  },


  iconContainer: {
    width: '60%', 
    height: '25%', 
    borderRadius: 20, 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    marginTop: 10,
  },
  



  cardTitle: {
    color: '#048A8F',
    fontFamily: 'Clarendon',
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
  },


  cardText: {
    fontSize: 12,
    color: '#272727',
    fontFamily: 'Georgia',
    textAlign: 'left',
    justifyContent: 'center',
  },


  txtTitulo: {
    color: '#048A8F',
    fontSize: 20,
    fontFamily: 'Clarendon',
    marginBottom: 10,
    textAlign: 'center',
    padding: 20,
  },


  txtTexto: {
    color: '#272727',
    fontFamily: 'Corporate',
    fontSize: 14,
    textAlign: 'left',
    justifyContent: 'center',
    marginBottom: 30,
    padding: 20,
  },


});

export default Sobre;





