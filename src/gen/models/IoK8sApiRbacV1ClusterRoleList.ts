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
import type { IoK8sApiRbacV1ClusterRole } from './IoK8sApiRbacV1ClusterRole';
import {
    IoK8sApiRbacV1ClusterRoleFromJSON,
    IoK8sApiRbacV1ClusterRoleFromJSONTyped,
    IoK8sApiRbacV1ClusterRoleToJSON,
} from './IoK8sApiRbacV1ClusterRole';
import type { IoK8sApimachineryPkgApisMetaV1ListMeta } from './IoK8sApimachineryPkgApisMetaV1ListMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ListMeta';

/**
 * ClusterRoleList is a collection of ClusterRoles
 * @export
 * @interface IoK8sApiRbacV1ClusterRoleList
 */
export interface IoK8sApiRbacV1ClusterRoleList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiRbacV1ClusterRoleList
     */
    apiVersion?: string;
    /**
     * Items is a list of ClusterRoles
     * @type {Array<IoK8sApiRbacV1ClusterRole>}
     * @memberof IoK8sApiRbacV1ClusterRoleList
     */
    items: Array<IoK8sApiRbacV1ClusterRole>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiRbacV1ClusterRoleList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiRbacV1ClusterRoleList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * Check if a given object implements the IoK8sApiRbacV1ClusterRoleList interface.
 */
export function instanceOfIoK8sApiRbacV1ClusterRoleList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;

    return isInstance;
}

export function IoK8sApiRbacV1ClusterRoleListFromJSON(json: any): IoK8sApiRbacV1ClusterRoleList {
    return IoK8sApiRbacV1ClusterRoleListFromJSONTyped(json, false);
}

export function IoK8sApiRbacV1ClusterRoleListFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiRbacV1ClusterRoleList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(IoK8sApiRbacV1ClusterRoleFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiRbacV1ClusterRoleListToJSON(value?: IoK8sApiRbacV1ClusterRoleList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(IoK8sApiRbacV1ClusterRoleToJSON)),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}

