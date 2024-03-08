import { StyleSheet } from 'react-native';

const registerStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    text: {
        fontSize: 20,
        color: 'red',
        paddingBottom: 20,
        alignSelf: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    btnSubmit: {
        padding: 20,
        marginTop: 20,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#0000b3'
    },
    color: {
        color: 'white'
    },
    btnChangeLogin: {
        padding: 5,
        marginTop: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'white',
        // backgroundColor: '#0000b3'
    },
    color2: {
        color: 'blue'
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default registerStyle;