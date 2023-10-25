import { ThemeToggle } from './components/theme-toggle.tsx';
import { HStack } from './components/ui/stacks.tsx';
import Network, { networkAtom } from './components/network.tsx';
import { useAtom } from 'jotai';

function App() {
  const [network] = useAtom(networkAtom);

  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <HStack className="flex h-16 items-center justify-between px-4">
          <HStack>
            <p>Aztec Sandbox Vite Starter</p>
          </HStack>
          <HStack>
            <Network />
            <ThemeToggle />
          </HStack>
        </HStack>
      </div>
      {network.pxe ? (
        <div>Connected</div>
      ) : (
        <div>Connecting...</div>
      )}
    </div>
  )
};

export default App;
