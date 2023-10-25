import { Badge } from '@/components/ui/badge.tsx';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card.tsx';
import { NodeInfo, PXE, createPXEClient, waitForSandbox } from '@aztec/aztec.js';
import { HStack, VStack } from './ui/stacks.tsx';
import { useEffect } from 'react';
import { atom, useAtom } from 'jotai';
import debug from 'debug';

const logger = debug('sandcastle:network');
logger.enabled = true;

const { VITE_SANDBOX_URL } = import.meta.env;
type Network = {
  pxe?: PXE;
  nodeInfo?: NodeInfo;
}
export const networkAtom = atom<Network>({});

const Network = () => {
  const [network, setNetwork] = useAtom(networkAtom);

  useEffect(() => {
    if (network.pxe) return;
    (async () => {
      logger('connecting to pxe...');
      const pxe = createPXEClient(VITE_SANDBOX_URL);
      await waitForSandbox(pxe);
      const nodeInfo = await pxe.getNodeInfo();
      logger('connected to pxe');
      setNetwork({ pxe, nodeInfo });
    })()
  }, [network]);

  return (
    <HoverCard>
      <HoverCardTrigger>
        <Badge variant='outline' className='h-full'>
          {network.pxe ? (
            <HStack className='items-center px-1'>
              <p className='text-sm font-light'>Aztec Sandbox</p>
              <div className='w-2 h-2 rounded-full bg-green-600' />
            </HStack>
          ) : (
            <HStack className='items-center px-1'>
              <p className='text-sm font-light'>Connecting...</p>
              <div className='w-2 h-2 rounded-full bg-yellow-600' />
            </HStack>
          )}
        </Badge>
      </HoverCardTrigger>
      <HoverCardContent>
        {network.pxe ? (
          <VStack className='text-xs'>
            <HStack className='items-between'>
              <p className='font-light'>Chain ID</p>
              <p className='font-bold ml-auto'>{network.nodeInfo?.chainId}</p>
            </HStack>
            <HStack className='items-between'>
              <p className='font-light'>Protocol Version</p>
              <p className='font-bold ml-auto'>{network.nodeInfo?.protocolVersion}</p>
            </HStack>
            <HStack className='items-between'>
              <p className='font-light'>Sandbox Version</p>
              <p className='font-bold ml-auto'>{network.nodeInfo?.sandboxVersion}</p>
            </HStack>
            <HStack className='items-between'>
              <p className='font-light'>Nargo Version</p>
              <p className='font-bold ml-auto'>{network.nodeInfo?.compatibleNargoVersion}</p>
            </HStack>
          </VStack>
        ) : (
          <p className='font-light'>Connecting to Sandbox...</p>
        )}
      </HoverCardContent>
    </HoverCard>
  );
};

export default Network;