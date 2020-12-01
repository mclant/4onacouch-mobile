import { Navigation } from 'react-native-navigation';
import App from './App';
import CameraScreen from './src/components/CameraScreen';
// AppRegistry.registerComponent('myApp', () => FirstScreen );
Navigation.registerComponent('fourOnACouchMobile', () => App);
Navigation.registerComponent('CameraScreen', () => CameraScreen);
Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
				component: {
					name: 'fourOnACouchMobile'
				}
           }
         ]
       }
     }
  });
});