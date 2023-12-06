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
import type { IoK8sApimachineryPkgApisMetaV1LabelSelector } from './IoK8sApimachineryPkgApisMetaV1LabelSelector';
import {
    IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON,
    IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON,
} from './IoK8sApimachineryPkgApisMetaV1LabelSelector';

/**
 * MetricIdentifier defines the name and optionally selector for a metric
 * @export
 * @interface IoK8sApiAutoscalingV2MetricIdentifier
 */
export interface IoK8sApiAutoscalingV2MetricIdentifier {
    /**
     * name is the name of the given metric
     * @type {string}
     * @memberof IoK8sApiAutoscalingV2MetricIdentifier
     */
    name: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1LabelSelector}
     * @memberof IoK8sApiAutoscalingV2MetricIdentifier
     */
    selector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
}

/**
 * Check if a given object implements the IoK8sApiAutoscalingV2MetricIdentifier interface.
 */
export function instanceOfIoK8sApiAutoscalingV2MetricIdentifier(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function IoK8sApiAutoscalingV2MetricIdentifierFromJSON(json: any): IoK8sApiAutoscalingV2MetricIdentifier {
    return IoK8sApiAutoscalingV2MetricIdentifierFromJSONTyped(json, false);
}

export function IoK8sApiAutoscalingV2MetricIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAutoscalingV2MetricIdentifier {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'selector': !exists(json, 'selector') ? undefined : IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON(json['selector']),
    };
}

export function IoK8sApiAutoscalingV2MetricIdentifierToJSON(value?: IoK8sApiAutoscalingV2MetricIdentifier | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'selector': IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON(value.selector),
    };
}

