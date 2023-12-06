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
 * LimitRangeItem defines a min/max usage limit for any resource that matches on kind.
 * @export
 * @interface IoK8sApiCoreV1LimitRangeItem
 */
export interface IoK8sApiCoreV1LimitRangeItem {
    /**
     * Default resource requirement limit value by resource name if resource limit is omitted.
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApiCoreV1LimitRangeItem
     */
    _default?: { [key: string]: string; };
    /**
     * DefaultRequest is the default resource requirement request value by resource name if resource request is omitted.
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApiCoreV1LimitRangeItem
     */
    defaultRequest?: { [key: string]: string; };
    /**
     * Max usage constraints on this kind by resource name.
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApiCoreV1LimitRangeItem
     */
    max?: { [key: string]: string; };
    /**
     * MaxLimitRequestRatio if specified, the named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; this represents the max burst for the named resource.
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApiCoreV1LimitRangeItem
     */
    maxLimitRequestRatio?: { [key: string]: string; };
    /**
     * Min usage constraints on this kind by resource name.
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApiCoreV1LimitRangeItem
     */
    min?: { [key: string]: string; };
    /**
     * Type of resource that this limit applies to.
     * @type {string}
     * @memberof IoK8sApiCoreV1LimitRangeItem
     */
    type: string;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1LimitRangeItem interface.
 */
export function instanceOfIoK8sApiCoreV1LimitRangeItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function IoK8sApiCoreV1LimitRangeItemFromJSON(json: any): IoK8sApiCoreV1LimitRangeItem {
    return IoK8sApiCoreV1LimitRangeItemFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1LimitRangeItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1LimitRangeItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '_default': !exists(json, 'default') ? undefined : json['default'],
        'defaultRequest': !exists(json, 'defaultRequest') ? undefined : json['defaultRequest'],
        'max': !exists(json, 'max') ? undefined : json['max'],
        'maxLimitRequestRatio': !exists(json, 'maxLimitRequestRatio') ? undefined : json['maxLimitRequestRatio'],
        'min': !exists(json, 'min') ? undefined : json['min'],
        'type': json['type'],
    };
}

export function IoK8sApiCoreV1LimitRangeItemToJSON(value?: IoK8sApiCoreV1LimitRangeItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'default': value._default,
        'defaultRequest': value.defaultRequest,
        'max': value.max,
        'maxLimitRequestRatio': value.maxLimitRequestRatio,
        'min': value.min,
        'type': value.type,
    };
}
