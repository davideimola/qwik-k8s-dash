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
/**
 * ForZone provides information about which zones should consume this endpoint.
 * @export
 * @interface IoK8sApiDiscoveryV1ForZone
 */
export interface IoK8sApiDiscoveryV1ForZone {
    /**
     * name represents the name of the zone.
     * @type {string}
     * @memberof IoK8sApiDiscoveryV1ForZone
     */
    name: string;
}

/**
 * Check if a given object implements the IoK8sApiDiscoveryV1ForZone interface.
 */
export function instanceOfIoK8sApiDiscoveryV1ForZone(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function IoK8sApiDiscoveryV1ForZoneFromJSON(json: any): IoK8sApiDiscoveryV1ForZone {
    return IoK8sApiDiscoveryV1ForZoneFromJSONTyped(json, false);
}

export function IoK8sApiDiscoveryV1ForZoneFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiDiscoveryV1ForZone {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function IoK8sApiDiscoveryV1ForZoneToJSON(value?: IoK8sApiDiscoveryV1ForZone | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}
