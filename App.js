import UserView from './src/components/View';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import Body from './src/components/Body';
export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <Body />
    </TailwindProvider>
  );
}
