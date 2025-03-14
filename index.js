import { registerRootComponent } from 'expo';

import App from './App';
import LAb6 from './conmolents/API';
import API from './conmolents/API';
import BaiOne from './conmolents';
import HomeScreen from './conmolents/HomeScreen';
import CustomTextInput from './conmolents/CustomTextInput';
import Bai3 from './conmolents/Bai3L1';


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Bai3);
