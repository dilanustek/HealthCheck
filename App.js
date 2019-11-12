import SearchScreen from './components/SearchScreen'
import ChemicalScreen from './components/ChemicalScreen'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const MainNavigator = createStackNavigator({
  Search: { screen: SearchScreen },
  Chemical: { screen: ChemicalScreen },
});

const App = createAppContainer(MainNavigator);
export default App;
