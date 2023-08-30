import { images } from '@app/assets/images'
import authStyle from '@app/style/auth-style/authStyle'
import React, { memo } from 'react'
import { Image } from 'react-native'

/** header for logo  */
function HeaderDashBaord(): JSX.Element {
    return (
        <Image
            source={images.login_logo}
            style={[authStyle.logoHomeDashBoardStyle]}
            resizeMode="contain"
        />
    )
}

export default memo(HeaderDashBaord)
