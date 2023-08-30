/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './app/App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { store } from '@app/store';

/** call redux store  */
const JetsDevApp = () => <Provider store={store}>
    <App />
</Provider>
AppRegistry.registerComponent(appName, () => JetsDevApp);
