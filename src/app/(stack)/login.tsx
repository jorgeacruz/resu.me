import { View, Text, TouchableOpacity, Image, StatusBar, TextInput, ImageBackground } from 'react-native';
import { styles } from '../styles'
import { router, Link} from 'expo-router';
import AppLoading from 'expo-app-loading';


import {
  useFonts,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';

export default function  Login() {

  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function handleLogin() {
    router.replace('/(tabs)/home')
  }
 

 return (
   <View style={{backgroundColor:'#0000'}}>
    <ImageBackground source={require('../images/Job2.png')} style={{width: '100%', height: '100%'}}>
    <View style={styles.logo}>
        <Image source={require('../images/logo.png')} style={{width:300, height:60 }} />
    </View>
    <View style={styles.Slogan}>
        <Text style={styles.textBold}>O mercado de trabalho precisa te conhecer</Text>
        <Text style={styles.textLight}>Divulgue seu CV aos recrutadores</Text>
    </View>

    <View style={styles.form}>
        
        <TextInput style={styles.input} placeholder="Digite seu email" placeholderTextColor={'#FFBB00'} autoCapitalize='none'/>
        <TextInput style={styles.input} placeholder="Digite sua senha" placeholderTextColor={'#FFBB00'} secureTextEntry={true}/>
        <TouchableOpacity style={styles.cta} onPress={handleLogin} >
          <Text style={styles.text}>Logar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => router.replace('/')} >
        <Text style={{color:'#fff', paddingTop:20, textAlign:'center'}}>Esqueci minha senha</Text>
      </TouchableOpacity>
      
    </ImageBackground>

    <StatusBar barStyle="light-content" hidden={true} />
   </View>
  );
}  