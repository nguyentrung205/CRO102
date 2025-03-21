import { registerRootComponent } from 'expo';

import App from './App';
import LAb6 from './conmolents/API';
import API from './conmolents/API';
import BaiOne from './conmolents';
import HomeScreen from './conmolents/HomeScreen';
import CustomTextInput from './conmolents/CustomTextInput';
import Bai3 from './conmolents/Bai3L1';
import Main from './lab2/Main';
import MoveAnimationScreen from './Lab3/bai1';
import Move from './Lab3/bai2';
import ScrollHeaderScreen from './Lab3/bai3';



// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(ScrollHeaderScreen);
