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
import type { IoK8sApimachineryPkgApisMetaV1ListMeta } from './IoK8sApimachineryPkgApisMetaV1ListMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ListMeta';
import type { IoK8sApimachineryPkgApisMetaV1StatusDetails } from './IoK8sApimachineryPkgApisMetaV1StatusDetails';
import {
    IoK8sApimachineryPkgApisMetaV1StatusDetailsFromJSON,
    IoK8sApimachineryPkgApisMetaV1StatusDetailsFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1StatusDetailsToJSON,
} from './IoK8sApimachineryPkgApisMetaV1StatusDetails';

/**
 * Status is a return value for calls that don't return other objects.
 * @export
 * @interface IoK8sApimachineryPkgApisMetaV1Status
 */
export interface IoK8sApimachineryPkgApisMetaV1Status {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1Status
     */
    apiVersion?: string;
    /**
     * Suggested HTTP return code for this status, 0 if not set.
     * @type {number}
     * @memberof IoK8sApimachineryPkgApisMetaV1Status
     */
    code?: number;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1StatusDetails}
     * @memberof IoK8sApimachineryPkgApisMetaV1Status
     */
    details?: IoK8sApimachineryPkgApisMetaV1StatusDetails;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1Status
     */
    kind?: string;
    /**
     * A human-readable description of the status of this operation.
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1Status
     */
    message?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApimachineryPkgApisMetaV1Status
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
    /**
     * A machine-readable description of why this operation is in the "Failure" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it.
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1Status
     */
    reason?: string;
    /**
     * Status of the operation. One of: "Success" or "Failure". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1Status
     */
    status?: string;
}

/**
 * Check if a given object implements the IoK8sApimachineryPkgApisMetaV1Status interface.
 */
export function instanceOfIoK8sApimachineryPkgApisMetaV1Status(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApimachineryPkgApisMetaV1StatusFromJSON(json: any): IoK8sApimachineryPkgApisMetaV1Status {
    return IoK8sApimachineryPkgApisMetaV1StatusFromJSONTyped(json, false);
}

export function IoK8sApimachineryPkgApisMetaV1StatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApimachineryPkgApisMetaV1Status {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'details': !exists(json, 'details') ? undefined : IoK8sApimachineryPkgApisMetaV1StatusDetailsFromJSON(json['details']),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function IoK8sApimachineryPkgApisMetaV1StatusToJSON(value?: IoK8sApimachineryPkgApisMetaV1Status | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'code': value.code,
        'details': IoK8sApimachineryPkgApisMetaV1StatusDetailsToJSON(value.details),
        'kind': value.kind,
        'message': value.message,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
        'reason': value.reason,
        'status': value.status,
    };
}

