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
import type { IoK8sApiCoreV1Endpoints } from './IoK8sApiCoreV1Endpoints';
import {
    IoK8sApiCoreV1EndpointsFromJSON,
    IoK8sApiCoreV1EndpointsFromJSONTyped,
    IoK8sApiCoreV1EndpointsToJSON,
} from './IoK8sApiCoreV1Endpoints';
import type { IoK8sApimachineryPkgApisMetaV1ListMeta } from './IoK8sApimachineryPkgApisMetaV1ListMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ListMeta';

/**
 * EndpointsList is a list of endpoints.
 * @export
 * @interface IoK8sApiCoreV1EndpointsList
 */
export interface IoK8sApiCoreV1EndpointsList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiCoreV1EndpointsList
     */
    apiVersion?: string;
    /**
     * List of endpoints.
     * @type {Array<IoK8sApiCoreV1Endpoints>}
     * @memberof IoK8sApiCoreV1EndpointsList
     */
    items: Array<IoK8sApiCoreV1Endpoints>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiCoreV1EndpointsList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiCoreV1EndpointsList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1EndpointsList interface.
 */
export function instanceOfIoK8sApiCoreV1EndpointsList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;

    return isInstance;
}

export function IoK8sApiCoreV1EndpointsListFromJSON(json: any): IoK8sApiCoreV1EndpointsList {
    return IoK8sApiCoreV1EndpointsListFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1EndpointsListFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1EndpointsList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(IoK8sApiCoreV1EndpointsFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiCoreV1EndpointsListToJSON(value?: IoK8sApiCoreV1EndpointsList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(IoK8sApiCoreV1EndpointsToJSON)),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}

