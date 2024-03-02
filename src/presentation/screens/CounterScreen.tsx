import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components';
import { Button } from 'react-native-paper';

export const CounterScreen = () => {

    const [count, setCount] = useState(0);

    const increaseBy = (value: number) => {
        if (count + value < 0) return;
        setCount(prev => prev + value);

    }

    return (
        <View style={style.container}>
            <Text style={style.title}>{count}</Text>
            <Button mode='contained' onPress={() => increaseBy(1)} onLongPress={() => setCount(0)}>
                Incrementar
            </Button>
        </View>
    )
};


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 80,
        color: 'black',
        fontWeight: '300',
    },

})