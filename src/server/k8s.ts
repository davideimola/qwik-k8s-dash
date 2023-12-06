import * as k8s from "@kubernetes/client-node";

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

export const k8sClient = {
	coreV1: kc.makeApiClient(k8s.CoreV1Api),
	appsV1: kc.makeApiClient(k8s.AppsV1Api),
	objectApi: kc.makeApiClient(k8s.KubernetesObjectApi),
};