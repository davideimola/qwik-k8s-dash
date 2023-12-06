/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.28.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { IoK8sApiNetworkingV1IngressPortStatus } from './IoK8sApiNetworkingV1IngressPortStatus';
import {
    IoK8sApiNetworkingV1IngressPortStatusFromJSON,
    IoK8sApiNetworkingV1IngressPortStatusFromJSONTyped,
    IoK8sApiNetworkingV1IngressPortStatusToJSON,
} from './IoK8sApiNetworkingV1IngressPortStatus';

/**
 * IngressLoadBalancerIngress represents the status of a load-balancer ingress point.
 * @export
 * @interface IoK8sApiNetworkingV1IngressLoadBalancerIngress
 */
export interface IoK8sApiNetworkingV1IngressLoadBalancerIngress {
    /**
     * hostname is set for load-balancer ingress points that are DNS based.
     * @type {string}
     * @memberof IoK8sApiNetworkingV1IngressLoadBalancerIngress
     */
    hostname?: string;
    /**
     * ip is set for load-balancer ingress points that are IP based.
     * @type {string}
     * @memberof IoK8sApiNetworkingV1IngressLoadBalancerIngress
     */
    ip?: string;
    /**
     * ports provides information about the ports exposed by this LoadBalancer.
     * @type {Array<IoK8sApiNetworkingV1IngressPortStatus>}
     * @memberof IoK8sApiNetworkingV1IngressLoadBalancerIngress
     */
    ports?: Array<IoK8sApiNetworkingV1IngressPortStatus>;
}

/**
 * Check if a given object implements the IoK8sApiNetworkingV1IngressLoadBalancerIngress interface.
 */
export function instanceOfIoK8sApiNetworkingV1IngressLoadBalancerIngress(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiNetworkingV1IngressLoadBalancerIngressFromJSON(json: any): IoK8sApiNetworkingV1IngressLoadBalancerIngress {
    return IoK8sApiNetworkingV1IngressLoadBalancerIngressFromJSONTyped(json, false);
}

export function IoK8sApiNetworkingV1IngressLoadBalancerIngressFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiNetworkingV1IngressLoadBalancerIngress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hostname': !exists(json, 'hostname') ? undefined : json['hostname'],
        'ip': !exists(json, 'ip') ? undefined : json['ip'],
        'ports': !exists(json, 'ports') ? undefined : ((json['ports'] as Array<any>).map(IoK8sApiNetworkingV1IngressPortStatusFromJSON)),
    };
}

export function IoK8sApiNetworkingV1IngressLoadBalancerIngressToJSON(value?: IoK8sApiNetworkingV1IngressLoadBalancerIngress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hostname': value.hostname,
        'ip': value.ip,
        'ports': value.ports === undefined ? undefined : ((value.ports as Array<any>).map(IoK8sApiNetworkingV1IngressPortStatusToJSON)),
    };
}

