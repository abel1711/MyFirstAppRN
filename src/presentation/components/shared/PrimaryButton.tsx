import { Pressable, StyleSheet, Text } from 'react-native';

interface Props {
    label: string,
    onPress?: () => void;
    onLongPress?: () => void;
}

export const PrimaryButton = ({ label, onLongPress, onPress, ...props }: Props) => {

    return (
        <Pressable
            style={({ pressed }) => [
                style.button,
                pressed && style.buttonPressed
            ]}
            onPress={() => onPress && onPress()}
            onLongPress={() => onLongPress && onLongPress()}
            {...props}
        >
            <Text style={style.textButton}>{label}</Text>
        </Pressable>
    )
};


const style = StyleSheet.create({
    textButton: {
        color: 'white',
        fontSize: 20
    },
    button: {
        backgroundColor: '#5856d6',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    buttonPressed: {
        backgroundColor: '#8280dd'
    }
})