import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Slide1 from '../components/Slide1';
import Slide2 from '../components/Slide2';
import Slide3 from '../components/Slide3';


const AppStack = createStackNavigator({
  Slide1,
  Slide2,
  Slide3,
}, {
    headerMode: 'none',
  });

const App = createAppContainer(AppStack);
export default App;
