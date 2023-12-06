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
import type { IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationCondition } from './IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationCondition';
import {
    IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationConditionFromJSON,
    IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationConditionFromJSONTyped,
    IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationConditionToJSON,
} from './IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationCondition';

/**
 * PriorityLevelConfigurationStatus represents the current state of a "request-priority".
 * @export
 * @interface IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatus
 */
export interface IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatus {
    /**
     * `conditions` is the current state of "request-priority".
     * @type {Array<IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationCondition>}
     * @memberof IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatus
     */
    conditions?: Array<IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationCondition>;
}

/**
 * Check if a given object implements the IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatus interface.
 */
export function instanceOfIoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatusFromJSON(json: any): IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatus {
    return IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatusFromJSONTyped(json, false);
}

export function IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationConditionFromJSON)),
    };
}

export function IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatusToJSON(value?: IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationConditionToJSON)),
    };
}

