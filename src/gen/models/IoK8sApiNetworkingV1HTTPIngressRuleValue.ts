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
import type { IoK8sApiNetworkingV1HTTPIngressPath } from './IoK8sApiNetworkingV1HTTPIngressPath';
import {
    IoK8sApiNetworkingV1HTTPIngressPathFromJSON,
    IoK8sApiNetworkingV1HTTPIngressPathFromJSONTyped,
    IoK8sApiNetworkingV1HTTPIngressPathToJSON,
} from './IoK8sApiNetworkingV1HTTPIngressPath';

/**
 * HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.
 * @export
 * @interface IoK8sApiNetworkingV1HTTPIngressRuleValue
 */
export interface IoK8sApiNetworkingV1HTTPIngressRuleValue {
    /**
     * paths is a collection of paths that map requests to backends.
     * @type {Array<IoK8sApiNetworkingV1HTTPIngressPath>}
     * @memberof IoK8sApiNetworkingV1HTTPIngressRuleValue
     */
    paths: Array<IoK8sApiNetworkingV1HTTPIngressPath>;
}

/**
 * Check if a given object implements the IoK8sApiNetworkingV1HTTPIngressRuleValue interface.
 */
export function instanceOfIoK8sApiNetworkingV1HTTPIngressRuleValue(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "paths" in value;

    return isInstance;
}

export function IoK8sApiNetworkingV1HTTPIngressRuleValueFromJSON(json: any): IoK8sApiNetworkingV1HTTPIngressRuleValue {
    return IoK8sApiNetworkingV1HTTPIngressRuleValueFromJSONTyped(json, false);
}

export function IoK8sApiNetworkingV1HTTPIngressRuleValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiNetworkingV1HTTPIngressRuleValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'paths': ((json['paths'] as Array<any>).map(IoK8sApiNetworkingV1HTTPIngressPathFromJSON)),
    };
}

export function IoK8sApiNetworkingV1HTTPIngressRuleValueToJSON(value?: IoK8sApiNetworkingV1HTTPIngressRuleValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'paths': ((value.paths as Array<any>).map(IoK8sApiNetworkingV1HTTPIngressPathToJSON)),
    };
}

