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
import type { IoK8sApiCoordinationV1Lease } from './IoK8sApiCoordinationV1Lease';
import {
    IoK8sApiCoordinationV1LeaseFromJSON,
    IoK8sApiCoordinationV1LeaseFromJSONTyped,
    IoK8sApiCoordinationV1LeaseToJSON,
} from './IoK8sApiCoordinationV1Lease';
import type { IoK8sApimachineryPkgApisMetaV1ListMeta } from './IoK8sApimachineryPkgApisMetaV1ListMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ListMeta';

/**
 * LeaseList is a list of Lease objects.
 * @export
 * @interface IoK8sApiCoordinationV1LeaseList
 */
export interface IoK8sApiCoordinationV1LeaseList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiCoordinationV1LeaseList
     */
    apiVersion?: string;
    /**
     * items is a list of schema objects.
     * @type {Array<IoK8sApiCoordinationV1Lease>}
     * @memberof IoK8sApiCoordinationV1LeaseList
     */
    items: Array<IoK8sApiCoordinationV1Lease>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiCoordinationV1LeaseList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiCoordinationV1LeaseList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * Check if a given object implements the IoK8sApiCoordinationV1LeaseList interface.
 */
export function instanceOfIoK8sApiCoordinationV1LeaseList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;

    return isInstance;
}

export function IoK8sApiCoordinationV1LeaseListFromJSON(json: any): IoK8sApiCoordinationV1LeaseList {
    return IoK8sApiCoordinationV1LeaseListFromJSONTyped(json, false);
}

export function IoK8sApiCoordinationV1LeaseListFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoordinationV1LeaseList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(IoK8sApiCoordinationV1LeaseFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiCoordinationV1LeaseListToJSON(value?: IoK8sApiCoordinationV1LeaseList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(IoK8sApiCoordinationV1LeaseToJSON)),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}

