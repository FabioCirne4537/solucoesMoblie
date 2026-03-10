import {View, Image, StyleSheet} from 'react-native';

export default function Images(){
    return(
        <View style={styles.view_image}>
                <Image style={styles.imagem} source={require('../Sources/jacared1.jpg')}/>
                <Image style={styles.imagem} source={require('../Sources/jacared2.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    view_image :{
        flexDirection: 'row',
        alignContent: 'space-around',
        gap: '20',
    },
    imagem:{
        height: 200,
        width: 200
    },
})

