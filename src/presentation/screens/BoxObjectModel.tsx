import { StyleSheet, Text, View } from 'react-native';

export const BoxObjectModel = () => {

    return (
        <View style={style.container}>
            {/* <Text style={style.title}>BoxObjectModel</Text> */}
            <View
                style={style.purpleBox}
            ></View>
        </View>
    )
};


const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'red'
    },
    title: {
        fontSize: 40,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderWidth: 10
    },
    purpleBox:{
        // flex: 1,
        backgroundColor: 'purple',
        height: 300
    }
})