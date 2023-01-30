
import React,{Component, useState} from 'react';
import { StyleSheet, Text, View,style, Button, TextInput } from 'react-native';
import ProductText, { ProductImage, ProductImage2 } from './src/screens/ProductText';
export default function App() {
  const [showStatus, setShowStatus] = useState(true);
  const [name,setname] = useState('');
  const [mota,setmota] = useState('');
  return (
    <View style={styles.container}>
      <View  style={styles.top}>
      <Text>Họ và tên : Nguyễn Xuân Tùng </Text>
      <Text>MSV : PH19782</Text>
      </View>
      <View style={styles.button}>
        <Button 
        title='Thêm mới'
        onPress={() => setShowStatus(!showStatus)}
        />
        {
        showStatus
        ?
        <>
        <TextInput
        onChangeText={(txt) => setname(txt)}
        value = {name}
        placeholder = 'Nhập name'
        />
        <TextInput
        onChangeText={(txt) => setmota(txt)}
        value = {mota}
        placeholder = 'Nhập mô tả'
        />
       
        <Button
        title='Lưu'
        onPress={() => setShowStatus(false)}
        />
        </>
        : null
        }

      </View>
       
      <View>
        <View style = {styles.textbottom}>
        <ProductImage/>
          <View style = {styles.textbottommota}>
          <Text>Họ và Tên : Nguyễn Việt Chinh</Text>
          <Text>Mô tả : Chinh xinh gái vãi ỏ</Text>
          </View>
      
        </View>
        <View style = {styles.textbottom}>
        <ProductImage2/>
          <View style = {styles.textbottommota}>
            <Text>Họ và Tên : Nguyễn Việt Chinh</Text>
            <Text>Chinh xinh gái vãi ò</Text>
          </View>
        
        </View>
      
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#FFC0CB',
  },
  top : {
    marginTop : 40
  },
  button: {
    marginTop : 80,
    backgroundColor : '#E0FFFF',
    marginLeft : 100,
    marginRight : 100,
    borderWidth : 5,
    borderColor : 'blue'
    
  },

  textbutton : {
    fontSize : 50,
    color : 'blue'

  },
  textbottom : {
    flexDirection : "row"
  },
  textbottommota : {
    flexDirection : 'column',
    paddingTop : 60,
    paddingLeft : 20,


  }

  });
