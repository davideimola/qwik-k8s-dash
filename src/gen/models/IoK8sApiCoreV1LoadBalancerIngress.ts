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
import type { IoK8sApiCoreV1PortStatus } from './IoK8sApiCoreV1PortStatus';
import {
    IoK8sApiCoreV1PortStatusFromJSON,
    IoK8sApiCoreV1PortStatusFromJSONTyped,
    IoK8sApiCoreV1PortStatusToJSON,
} from './IoK8sApiCoreV1PortStatus';

/**
 * LoadBalancerIngress represents the status of a load-balancer ingress point: traffic intended for the service should be sent to an ingress point.
 * @export
 * @interface IoK8sApiCoreV1LoadBalancerIngress
 */
export interface IoK8sApiCoreV1LoadBalancerIngress {
    /**
     * Hostname is set for load-balancer ingress points that are DNS based (typically AWS load-balancers)
     * @type {string}
     * @memberof IoK8sApiCoreV1LoadBalancerIngress
     */
    hostname?: string;
    /**
     * IP is set for load-balancer ingress points that are IP based (typically GCE or OpenStack load-balancers)
     * @type {string}
     * @memberof IoK8sApiCoreV1LoadBalancerIngress
     */
    ip?: string;
    /**
     * Ports is a list of records of service ports If used, every port defined in the service should have an entry in it
     * @type {Array<IoK8sApiCoreV1PortStatus>}
     * @memberof IoK8sApiCoreV1LoadBalancerIngress
     */
    ports?: Array<IoK8sApiCoreV1PortStatus>;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1LoadBalancerIngress interface.
 */
export function instanceOfIoK8sApiCoreV1LoadBalancerIngress(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoreV1LoadBalancerIngressFromJSON(json: any): IoK8sApiCoreV1LoadBalancerIngress {
    return IoK8sApiCoreV1LoadBalancerIngressFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1LoadBalancerIngressFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1LoadBalancerIngress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hostname': !exists(json, 'hostname') ? undefined : json['hostname'],
        'ip': !exists(json, 'ip') ? undefined : json['ip'],
        'ports': !exists(json, 'ports') ? undefined : ((json['ports'] as Array<any>).map(IoK8sApiCoreV1PortStatusFromJSON)),
    };
}

export function IoK8sApiCoreV1LoadBalancerIngressToJSON(value?: IoK8sApiCoreV1LoadBalancerIngress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hostname': value.hostname,
        'ip': value.ip,
        'ports': value.ports === undefined ? undefined : ((value.ports as Array<any>).map(IoK8sApiCoreV1PortStatusToJSON)),
    };
}

