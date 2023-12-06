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
import type { IoK8sApiCoreV1SecretReference } from './IoK8sApiCoreV1SecretReference';
import {
    IoK8sApiCoreV1SecretReferenceFromJSON,
    IoK8sApiCoreV1SecretReferenceFromJSONTyped,
    IoK8sApiCoreV1SecretReferenceToJSON,
} from './IoK8sApiCoreV1SecretReference';

/**
 * Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
 * @export
 * @interface IoK8sApiCoreV1CinderPersistentVolumeSource
 */
export interface IoK8sApiCoreV1CinderPersistentVolumeSource {
    /**
     * fsType Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
     * @type {string}
     * @memberof IoK8sApiCoreV1CinderPersistentVolumeSource
     */
    fsType?: string;
    /**
     * readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
     * @type {boolean}
     * @memberof IoK8sApiCoreV1CinderPersistentVolumeSource
     */
    readOnly?: boolean;
    /**
     * 
     * @type {IoK8sApiCoreV1SecretReference}
     * @memberof IoK8sApiCoreV1CinderPersistentVolumeSource
     */
    secretRef?: IoK8sApiCoreV1SecretReference;
    /**
     * volumeID used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
     * @type {string}
     * @memberof IoK8sApiCoreV1CinderPersistentVolumeSource
     */
    volumeID: string;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1CinderPersistentVolumeSource interface.
 */
export function instanceOfIoK8sApiCoreV1CinderPersistentVolumeSource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "volumeID" in value;

    return isInstance;
}

export function IoK8sApiCoreV1CinderPersistentVolumeSourceFromJSON(json: any): IoK8sApiCoreV1CinderPersistentVolumeSource {
    return IoK8sApiCoreV1CinderPersistentVolumeSourceFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1CinderPersistentVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1CinderPersistentVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fsType': !exists(json, 'fsType') ? undefined : json['fsType'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
        'secretRef': !exists(json, 'secretRef') ? undefined : IoK8sApiCoreV1SecretReferenceFromJSON(json['secretRef']),
        'volumeID': json['volumeID'],
    };
}

export function IoK8sApiCoreV1CinderPersistentVolumeSourceToJSON(value?: IoK8sApiCoreV1CinderPersistentVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fsType': value.fsType,
        'readOnly': value.readOnly,
        'secretRef': IoK8sApiCoreV1SecretReferenceToJSON(value.secretRef),
        'volumeID': value.volumeID,
    };
}

