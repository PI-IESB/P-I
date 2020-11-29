import { styleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
      height: 80,
      borderWidth:1,
      borderColor: '#282c34',
      borderRadius: 5,
      MarginBottom: 10,
      flexDirection:'row'
      
    },
    image:{
        height: 80,
        width: 100,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    description:{
        flex: 2
        padding:10
    },
});