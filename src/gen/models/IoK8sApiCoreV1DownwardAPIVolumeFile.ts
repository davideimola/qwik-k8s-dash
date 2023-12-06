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
import type { IoK8sApiCoreV1ObjectFieldSelector } from './IoK8sApiCoreV1ObjectFieldSelector';
import {
    IoK8sApiCoreV1ObjectFieldSelectorFromJSON,
    IoK8sApiCoreV1ObjectFieldSelectorFromJSONTyped,
    IoK8sApiCoreV1ObjectFieldSelectorToJSON,
} from './IoK8sApiCoreV1ObjectFieldSelector';
import type { IoK8sApiCoreV1ResourceFieldSelector } from './IoK8sApiCoreV1ResourceFieldSelector';
import {
    IoK8sApiCoreV1ResourceFieldSelectorFromJSON,
    IoK8sApiCoreV1ResourceFieldSelectorFromJSONTyped,
    IoK8sApiCoreV1ResourceFieldSelectorToJSON,
} from './IoK8sApiCoreV1ResourceFieldSelector';

/**
 * DownwardAPIVolumeFile represents information to create the file containing the pod field
 * @export
 * @interface IoK8sApiCoreV1DownwardAPIVolumeFile
 */
export interface IoK8sApiCoreV1DownwardAPIVolumeFile {
    /**
     * 
     * @type {IoK8sApiCoreV1ObjectFieldSelector}
     * @memberof IoK8sApiCoreV1DownwardAPIVolumeFile
     */
    fieldRef?: IoK8sApiCoreV1ObjectFieldSelector;
    /**
     * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     * @type {number}
     * @memberof IoK8sApiCoreV1DownwardAPIVolumeFile
     */
    mode?: number;
    /**
     * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
     * @type {string}
     * @memberof IoK8sApiCoreV1DownwardAPIVolumeFile
     */
    path: string;
    /**
     * 
     * @type {IoK8sApiCoreV1ResourceFieldSelector}
     * @memberof IoK8sApiCoreV1DownwardAPIVolumeFile
     */
    resourceFieldRef?: IoK8sApiCoreV1ResourceFieldSelector;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1DownwardAPIVolumeFile interface.
 */
export function instanceOfIoK8sApiCoreV1DownwardAPIVolumeFile(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "path" in value;

    return isInstance;
}

export function IoK8sApiCoreV1DownwardAPIVolumeFileFromJSON(json: any): IoK8sApiCoreV1DownwardAPIVolumeFile {
    return IoK8sApiCoreV1DownwardAPIVolumeFileFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1DownwardAPIVolumeFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1DownwardAPIVolumeFile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fieldRef': !exists(json, 'fieldRef') ? undefined : IoK8sApiCoreV1ObjectFieldSelectorFromJSON(json['fieldRef']),
        'mode': !exists(json, 'mode') ? undefined : json['mode'],
        'path': json['path'],
        'resourceFieldRef': !exists(json, 'resourceFieldRef') ? undefined : IoK8sApiCoreV1ResourceFieldSelectorFromJSON(json['resourceFieldRef']),
    };
}

export function IoK8sApiCoreV1DownwardAPIVolumeFileToJSON(value?: IoK8sApiCoreV1DownwardAPIVolumeFile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fieldRef': IoK8sApiCoreV1ObjectFieldSelectorToJSON(value.fieldRef),
        'mode': value.mode,
        'path': value.path,
        'resourceFieldRef': IoK8sApiCoreV1ResourceFieldSelectorToJSON(value.resourceFieldRef),
    };
}

