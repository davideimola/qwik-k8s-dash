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
import type { IoK8sApiRbacV1PolicyRule } from './IoK8sApiRbacV1PolicyRule';
import {
    IoK8sApiRbacV1PolicyRuleFromJSON,
    IoK8sApiRbacV1PolicyRuleFromJSONTyped,
    IoK8sApiRbacV1PolicyRuleToJSON,
} from './IoK8sApiRbacV1PolicyRule';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 * @export
 * @interface IoK8sApiRbacV1Role
 */
export interface IoK8sApiRbacV1Role {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiRbacV1Role
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiRbacV1Role
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiRbacV1Role
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * Rules holds all the PolicyRules for this Role
     * @type {Array<IoK8sApiRbacV1PolicyRule>}
     * @memberof IoK8sApiRbacV1Role
     */
    rules?: Array<IoK8sApiRbacV1PolicyRule>;
}

/**
 * Check if a given object implements the IoK8sApiRbacV1Role interface.
 */
export function instanceOfIoK8sApiRbacV1Role(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiRbacV1RoleFromJSON(json: any): IoK8sApiRbacV1Role {
    return IoK8sApiRbacV1RoleFromJSONTyped(json, false);
}

export function IoK8sApiRbacV1RoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiRbacV1Role {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'rules': !exists(json, 'rules') ? undefined : ((json['rules'] as Array<any>).map(IoK8sApiRbacV1PolicyRuleFromJSON)),
    };
}

export function IoK8sApiRbacV1RoleToJSON(value?: IoK8sApiRbacV1Role | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'rules': value.rules === undefined ? undefined : ((value.rules as Array<any>).map(IoK8sApiRbacV1PolicyRuleToJSON)),
    };
}

