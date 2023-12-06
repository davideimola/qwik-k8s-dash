import * as trpc from '@trpc/server';
import { k8sClient } from './k8s';

export const createContext = async () => {
	return {
		k8sClient: k8sClient
	};
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
