import { StyleSheet, Text, View } from 'react-native';

export const FlexScreen = () => {

    return (
        <View style={style.container}>
            <View style={style.box1} />
            <View style={style.box2} />
            <View style={style.box3} />
        </View>
    )
};


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray'
    },
    box1: {
        flex: 1,
        backgroundColor: '#5856d6'
    },
    box2: {
        flex: 2,
        backgroundColor: '#403f97'
    },
    box3: {
        flex: 3,
        backgroundColor: '#1f1f49'
    },
})