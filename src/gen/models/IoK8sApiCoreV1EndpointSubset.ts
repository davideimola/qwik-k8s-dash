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
import type { IoK8sApiCoreV1EndpointAddress } from './IoK8sApiCoreV1EndpointAddress';
import {
    IoK8sApiCoreV1EndpointAddressFromJSON,
    IoK8sApiCoreV1EndpointAddressFromJSONTyped,
    IoK8sApiCoreV1EndpointAddressToJSON,
} from './IoK8sApiCoreV1EndpointAddress';
import type { IoK8sApiCoreV1EndpointPort } from './IoK8sApiCoreV1EndpointPort';
import {
    IoK8sApiCoreV1EndpointPortFromJSON,
    IoK8sApiCoreV1EndpointPortFromJSONTyped,
    IoK8sApiCoreV1EndpointPortToJSON,
} from './IoK8sApiCoreV1EndpointPort';

/**
 * EndpointSubset is a group of addresses with a common set of ports. The expanded set of endpoints is the Cartesian product of Addresses x Ports. For example, given:
 * 
 * 	{
 * 	  Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
 * 	  Ports:     [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
 * 	}
 * 
 * The resulting set of endpoints can be viewed as:
 * 
 * 	a: [ 10.10.1.1:8675, 10.10.2.2:8675 ],
 * 	b: [ 10.10.1.1:309, 10.10.2.2:309 ]
 * @export
 * @interface IoK8sApiCoreV1EndpointSubset
 */
export interface IoK8sApiCoreV1EndpointSubset {
    /**
     * IP addresses which offer the related ports that are marked as ready. These endpoints should be considered safe for load balancers and clients to utilize.
     * @type {Array<IoK8sApiCoreV1EndpointAddress>}
     * @memberof IoK8sApiCoreV1EndpointSubset
     */
    addresses?: Array<IoK8sApiCoreV1EndpointAddress>;
    /**
     * IP addresses which offer the related ports but are not currently marked as ready because they have not yet finished starting, have recently failed a readiness check, or have recently failed a liveness check.
     * @type {Array<IoK8sApiCoreV1EndpointAddress>}
     * @memberof IoK8sApiCoreV1EndpointSubset
     */
    notReadyAddresses?: Array<IoK8sApiCoreV1EndpointAddress>;
    /**
     * Port numbers available on the related IP addresses.
     * @type {Array<IoK8sApiCoreV1EndpointPort>}
     * @memberof IoK8sApiCoreV1EndpointSubset
     */
    ports?: Array<IoK8sApiCoreV1EndpointPort>;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1EndpointSubset interface.
 */
export function instanceOfIoK8sApiCoreV1EndpointSubset(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoreV1EndpointSubsetFromJSON(json: any): IoK8sApiCoreV1EndpointSubset {
    return IoK8sApiCoreV1EndpointSubsetFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1EndpointSubsetFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1EndpointSubset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addresses': !exists(json, 'addresses') ? undefined : ((json['addresses'] as Array<any>).map(IoK8sApiCoreV1EndpointAddressFromJSON)),
        'notReadyAddresses': !exists(json, 'notReadyAddresses') ? undefined : ((json['notReadyAddresses'] as Array<any>).map(IoK8sApiCoreV1EndpointAddressFromJSON)),
        'ports': !exists(json, 'ports') ? undefined : ((json['ports'] as Array<any>).map(IoK8sApiCoreV1EndpointPortFromJSON)),
    };
}

export function IoK8sApiCoreV1EndpointSubsetToJSON(value?: IoK8sApiCoreV1EndpointSubset | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addresses': value.addresses === undefined ? undefined : ((value.addresses as Array<any>).map(IoK8sApiCoreV1EndpointAddressToJSON)),
        'notReadyAddresses': value.notReadyAddresses === undefined ? undefined : ((value.notReadyAddresses as Array<any>).map(IoK8sApiCoreV1EndpointAddressToJSON)),
        'ports': value.ports === undefined ? undefined : ((value.ports as Array<any>).map(IoK8sApiCoreV1EndpointPortToJSON)),
    };
}

