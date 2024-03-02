import { StyleSheet, Text, View } from 'react-native';

export const HomeworkScreen = () => {

    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.purpleBox]}/>
            <View style={[styles.box, styles.orangeBox]}/>
            <View style={[styles.box, styles.blueBox]}/>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425b',
        // justifyContent: 'space-between',
        // alignItems: 'stretch',
        // flexDirection: 'row'
    },
    box:{
        // width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white'
    },
    purpleBox: {
        backgroundColor: '#5856d6',
        // alignSelf: 'flex-end'
        flex: 1

    },
    orangeBox: {
        backgroundColor: '#f0a23b',
        // alignSelf: 'flex-start',
        flex: 1
    },
    blueBox: {
        backgroundColor: '#28c4d9',
        // alignSelf: 'flex-start',
        flex: 2
    }
})