/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { memo } from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { default as themes } from '@app/theme/themes.json'
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { theme } from './theme/theme';
import { ThemeProvider } from '@rneui/themed';
import { LoaderAtom } from './shared';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './core/navigation/navigate';
import Toast from 'react-native-toast-message';
import { toastConfig } from './core/helpers/ToastConfig';
import { AppRoute } from './routes/app.route';
import { LogBox, SafeAreaView } from 'react-native';

/** app init from here */

function App(): JSX.Element {
  LogBox.ignoreAllLogs()
  return <SafeAreaView style={{flex:1}}>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...themes }}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <NavigationContainer ref={navigationRef}>
                <AppRoute/>
                <LoaderAtom />
                <Toast config={toastConfig} />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </ApplicationProvider>
  </SafeAreaView>

}

export default memo(App);
