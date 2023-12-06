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
 * ServiceReference holds a reference to Service.legacy.k8s.io
 * @export
 * @interface IoK8sApiAdmissionregistrationV1ServiceReference
 */
export interface IoK8sApiAdmissionregistrationV1ServiceReference {
    /**
     * `name` is the name of the service. Required
     * @type {string}
     * @memberof IoK8sApiAdmissionregistrationV1ServiceReference
     */
    name: string;
    /**
     * `namespace` is the namespace of the service. Required
     * @type {string}
     * @memberof IoK8sApiAdmissionregistrationV1ServiceReference
     */
    namespace: string;
    /**
     * `path` is an optional URL path which will be sent in any request to this service.
     * @type {string}
     * @memberof IoK8sApiAdmissionregistrationV1ServiceReference
     */
    path?: string;
    /**
     * If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).
     * @type {number}
     * @memberof IoK8sApiAdmissionregistrationV1ServiceReference
     */
    port?: number;
}

/**
 * Check if a given object implements the IoK8sApiAdmissionregistrationV1ServiceReference interface.
 */
export function instanceOfIoK8sApiAdmissionregistrationV1ServiceReference(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "namespace" in value;

    return isInstance;
}

export function IoK8sApiAdmissionregistrationV1ServiceReferenceFromJSON(json: any): IoK8sApiAdmissionregistrationV1ServiceReference {
    return IoK8sApiAdmissionregistrationV1ServiceReferenceFromJSONTyped(json, false);
}

export function IoK8sApiAdmissionregistrationV1ServiceReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAdmissionregistrationV1ServiceReference {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'namespace': json['namespace'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'port': !exists(json, 'port') ? undefined : json['port'],
    };
}

export function IoK8sApiAdmissionregistrationV1ServiceReferenceToJSON(value?: IoK8sApiAdmissionregistrationV1ServiceReference | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'namespace': value.namespace,
        'path': value.path,
        'port': value.port,
    };
}

