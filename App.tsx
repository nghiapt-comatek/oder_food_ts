import {NavigationContainer} from '@react-navigation/native';

import {TailwindProvider} from 'tailwind-rn';
import RootNavigator from './navigator/RootNavigator';
import utilities from './tailwind.json';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5001/api/cloying-aardvark',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
};

export default App;
