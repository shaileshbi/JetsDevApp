import colors from '@app/theme/colors';
import React, { memo } from 'react'
import { ActivityIndicator, ActivityIndicatorProps, View } from 'react-native'
import { verticalScale } from 'react-native-size-matters';


interface ListLoaderAtomProps extends ActivityIndicatorProps {
    show: boolean;
}
function BottomListLoaderAtom(props: ListLoaderAtomProps): JSX.Element {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: verticalScale(props.show ? 5 : 0), marginVertical: verticalScale(10) }}>
            {props.show && <ActivityIndicator size={'small'} color={colors.primary} {...props} />}
        </View>
    )
}

export default memo(BottomListLoaderAtom)
