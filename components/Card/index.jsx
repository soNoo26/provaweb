import { View, TouchableOpacity, Text, Image } from "react-native"
import { style } from "./styles.jsx"   
export default function Card({name}){
    return(
        <View style={style.container}>
            <TouchableOpacity style={style.botao}>
            <Image
                style={style.imagem}
                source={require('../../assets/download.png')}
            />
            </TouchableOpacity>
            <Text style={style.texto}>
                {name}
            </Text>
        </View>
    )
}