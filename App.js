import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './navigation/Stack';

export default function App() {
  return (
    <NavigationContainer>
      <StackRoutes/>
    </NavigationContainer>
  );
}