import { z } from 'zod';
import { t } from '../trpc';

export const appV1Router = t.router({
	getDeployments: t.procedure.input(z.object({
		namespace: z.string(),
	})).query(
		async ({ ctx, input }) => {
			// your code here	
			const deployments = await ctx.k8sClient.appsV1.listNamespacedDeployment(input.namespace)
			return deployments;
		}
	),
	deleteDeployment: t.procedure.input(z.object({
		namespace: z.string(),
		deploymentName: z.string(),
	})).mutation(
		async ({ ctx, input }) => {
			await ctx.k8sClient.appsV1.deleteNamespacedDeployment(input.deploymentName, input.namespace)

			return {status: true}
		}
	)
});
