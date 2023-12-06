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
 * Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
 * @export
 * @interface IoK8sApiCoreV1GlusterfsPersistentVolumeSource
 */
export interface IoK8sApiCoreV1GlusterfsPersistentVolumeSource {
    /**
     * endpoints is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
     * @type {string}
     * @memberof IoK8sApiCoreV1GlusterfsPersistentVolumeSource
     */
    endpoints: string;
    /**
     * endpointsNamespace is the namespace that contains Glusterfs endpoint. If this field is empty, the EndpointNamespace defaults to the same namespace as the bound PVC. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
     * @type {string}
     * @memberof IoK8sApiCoreV1GlusterfsPersistentVolumeSource
     */
    endpointsNamespace?: string;
    /**
     * path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
     * @type {string}
     * @memberof IoK8sApiCoreV1GlusterfsPersistentVolumeSource
     */
    path: string;
    /**
     * readOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
     * @type {boolean}
     * @memberof IoK8sApiCoreV1GlusterfsPersistentVolumeSource
     */
    readOnly?: boolean;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1GlusterfsPersistentVolumeSource interface.
 */
export function instanceOfIoK8sApiCoreV1GlusterfsPersistentVolumeSource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "endpoints" in value;
    isInstance = isInstance && "path" in value;

    return isInstance;
}

export function IoK8sApiCoreV1GlusterfsPersistentVolumeSourceFromJSON(json: any): IoK8sApiCoreV1GlusterfsPersistentVolumeSource {
    return IoK8sApiCoreV1GlusterfsPersistentVolumeSourceFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1GlusterfsPersistentVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1GlusterfsPersistentVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'endpoints': json['endpoints'],
        'endpointsNamespace': !exists(json, 'endpointsNamespace') ? undefined : json['endpointsNamespace'],
        'path': json['path'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
    };
}

export function IoK8sApiCoreV1GlusterfsPersistentVolumeSourceToJSON(value?: IoK8sApiCoreV1GlusterfsPersistentVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'endpoints': value.endpoints,
        'endpointsNamespace': value.endpointsNamespace,
        'path': value.path,
        'readOnly': value.readOnly,
    };
}

