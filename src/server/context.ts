import * as trpc from '@trpc/server';

export const createContext = async () => {
	return {};
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
