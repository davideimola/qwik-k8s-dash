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
 * Represents a Photon Controller persistent disk resource.
 * @export
 * @interface IoK8sApiCoreV1PhotonPersistentDiskVolumeSource
 */
export interface IoK8sApiCoreV1PhotonPersistentDiskVolumeSource {
    /**
     * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
     * @type {string}
     * @memberof IoK8sApiCoreV1PhotonPersistentDiskVolumeSource
     */
    fsType?: string;
    /**
     * pdID is the ID that identifies Photon Controller persistent disk
     * @type {string}
     * @memberof IoK8sApiCoreV1PhotonPersistentDiskVolumeSource
     */
    pdID: string;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1PhotonPersistentDiskVolumeSource interface.
 */
export function instanceOfIoK8sApiCoreV1PhotonPersistentDiskVolumeSource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "pdID" in value;

    return isInstance;
}

export function IoK8sApiCoreV1PhotonPersistentDiskVolumeSourceFromJSON(json: any): IoK8sApiCoreV1PhotonPersistentDiskVolumeSource {
    return IoK8sApiCoreV1PhotonPersistentDiskVolumeSourceFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1PhotonPersistentDiskVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1PhotonPersistentDiskVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fsType': !exists(json, 'fsType') ? undefined : json['fsType'],
        'pdID': json['pdID'],
    };
}

export function IoK8sApiCoreV1PhotonPersistentDiskVolumeSourceToJSON(value?: IoK8sApiCoreV1PhotonPersistentDiskVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fsType': value.fsType,
        'pdID': value.pdID,
    };
}

