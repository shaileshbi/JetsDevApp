import colors from "@app/theme/colors";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { scale, verticalScale } from "react-native-size-matters";

export default StyleSheet.create({
    containerStyle:{
        paddingLeft: 0,
        paddingRight: 0,
    },
    inputAtomStyle:{
        fontSize: RFValue(14),
       
        color: colors.textSecondary,
    },
    errorStyle:{
        fontSize: RFValue(15),
    },
    iconStyle:{
        color:colors.textSecondary,
        fontSize:RFValue(23)
    },
    safeAreaStyle:{
        flex: 1
    },
    cardStyle:{
        flex: 1, borderRadius: 5, 
        marginBottom: verticalScale(10), 
        marginVertical: verticalScale(20)
    },
    viewImagageContainer:{
        position: 'absolute',
            backgroundColor: 'transparent',
            zIndex: 1, 
            top: verticalScale(-30),
            left: 0,
            right: 0,
            alignItems: "center",
    },
    logoStyle:{
        height: verticalScale(50), width: scale(50)
    },
    logoHomeDashBoardStyle:{
        height: verticalScale(35), width: scale(40)
    },
    loginViewContainerStyle:{
        alignItems: "center" ,marginVertical:verticalScale(70)
    },
    loginTextStyle:{
        color:colors.black,fontWeight:'500'
    },
    viewContainer:{
        marginHorizontal: scale(16), justifyContent:'center',
    },
    inputTextStyle:{
        color:colors.black,fontSize:RFValue(12)
    },
    inputBorderStyle:{
        borderColor: colors.primary
    },
    btnContainerStyle:{
        marginVertical: verticalScale(30) 
    },
    btnTitleStyle:{
        fontSize: RFValue(10),
    }
})