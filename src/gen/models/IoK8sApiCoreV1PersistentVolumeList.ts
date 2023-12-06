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
import type { IoK8sApiCoreV1PersistentVolume } from './IoK8sApiCoreV1PersistentVolume';
import {
    IoK8sApiCoreV1PersistentVolumeFromJSON,
    IoK8sApiCoreV1PersistentVolumeFromJSONTyped,
    IoK8sApiCoreV1PersistentVolumeToJSON,
} from './IoK8sApiCoreV1PersistentVolume';
import type { IoK8sApimachineryPkgApisMetaV1ListMeta } from './IoK8sApimachineryPkgApisMetaV1ListMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ListMeta';

/**
 * PersistentVolumeList is a list of PersistentVolume items.
 * @export
 * @interface IoK8sApiCoreV1PersistentVolumeList
 */
export interface IoK8sApiCoreV1PersistentVolumeList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiCoreV1PersistentVolumeList
     */
    apiVersion?: string;
    /**
     * items is a list of persistent volumes. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
     * @type {Array<IoK8sApiCoreV1PersistentVolume>}
     * @memberof IoK8sApiCoreV1PersistentVolumeList
     */
    items: Array<IoK8sApiCoreV1PersistentVolume>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiCoreV1PersistentVolumeList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiCoreV1PersistentVolumeList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1PersistentVolumeList interface.
 */
export function instanceOfIoK8sApiCoreV1PersistentVolumeList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;

    return isInstance;
}

export function IoK8sApiCoreV1PersistentVolumeListFromJSON(json: any): IoK8sApiCoreV1PersistentVolumeList {
    return IoK8sApiCoreV1PersistentVolumeListFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1PersistentVolumeListFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1PersistentVolumeList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(IoK8sApiCoreV1PersistentVolumeFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiCoreV1PersistentVolumeListToJSON(value?: IoK8sApiCoreV1PersistentVolumeList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(IoK8sApiCoreV1PersistentVolumeToJSON)),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}

