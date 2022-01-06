import React from 'react';
import {
  
  Dimensions,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

import { useFonts } from 'expo-font';
import {Chewy_400Regular} from '@expo-google-fonts/chewy'
import colors from '../config/colors';
import AppText from '../components/AppText';

const { width, height } = Dimensions.get('window');

const COLORS = { primary: colors.primary, white: colors.white ,black:colors.black}


const slides = [
  {
    id: '1',
    image: require("../assets/a.png"),
    title: 'Where Music Live',
    subtitle:'Music is what keep you moving',

  },
  {
    id: '2',
    image: require('../assets/b.png'),
    title: 'Music is life',
    subtitle:'Music is what keep you moving',

  },
  {
    id: '3',
    image: require('../assets/c.png'),
    title: "Music is what feelings sounds like",
    subtitle:'Music is what keep you moving',

  }
]

const Slide = ({ item }) => {
  return (
    <View style={styles.slide}>
      <Image source={item.image} style={{ height: '75%', width, resizeMode: 'contain' }} />
      <AppText style={{color:colors.black}}>{item.title}</AppText>
    </View>
  )
} 

function OnboardingScreen({navigation}) {
  // const [loaded] = useFonts({
  //   Chewy_400Regular,
  // })

  // if (!loaded) {
  //   return null
  // }
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef(null);

  const Footer = () => {
    return(
    <View style={{
        height: height * 0.25,
        justifyContent: 'space-between',
        paddingHorizontal:20,
      }}>
      <View 
      style={{
       flexDirection:'row',
       justifyContent:'center',
       marginTop:20,
          }}>
          {slides.map((_,index) => (
            <View key={index} style={[styles.indicator, currentSlideIndex == index && {
              backgroundColor: COLORS.black,
              width:25,
            }]} />
          ))}
        </View>
        <View style={{ marginBottom: 20 }}>
          {
            currentSlideIndex === slides.length -1 ?
          <View style={{height:50}}>
                <TouchableOpacity style={[styles.btn_2]}
                  onPress={() => navigation.replace("WelcomeScreen")}>
                  {/* <Text style={{ color: COLORS.primary, fontSize: 15, fontWeight: 'bold', }}>Get Started</Text>     */}
                  <AppText style={{color:colors.primary}}>Get Started</AppText>
            </TouchableOpacity>
              </View> :    
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={[styles.btn]} onPress={skip}>
                  <AppText style={{color:colors.black,fontSize:18}}>SKIP</AppText>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn_2]} onPress={goNextSlide}>
            <AppText style={{color:colors.primary,fontSize:18}}>Next</AppText>
            </TouchableOpacity>
          </View>
          }
        </View>
      </View>
    );
  }
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);

  };
  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(nextSlideIndex);
    }
  }
  const skip = () => {
      const lastSlideIndex = slides.length - 1;
      const offset = lastSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(lastSlideIndex);
    
  }
  return (
<SafeAreaView style={styles.safeAreaView}>
    <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
         ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        data={slides}
      contentContainerStyle={{ height: height * 0.75 }}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <Slide item={item}/>}
      
      />
      <Footer />
       </SafeAreaView>  );
}

const styles = StyleSheet.create({
  container: {},
  safeAreaView:{
  flex: 1,
  backgroundColor:COLORS.primary,
  },
  slide: {
    alignItems: 'center',
  },
  title: {
   
    
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius:2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: 'transparent',
    borderWidth:1,
    justifyContent: 'center',
    alignItems:'center'
  },
  btn_2: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:30
  }

});

export default OnboardingScreen;