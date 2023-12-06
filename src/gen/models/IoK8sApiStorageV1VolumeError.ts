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
 * VolumeError captures an error encountered during a volume operation.
 * @export
 * @interface IoK8sApiStorageV1VolumeError
 */
export interface IoK8sApiStorageV1VolumeError {
    /**
     * message represents the error encountered during Attach or Detach operation. This string may be logged, so it should not contain sensitive information.
     * @type {string}
     * @memberof IoK8sApiStorageV1VolumeError
     */
    message?: string;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sApiStorageV1VolumeError
     */
    time?: Date;
}

/**
 * Check if a given object implements the IoK8sApiStorageV1VolumeError interface.
 */
export function instanceOfIoK8sApiStorageV1VolumeError(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiStorageV1VolumeErrorFromJSON(json: any): IoK8sApiStorageV1VolumeError {
    return IoK8sApiStorageV1VolumeErrorFromJSONTyped(json, false);
}

export function IoK8sApiStorageV1VolumeErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiStorageV1VolumeError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
        'time': !exists(json, 'time') ? undefined : (new Date(json['time'])),
    };
}

export function IoK8sApiStorageV1VolumeErrorToJSON(value?: IoK8sApiStorageV1VolumeError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'time': value.time === undefined ? undefined : (value.time.toISOString()),
    };
}
