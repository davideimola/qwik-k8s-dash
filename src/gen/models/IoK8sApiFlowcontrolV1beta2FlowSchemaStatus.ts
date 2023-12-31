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
import type { IoK8sApiFlowcontrolV1beta2FlowSchemaCondition } from './IoK8sApiFlowcontrolV1beta2FlowSchemaCondition';
import {
    IoK8sApiFlowcontrolV1beta2FlowSchemaConditionFromJSON,
    IoK8sApiFlowcontrolV1beta2FlowSchemaConditionFromJSONTyped,
    IoK8sApiFlowcontrolV1beta2FlowSchemaConditionToJSON,
} from './IoK8sApiFlowcontrolV1beta2FlowSchemaCondition';

/**
 * FlowSchemaStatus represents the current state of a FlowSchema.
 * @export
 * @interface IoK8sApiFlowcontrolV1beta2FlowSchemaStatus
 */
export interface IoK8sApiFlowcontrolV1beta2FlowSchemaStatus {
    /**
     * `conditions` is a list of the current states of FlowSchema.
     * @type {Array<IoK8sApiFlowcontrolV1beta2FlowSchemaCondition>}
     * @memberof IoK8sApiFlowcontrolV1beta2FlowSchemaStatus
     */
    conditions?: Array<IoK8sApiFlowcontrolV1beta2FlowSchemaCondition>;
}

/**
 * Check if a given object implements the IoK8sApiFlowcontrolV1beta2FlowSchemaStatus interface.
 */
export function instanceOfIoK8sApiFlowcontrolV1beta2FlowSchemaStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiFlowcontrolV1beta2FlowSchemaStatusFromJSON(json: any): IoK8sApiFlowcontrolV1beta2FlowSchemaStatus {
    return IoK8sApiFlowcontrolV1beta2FlowSchemaStatusFromJSONTyped(json, false);
}

export function IoK8sApiFlowcontrolV1beta2FlowSchemaStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiFlowcontrolV1beta2FlowSchemaStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(IoK8sApiFlowcontrolV1beta2FlowSchemaConditionFromJSON)),
    };
}

export function IoK8sApiFlowcontrolV1beta2FlowSchemaStatusToJSON(value?: IoK8sApiFlowcontrolV1beta2FlowSchemaStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(IoK8sApiFlowcontrolV1beta2FlowSchemaConditionToJSON)),
    };
}

