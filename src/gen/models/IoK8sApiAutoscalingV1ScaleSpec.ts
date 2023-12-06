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
 * ScaleSpec describes the attributes of a scale subresource.
 * @export
 * @interface IoK8sApiAutoscalingV1ScaleSpec
 */
export interface IoK8sApiAutoscalingV1ScaleSpec {
    /**
     * replicas is the desired number of instances for the scaled object.
     * @type {number}
     * @memberof IoK8sApiAutoscalingV1ScaleSpec
     */
    replicas?: number;
}

/**
 * Check if a given object implements the IoK8sApiAutoscalingV1ScaleSpec interface.
 */
export function instanceOfIoK8sApiAutoscalingV1ScaleSpec(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiAutoscalingV1ScaleSpecFromJSON(json: any): IoK8sApiAutoscalingV1ScaleSpec {
    return IoK8sApiAutoscalingV1ScaleSpecFromJSONTyped(json, false);
}

export function IoK8sApiAutoscalingV1ScaleSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAutoscalingV1ScaleSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'replicas': !exists(json, 'replicas') ? undefined : json['replicas'],
    };
}

export function IoK8sApiAutoscalingV1ScaleSpecToJSON(value?: IoK8sApiAutoscalingV1ScaleSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'replicas': value.replicas,
    };
}

