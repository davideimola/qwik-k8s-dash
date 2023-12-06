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
import type { IoK8sApiAutoscalingV2HPAScalingPolicy } from './IoK8sApiAutoscalingV2HPAScalingPolicy';
import {
    IoK8sApiAutoscalingV2HPAScalingPolicyFromJSON,
    IoK8sApiAutoscalingV2HPAScalingPolicyFromJSONTyped,
    IoK8sApiAutoscalingV2HPAScalingPolicyToJSON,
} from './IoK8sApiAutoscalingV2HPAScalingPolicy';

/**
 * HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen.
 * @export
 * @interface IoK8sApiAutoscalingV2HPAScalingRules
 */
export interface IoK8sApiAutoscalingV2HPAScalingRules {
    /**
     * policies is a list of potential scaling polices which can be used during scaling. At least one policy must be specified, otherwise the HPAScalingRules will be discarded as invalid
     * @type {Array<IoK8sApiAutoscalingV2HPAScalingPolicy>}
     * @memberof IoK8sApiAutoscalingV2HPAScalingRules
     */
    policies?: Array<IoK8sApiAutoscalingV2HPAScalingPolicy>;
    /**
     * selectPolicy is used to specify which policy should be used. If not set, the default value Max is used.
     * @type {string}
     * @memberof IoK8sApiAutoscalingV2HPAScalingRules
     */
    selectPolicy?: string;
    /**
     * stabilizationWindowSeconds is the number of seconds for which past recommendations should be considered while scaling up or scaling down. StabilizationWindowSeconds must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).
     * @type {number}
     * @memberof IoK8sApiAutoscalingV2HPAScalingRules
     */
    stabilizationWindowSeconds?: number;
}

/**
 * Check if a given object implements the IoK8sApiAutoscalingV2HPAScalingRules interface.
 */
export function instanceOfIoK8sApiAutoscalingV2HPAScalingRules(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiAutoscalingV2HPAScalingRulesFromJSON(json: any): IoK8sApiAutoscalingV2HPAScalingRules {
    return IoK8sApiAutoscalingV2HPAScalingRulesFromJSONTyped(json, false);
}

export function IoK8sApiAutoscalingV2HPAScalingRulesFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAutoscalingV2HPAScalingRules {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'policies': !exists(json, 'policies') ? undefined : ((json['policies'] as Array<any>).map(IoK8sApiAutoscalingV2HPAScalingPolicyFromJSON)),
        'selectPolicy': !exists(json, 'selectPolicy') ? undefined : json['selectPolicy'],
        'stabilizationWindowSeconds': !exists(json, 'stabilizationWindowSeconds') ? undefined : json['stabilizationWindowSeconds'],
    };
}

export function IoK8sApiAutoscalingV2HPAScalingRulesToJSON(value?: IoK8sApiAutoscalingV2HPAScalingRules | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'policies': value.policies === undefined ? undefined : ((value.policies as Array<any>).map(IoK8sApiAutoscalingV2HPAScalingPolicyToJSON)),
        'selectPolicy': value.selectPolicy,
        'stabilizationWindowSeconds': value.stabilizationWindowSeconds,
    };
}

