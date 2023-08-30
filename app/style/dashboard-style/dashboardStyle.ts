import colors from "@app/theme/colors";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { scale, verticalScale } from "react-native-size-matters";

export default StyleSheet.create({
    cardStyle:{
        paddingHorizontal:0,
        paddingVertical:0,
        marginVertical:verticalScale(5),borderRadius:RFValue(4)
    },
    viewContainerStyle:{
        flexDirection: 'row', 
        paddingVertical: verticalScale(16), 
        alignItems: "center",
    },
    profileIcon:{
        marginLeft: scale(-8)
    },
    viewTextContainer:{
        flexDirection: 'row',
         justifyContent: 'space-between',
          marginHorizontal: scale(8) 
    },
    textNameStyle:{
        color: colors.black, 
        fontSize: RFValue(13),
        flex:1 
    },favIconStyle:{
        width: RFValue(20), 
        height: RFValue(20)
    },
    imageViewContainer:{
        flexDirection: 'row', 
        alignItems: 'center',
        marginHorizontal: scale(8),
    },
    locationStyle:{
        color: colors.lightGray,
         fontSize: RFValue(12), 
         marginLeft: scale(8)
    }
})