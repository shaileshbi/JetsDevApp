import authStyle from '@app/style/auth-style/authStyle'
import { Input, InputProps } from '@rneui/themed'
import React, { forwardRef } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

interface InputTextAtomProps extends InputProps {
    enableView?: boolean
    containerStyle?: StyleProp<ViewStyle>
    onlySecureTextEntry?: boolean
  
}
function InputTextAtom(props: InputTextAtomProps, ref: any):JSX.Element {
  return (
    <Input
            ref={ref}
            errorStyle={[authStyle.errorStyle]}
            containerStyle={[authStyle.containerStyle, props.containerStyle,]}
            inputContainerStyle={[props.inputContainerStyle]}
            style={[authStyle.inputAtomStyle, props.style]}
            autoCapitalize='none'
            rightIcon={{}}
            {...props}
        />
  )
}

export default forwardRef(InputTextAtom)
