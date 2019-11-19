import SearchScreen from './components/SearchScreen'
import ChemicalScreen from './components/ChemicalScreen'
import HomeScreen from './components/HomeScreen'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PhotoScreen from './components/PhotoScreen';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Photo: { screen: PhotoScreen },
  Search: { screen: SearchScreen },
  Chemical: { screen: ChemicalScreen },
});

const App = createAppContainer(MainNavigator);
export default App;
