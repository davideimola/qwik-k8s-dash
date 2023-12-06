
import { t } from '../trpc';
import { frameworkRouter } from './framework';
import { appV1Router } from './appV1';
import { k8sClient} from '../k8s'

export const appRouter = t.router({
	framework: frameworkRouter,	
	appV1: appV1Router,
});

// export type definition of API
export type AppRouter = typeof appRouter;

// e.g tRPC server side
export const tServer = appRouter.createCaller({ k8sClient });;
