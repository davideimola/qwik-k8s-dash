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
 * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 * @export
 * @interface IoK8sApiCoreV1NodeSelectorRequirement
 */
export interface IoK8sApiCoreV1NodeSelectorRequirement {
    /**
     * The label key that the selector applies to.
     * @type {string}
     * @memberof IoK8sApiCoreV1NodeSelectorRequirement
     */
    key: string;
    /**
     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
     * 
     * Possible enum values:
     *  - `"DoesNotExist"`
     *  - `"Exists"`
     *  - `"Gt"`
     *  - `"In"`
     *  - `"Lt"`
     *  - `"NotIn"`
     * @type {string}
     * @memberof IoK8sApiCoreV1NodeSelectorRequirement
     */
    operator: IoK8sApiCoreV1NodeSelectorRequirementOperatorEnum;
    /**
     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
     * @type {Array<string>}
     * @memberof IoK8sApiCoreV1NodeSelectorRequirement
     */
    values?: Array<string>;
}


/**
 * @export
 */
export const IoK8sApiCoreV1NodeSelectorRequirementOperatorEnum = {
    DoesNotExist: 'DoesNotExist',
    Exists: 'Exists',
    Gt: 'Gt',
    In: 'In',
    Lt: 'Lt',
    NotIn: 'NotIn'
} as const;
export type IoK8sApiCoreV1NodeSelectorRequirementOperatorEnum = typeof IoK8sApiCoreV1NodeSelectorRequirementOperatorEnum[keyof typeof IoK8sApiCoreV1NodeSelectorRequirementOperatorEnum];


/**
 * Check if a given object implements the IoK8sApiCoreV1NodeSelectorRequirement interface.
 */
export function instanceOfIoK8sApiCoreV1NodeSelectorRequirement(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "operator" in value;

    return isInstance;
}

export function IoK8sApiCoreV1NodeSelectorRequirementFromJSON(json: any): IoK8sApiCoreV1NodeSelectorRequirement {
    return IoK8sApiCoreV1NodeSelectorRequirementFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1NodeSelectorRequirementFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1NodeSelectorRequirement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': json['key'],
        'operator': json['operator'],
        'values': !exists(json, 'values') ? undefined : json['values'],
    };
}

export function IoK8sApiCoreV1NodeSelectorRequirementToJSON(value?: IoK8sApiCoreV1NodeSelectorRequirement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'operator': value.operator,
        'values': value.values,
    };
}

