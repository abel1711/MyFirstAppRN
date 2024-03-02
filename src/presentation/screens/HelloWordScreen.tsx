import { StyleSheet, Text, View } from 'react-native';

interface Props {
    name?: string;
}

export const HelloWordScreen = ({ name = 'World' }: Props) => {
    return (
        <View style={style.container}>
            <Text 
            style={style.title}
            numberOfLines={1}
            // ellipsizeMode='clip'
            >Hello, {name}</Text>
        </View>
    )
};


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
        color: 'black',
        padding: 20
    }
})