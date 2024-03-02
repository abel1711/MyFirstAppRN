import { StyleSheet, Text, View } from 'react-native';

export const FlexDirectionScreen = () => {

    return (
        <View style={style.container}>
            <View style={[style.box, style.box1]}/>
            <View style={[style.box, style.box2]}/>
            <View style={[style.box, style.box3]}/>
        </View>
    )
};


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d4d4d4',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column'
    },
    box1: {
        backgroundColor: '#5856d6'
    },
    box2: {
        backgroundColor: '#403f97'
    },
    box3: {
        backgroundColor: '#1f1f49'
    },
    box: {
        width: 100,
        height: 100,
    }
})