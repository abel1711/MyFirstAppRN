import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

export const DimensionScreen = () => {
    
    const { width, height } = useWindowDimensions();

    return (
        <View>
            <View style={style.container}>
                <View style={{...style.purpleBox, width: width * .5}} />

            </View>
            <Text 
            style={{
                fontSize: 30
            }}> w: {width}, h: {height}</Text>
        </View>
    )
};


const style = StyleSheet.create({
    container: {
        width: '60%',
        backgroundColor: 'red',
        height: 250
    },
    purpleBox: {
        backgroundColor: '#5856d6',
        height: '50%',
        width: '50%',
    }
})