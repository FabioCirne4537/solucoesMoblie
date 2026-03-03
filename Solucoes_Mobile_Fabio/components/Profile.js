import {View, Text, Image} from 'react-native'

export function Person(){
    return(
        <View>Meu componente pessoal</View>
    )
}

export function Fabio(){
    return(
        <View><Text>Meu primeiro componente sozinho</Text>
        <Image source={require('../Sources/image.jpg')}/>
        <Image source={require('../Sources/image.jpg')}/>
        <Image source={require('../Sources/image.jpg')}/>
        <Image source={require('../Sources/image.jpg')}/>
        <Image source={require('../Sources/image.jpg')}/>
        </View>
    )
}

export default function Profile(){
    return(
        <View>
            <Text>Meu primeiro componente</Text>
        </View>
    )
}