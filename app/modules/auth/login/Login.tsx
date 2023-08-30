import { EmailIcon, LockIcon } from '@app/assets/icons/icons'
import { images } from '@app/assets/images'
import { ButtonAtom, InputTextAtom } from '@app/shared'
import { Card } from '@rneui/themed'
import { Formik } from 'formik'
import React, { memo, useState } from 'react'
import { View, Text, Image, SafeAreaView } from 'react-native'
import { LoginViewModel } from './LoginViewModel'
import authStyle from '@app/style/auth-style/authStyle'
import { loginType } from './type/login.type'

function Login(): JSX.Element {
    const [isFocusEmail, setIsFocusEmail] = useState(false);
    const [isFocusPassword, setIsFocusPassword] = useState(false);

    const { onLoginClick } = LoginViewModel()

    return (
        <SafeAreaView style={[authStyle.safeAreaStyle]}>
            <Card containerStyle={[authStyle.cardStyle]}>
                {/* logo */}
                <View style={[authStyle.viewImagageContainer]}>
                    <Image
                        source={images.login_logo}
                        style={[authStyle.logoStyle]}
                        resizeMode="contain"
                    />
                </View>
                {/* view of login */}
                <View style={[authStyle.loginViewContainerStyle]}>
                    <Text style={[authStyle.loginTextStyle]}>LOGIN</Text>
                </View>

                <View >
                    <Formik
                        enableReinitialize
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        onSubmit={(values:loginType) => onLoginClick(values)}>
                        {({ values, handleChange, handleSubmit }: any) => (
                            <View style={[authStyle.viewContainer]}>
                                {/* Input Field for email */}
                                <InputTextAtom
                                    leftIcon={EmailIcon(isFocusEmail)}
                                    placeholder='Email'
                                    style={[authStyle.inputTextStyle]}
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    onFocus={() => setIsFocusEmail(true)}
                                    onBlur={() => setIsFocusEmail(false)}
                                    inputContainerStyle={[isFocusEmail && authStyle.inputBorderStyle]}
                                />
                                {/* Input Field for password */}
                                <InputTextAtom
                                    leftIcon={LockIcon(isFocusPassword)}
                                    placeholder='Password'
                                    style={[authStyle.inputTextStyle]}
                                    secureTextEntry={true}
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                    onFocus={() => setIsFocusPassword(true)}
                                    onBlur={() => setIsFocusPassword(false)}
                                    inputContainerStyle={[isFocusPassword && authStyle.inputBorderStyle]}
                                />
                                {/* Login button  */}
                                <ButtonAtom
                                    title={'LOGIN'}
                                    titleStyle={[authStyle.btnTitleStyle]}
                                    disabled={values.email && values.password ?false:true}
                                    containerStyle={[authStyle.btnContainerStyle]}
                                    onPress={handleSubmit}
                                />
                            </View>
                        )}
                    </Formik>
                </View>
            </Card>
        </SafeAreaView>

    )
}

export default memo(Login)