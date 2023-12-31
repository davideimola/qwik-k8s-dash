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
import type { IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpec } from './IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpec';
import {
    IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpecFromJSON,
    IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpecFromJSONTyped,
    IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpecToJSON,
} from './IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpec';
import type { IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatus } from './IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatus';
import {
    IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatusFromJSON,
    IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatusFromJSONTyped,
    IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatusToJSON,
} from './IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatus';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * PriorityLevelConfiguration represents the configuration of a priority level.
 * @export
 * @interface IoK8sApiFlowcontrolV1beta2PriorityLevelConfiguration
 */
export interface IoK8sApiFlowcontrolV1beta2PriorityLevelConfiguration {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiFlowcontrolV1beta2PriorityLevelConfiguration
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiFlowcontrolV1beta2PriorityLevelConfiguration
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiFlowcontrolV1beta2PriorityLevelConfiguration
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpec}
     * @memberof IoK8sApiFlowcontrolV1beta2PriorityLevelConfiguration
     */
    spec?: IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpec;
    /**
     * 
     * @type {IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatus}
     * @memberof IoK8sApiFlowcontrolV1beta2PriorityLevelConfiguration
     */
    status?: IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatus;
}

/**
 * Check if a given object implements the IoK8sApiFlowcontrolV1beta2PriorityLevelConfiguration interface.
 */
export function instanceOfIoK8sApiFlowcontrolV1beta2PriorityLevelConfiguration(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationFromJSON(json: any): IoK8sApiFlowcontrolV1beta2PriorityLevelConfiguration {
    return IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationFromJSONTyped(json, false);
}

export function IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiFlowcontrolV1beta2PriorityLevelConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatusFromJSON(json['status']),
    };
}

export function IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationToJSON(value?: IoK8sApiFlowcontrolV1beta2PriorityLevelConfiguration | null): any {
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
        'spec': IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpecToJSON(value.spec),
        'status': IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatusToJSON(value.status),
    };
}

