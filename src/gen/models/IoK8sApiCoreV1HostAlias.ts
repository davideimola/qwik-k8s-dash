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
 * HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file.
 * @export
 * @interface IoK8sApiCoreV1HostAlias
 */
export interface IoK8sApiCoreV1HostAlias {
    /**
     * Hostnames for the above IP address.
     * @type {Array<string>}
     * @memberof IoK8sApiCoreV1HostAlias
     */
    hostnames?: Array<string>;
    /**
     * IP address of the host file entry.
     * @type {string}
     * @memberof IoK8sApiCoreV1HostAlias
     */
    ip?: string;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1HostAlias interface.
 */
export function instanceOfIoK8sApiCoreV1HostAlias(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoreV1HostAliasFromJSON(json: any): IoK8sApiCoreV1HostAlias {
    return IoK8sApiCoreV1HostAliasFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1HostAliasFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1HostAlias {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hostnames': !exists(json, 'hostnames') ? undefined : json['hostnames'],
        'ip': !exists(json, 'ip') ? undefined : json['ip'],
    };
}

export function IoK8sApiCoreV1HostAliasToJSON(value?: IoK8sApiCoreV1HostAlias | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hostnames': value.hostnames,
        'ip': value.ip,
    };
}

