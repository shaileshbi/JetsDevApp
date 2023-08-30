import { getDimensionScreen } from '@app/core/helpers/getDimensionScreen';
import { useAppSelector } from '@app/store'
import colors from '@app/theme/colors';
import React, { memo } from 'react'
import { StyleSheet, View } from 'react-native'
import { Flow } from 'react-native-animated-spinkit';

const { width, height } = getDimensionScreen();

function LoaderAtom(): JSX.Element {
    const loader = useAppSelector(state => state.loader)
    return (
        <>
            {loader &&
                <View style={styles.container}>
                    <Flow size={50} color="#556ee6" />
                </View>
            }
        </>
    )
}

export default memo(LoaderAtom)


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        width,
        height,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.black,
        opacity: 0.4
    }
})
