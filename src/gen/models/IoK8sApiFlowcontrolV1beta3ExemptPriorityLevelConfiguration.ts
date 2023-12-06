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
/**
 * ExemptPriorityLevelConfiguration describes the configurable aspects of the handling of exempt requests. In the mandatory exempt configuration object the values in the fields here can be modified by authorized users, unlike the rest of the `spec`.
 * @export
 * @interface IoK8sApiFlowcontrolV1beta3ExemptPriorityLevelConfiguration
 */
export interface IoK8sApiFlowcontrolV1beta3ExemptPriorityLevelConfiguration {
    /**
     * `lendablePercent` prescribes the fraction of the level's NominalCL that can be borrowed by other priority levels.  This value of this field must be between 0 and 100, inclusive, and it defaults to 0. The number of seats that other levels can borrow from this level, known as this level's LendableConcurrencyLimit (LendableCL), is defined as follows.
     * 
     * LendableCL(i) = round( NominalCL(i) * lendablePercent(i)/100.0 )
     * @type {number}
     * @memberof IoK8sApiFlowcontrolV1beta3ExemptPriorityLevelConfiguration
     */
    lendablePercent?: number;
    /**
     * `nominalConcurrencyShares` (NCS) contributes to the computation of the NominalConcurrencyLimit (NominalCL) of this level. This is the number of execution seats nominally reserved for this priority level. This DOES NOT limit the dispatching from this priority level but affects the other priority levels through the borrowing mechanism. The server's concurrency limit (ServerCL) is divided among all the priority levels in proportion to their NCS values:
     * 
     * NominalCL(i)  = ceil( ServerCL * NCS(i) / sum_ncs ) sum_ncs = sum[priority level k] NCS(k)
     * 
     * Bigger numbers mean a larger nominal concurrency limit, at the expense of every other priority level. This field has a default value of zero.
     * @type {number}
     * @memberof IoK8sApiFlowcontrolV1beta3ExemptPriorityLevelConfiguration
     */
    nominalConcurrencyShares?: number;
}

/**
 * Check if a given object implements the IoK8sApiFlowcontrolV1beta3ExemptPriorityLevelConfiguration interface.
 */
export function instanceOfIoK8sApiFlowcontrolV1beta3ExemptPriorityLevelConfiguration(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiFlowcontrolV1beta3ExemptPriorityLevelConfigurationFromJSON(json: any): IoK8sApiFlowcontrolV1beta3ExemptPriorityLevelConfiguration {
    return IoK8sApiFlowcontrolV1beta3ExemptPriorityLevelConfigurationFromJSONTyped(json, false);
}

export function IoK8sApiFlowcontrolV1beta3ExemptPriorityLevelConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiFlowcontrolV1beta3ExemptPriorityLevelConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lendablePercent': !exists(json, 'lendablePercent') ? undefined : json['lendablePercent'],
        'nominalConcurrencyShares': !exists(json, 'nominalConcurrencyShares') ? undefined : json['nominalConcurrencyShares'],
    };
}

export function IoK8sApiFlowcontrolV1beta3ExemptPriorityLevelConfigurationToJSON(value?: IoK8sApiFlowcontrolV1beta3ExemptPriorityLevelConfiguration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lendablePercent': value.lendablePercent,
        'nominalConcurrencyShares': value.nominalConcurrencyShares,
    };
}

