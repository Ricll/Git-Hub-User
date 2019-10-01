import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '~/pages/Main';
import User from '~/pages/User';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: () => ({
          title: `Usuários`,
          headerBackTitle: null,
        }),
      },
      User: {
        screen: User,
        navigationOptions: ({ navigation }) => ({
          title: navigation.getParam('user').name,
          headerBackTitle: null,
        }),
      },
    },
    {
      headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
