import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const LoginStyle = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    BackArrowView: {
        height: height / 16,
        flex: 0.3,
        justifyContent: 'center',
    },
    BackArrow: {
        color: "rgba(255,255,255,1)",
        fontSize: 30,
        left: 10,
        top: 10,
    },
    LogoView: {
        flex: 2,
        height: height / 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Logo: {
        height: 150,
        width: 140
    },
    LoginViewModule: {
        flex: 3,
        height: height / 3
    },
    YellowImgView: {
        flex: 0.1,
        justifyContent: 'center'
    },
    YelloImg: {
        left: 15,
        height: 4,
        width: 30
    },
    LoginContainer: {
        alignContent: 'center',
        justifyContent: 'center',
        flex: 2,
        left: 15,
        width: width / 1.08
    },
    TitleText: {
        fontSize: 36,
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: '#fff'
    },
    DescriptionTitle: {
        fontSize: 15,
        fontStyle: 'normal',
        color: '#fff'
    },
    EmailInput: {
        height: 63,
        marginTop: 10,
        marginBottom: 5,
        padding: 10,
        color: '#fff'
    },
    PasswordInput: {
        height: 63,
        marginTop: 10,
        marginBottom: 5,
        padding: 10,
        color: '#fff'
    },
    ForgotPassword: { 
        fontSize: 18, 
        fontStyle: 'normal', 
        top: 10, 
        color: '#556969', 
        justifyContent: 'center', 
        textAlign: 'center' 
    },
    BottomTextView: { flex: 1, 
        top: 50, 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    NoAccount: { 
        textAlign: 'right', 
        marginRight: 15, 
        fontSize: 15, 
        color: '#C7D6D6' 
    },
    CreateOne: { 
        textAlign: 'left', 
        marginLeft: 15, 
        textDecorationLine: 'underline', 
        fontSize: 15, 
        color: '#C7D6D6' 
    },
    TouchableButtonCustom: {
        width: width, 
        backgroundColor:'#2DAF95', 
        height: 52.2, 
        justifyContent: 'center'
    },
    TouchableButtonText: {
        textAlign: 'center', 
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#C7D6D6', 
        justifyContent: 'center'
    },


})

export default LoginStyle
