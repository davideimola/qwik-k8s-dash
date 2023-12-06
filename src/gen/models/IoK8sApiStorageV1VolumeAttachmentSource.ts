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
import type { IoK8sApiCoreV1PersistentVolumeSpec } from './IoK8sApiCoreV1PersistentVolumeSpec';
import {
    IoK8sApiCoreV1PersistentVolumeSpecFromJSON,
    IoK8sApiCoreV1PersistentVolumeSpecFromJSONTyped,
    IoK8sApiCoreV1PersistentVolumeSpecToJSON,
} from './IoK8sApiCoreV1PersistentVolumeSpec';

/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
 * @export
 * @interface IoK8sApiStorageV1VolumeAttachmentSource
 */
export interface IoK8sApiStorageV1VolumeAttachmentSource {
    /**
     * 
     * @type {IoK8sApiCoreV1PersistentVolumeSpec}
     * @memberof IoK8sApiStorageV1VolumeAttachmentSource
     */
    inlineVolumeSpec?: IoK8sApiCoreV1PersistentVolumeSpec;
    /**
     * persistentVolumeName represents the name of the persistent volume to attach.
     * @type {string}
     * @memberof IoK8sApiStorageV1VolumeAttachmentSource
     */
    persistentVolumeName?: string;
}

/**
 * Check if a given object implements the IoK8sApiStorageV1VolumeAttachmentSource interface.
 */
export function instanceOfIoK8sApiStorageV1VolumeAttachmentSource(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiStorageV1VolumeAttachmentSourceFromJSON(json: any): IoK8sApiStorageV1VolumeAttachmentSource {
    return IoK8sApiStorageV1VolumeAttachmentSourceFromJSONTyped(json, false);
}

export function IoK8sApiStorageV1VolumeAttachmentSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiStorageV1VolumeAttachmentSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'inlineVolumeSpec': !exists(json, 'inlineVolumeSpec') ? undefined : IoK8sApiCoreV1PersistentVolumeSpecFromJSON(json['inlineVolumeSpec']),
        'persistentVolumeName': !exists(json, 'persistentVolumeName') ? undefined : json['persistentVolumeName'],
    };
}

export function IoK8sApiStorageV1VolumeAttachmentSourceToJSON(value?: IoK8sApiStorageV1VolumeAttachmentSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'inlineVolumeSpec': IoK8sApiCoreV1PersistentVolumeSpecToJSON(value.inlineVolumeSpec),
        'persistentVolumeName': value.persistentVolumeName,
    };
}

