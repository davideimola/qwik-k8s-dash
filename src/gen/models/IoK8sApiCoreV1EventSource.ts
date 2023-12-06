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
 * EventSource contains information for an event.
 * @export
 * @interface IoK8sApiCoreV1EventSource
 */
export interface IoK8sApiCoreV1EventSource {
    /**
     * Component from which the event is generated.
     * @type {string}
     * @memberof IoK8sApiCoreV1EventSource
     */
    component?: string;
    /**
     * Node name on which the event is generated.
     * @type {string}
     * @memberof IoK8sApiCoreV1EventSource
     */
    host?: string;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1EventSource interface.
 */
export function instanceOfIoK8sApiCoreV1EventSource(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoreV1EventSourceFromJSON(json: any): IoK8sApiCoreV1EventSource {
    return IoK8sApiCoreV1EventSourceFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1EventSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1EventSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'component': !exists(json, 'component') ? undefined : json['component'],
        'host': !exists(json, 'host') ? undefined : json['host'],
    };
}

export function IoK8sApiCoreV1EventSourceToJSON(value?: IoK8sApiCoreV1EventSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'component': value.component,
        'host': value.host,
    };
}
