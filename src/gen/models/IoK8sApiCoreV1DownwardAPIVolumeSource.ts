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
import type { IoK8sApiCoreV1DownwardAPIVolumeFile } from './IoK8sApiCoreV1DownwardAPIVolumeFile';
import {
    IoK8sApiCoreV1DownwardAPIVolumeFileFromJSON,
    IoK8sApiCoreV1DownwardAPIVolumeFileFromJSONTyped,
    IoK8sApiCoreV1DownwardAPIVolumeFileToJSON,
} from './IoK8sApiCoreV1DownwardAPIVolumeFile';

/**
 * DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling.
 * @export
 * @interface IoK8sApiCoreV1DownwardAPIVolumeSource
 */
export interface IoK8sApiCoreV1DownwardAPIVolumeSource {
    /**
     * Optional: mode bits to use on created files by default. Must be a Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     * @type {number}
     * @memberof IoK8sApiCoreV1DownwardAPIVolumeSource
     */
    defaultMode?: number;
    /**
     * Items is a list of downward API volume file
     * @type {Array<IoK8sApiCoreV1DownwardAPIVolumeFile>}
     * @memberof IoK8sApiCoreV1DownwardAPIVolumeSource
     */
    items?: Array<IoK8sApiCoreV1DownwardAPIVolumeFile>;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1DownwardAPIVolumeSource interface.
 */
export function instanceOfIoK8sApiCoreV1DownwardAPIVolumeSource(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoreV1DownwardAPIVolumeSourceFromJSON(json: any): IoK8sApiCoreV1DownwardAPIVolumeSource {
    return IoK8sApiCoreV1DownwardAPIVolumeSourceFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1DownwardAPIVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1DownwardAPIVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultMode': !exists(json, 'defaultMode') ? undefined : json['defaultMode'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(IoK8sApiCoreV1DownwardAPIVolumeFileFromJSON)),
    };
}

export function IoK8sApiCoreV1DownwardAPIVolumeSourceToJSON(value?: IoK8sApiCoreV1DownwardAPIVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'defaultMode': value.defaultMode,
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(IoK8sApiCoreV1DownwardAPIVolumeFileToJSON)),
    };
}
