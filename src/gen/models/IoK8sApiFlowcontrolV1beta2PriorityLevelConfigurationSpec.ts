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
import type { IoK8sApiFlowcontrolV1beta2ExemptPriorityLevelConfiguration } from './IoK8sApiFlowcontrolV1beta2ExemptPriorityLevelConfiguration';
import {
    IoK8sApiFlowcontrolV1beta2ExemptPriorityLevelConfigurationFromJSON,
    IoK8sApiFlowcontrolV1beta2ExemptPriorityLevelConfigurationFromJSONTyped,
    IoK8sApiFlowcontrolV1beta2ExemptPriorityLevelConfigurationToJSON,
} from './IoK8sApiFlowcontrolV1beta2ExemptPriorityLevelConfiguration';
import type { IoK8sApiFlowcontrolV1beta2LimitedPriorityLevelConfiguration } from './IoK8sApiFlowcontrolV1beta2LimitedPriorityLevelConfiguration';
import {
    IoK8sApiFlowcontrolV1beta2LimitedPriorityLevelConfigurationFromJSON,
    IoK8sApiFlowcontrolV1beta2LimitedPriorityLevelConfigurationFromJSONTyped,
    IoK8sApiFlowcontrolV1beta2LimitedPriorityLevelConfigurationToJSON,
} from './IoK8sApiFlowcontrolV1beta2LimitedPriorityLevelConfiguration';

/**
 * PriorityLevelConfigurationSpec specifies the configuration of a priority level.
 * @export
 * @interface IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpec
 */
export interface IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpec {
    /**
     * 
     * @type {IoK8sApiFlowcontrolV1beta2ExemptPriorityLevelConfiguration}
     * @memberof IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpec
     */
    exempt?: IoK8sApiFlowcontrolV1beta2ExemptPriorityLevelConfiguration;
    /**
     * 
     * @type {IoK8sApiFlowcontrolV1beta2LimitedPriorityLevelConfiguration}
     * @memberof IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpec
     */
    limited?: IoK8sApiFlowcontrolV1beta2LimitedPriorityLevelConfiguration;
    /**
     * `type` indicates whether this priority level is subject to limitation on request execution.  A value of `"Exempt"` means that requests of this priority level are not subject to a limit (and thus are never queued) and do not detract from the capacity made available to other priority levels.  A value of `"Limited"` means that (a) requests of this priority level _are_ subject to limits and (b) some of the server's limited capacity is made available exclusively to this priority level. Required.
     * @type {string}
     * @memberof IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpec
     */
    type: string;
}

/**
 * Check if a given object implements the IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpec interface.
 */
export function instanceOfIoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpec(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpecFromJSON(json: any): IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpec {
    return IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpecFromJSONTyped(json, false);
}

export function IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exempt': !exists(json, 'exempt') ? undefined : IoK8sApiFlowcontrolV1beta2ExemptPriorityLevelConfigurationFromJSON(json['exempt']),
        'limited': !exists(json, 'limited') ? undefined : IoK8sApiFlowcontrolV1beta2LimitedPriorityLevelConfigurationFromJSON(json['limited']),
        'type': json['type'],
    };
}

export function IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpecToJSON(value?: IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exempt': IoK8sApiFlowcontrolV1beta2ExemptPriorityLevelConfigurationToJSON(value.exempt),
        'limited': IoK8sApiFlowcontrolV1beta2LimitedPriorityLevelConfigurationToJSON(value.limited),
        'type': value.type,
    };
}

