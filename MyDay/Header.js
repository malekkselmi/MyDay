import React , {useState} from 'react'
import { StyleSheet, Text, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

function Header({navigation , title}) {

    const openMenu = () => {
    navigation.openDrawer()
    }

return(
<View style={styles.header}>
 <MaterialIcons name='menu' size={30} onPress={openMenu} style={styles.icon} />
    <View>
        <Text style={styles.headerText}>{title}</Text>
    </View>
</View>
)

}

const styles = StyleSheet.create({
 header : {
     width:'100%',
     height:'100%',
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems:'center',
     backgroundColor:'black'
 }   ,
  headerText: {
      color:'white',
      fontWeight:'bold' ,
      fontSize : 20,
      letterSpacing: 1

  },
  icon:{
      position:'absolute',
      left:5,
      color:'white'
  }
})

export default Header