import { StyleSheet } from "react-native";

  export const estilo = StyleSheet.create({
    tela: {
      flex: 1,
      backgroundColor: '#696047',
    },
    form: {
      flexDirection: 'row',
      width: '100%',
      marginTop: 16,
      marginBottom: 30,
      paddingLeft: 20,
      paddingRight: 20
    },
    input_text: {
      flex: 1,
      height: 70,
      color: '#000',
      fontSize: 22,
      padding: 12,
      borderRadius: 50,
      backgroundColor: '#A7D49B',
      marginRight: 5,
    },
    botao: {
      width: 70,
      borderRadius: 40,
      fontSize: 50,
      backgroundColor: '#A7D49B',
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      color: '#000',
      fontSize: 25,
    },
    imagem: {
      width: 50,
      height: 50,
    },
    imagemcima: {
      height: 120,
      width : '100%',
    },
    lista:{
      paddingLeft: 20,
      paddingRight: 20
    }
  })