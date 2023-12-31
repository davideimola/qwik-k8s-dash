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
import type { IoK8sApiCoreV1ResourceRequirements } from './IoK8sApiCoreV1ResourceRequirements';
import {
    IoK8sApiCoreV1ResourceRequirementsFromJSON,
    IoK8sApiCoreV1ResourceRequirementsFromJSONTyped,
    IoK8sApiCoreV1ResourceRequirementsToJSON,
} from './IoK8sApiCoreV1ResourceRequirements';
import type { IoK8sApiCoreV1TypedLocalObjectReference } from './IoK8sApiCoreV1TypedLocalObjectReference';
import {
    IoK8sApiCoreV1TypedLocalObjectReferenceFromJSON,
    IoK8sApiCoreV1TypedLocalObjectReferenceFromJSONTyped,
    IoK8sApiCoreV1TypedLocalObjectReferenceToJSON,
} from './IoK8sApiCoreV1TypedLocalObjectReference';
import type { IoK8sApiCoreV1TypedObjectReference } from './IoK8sApiCoreV1TypedObjectReference';
import {
    IoK8sApiCoreV1TypedObjectReferenceFromJSON,
    IoK8sApiCoreV1TypedObjectReferenceFromJSONTyped,
    IoK8sApiCoreV1TypedObjectReferenceToJSON,
} from './IoK8sApiCoreV1TypedObjectReference';
import type { IoK8sApimachineryPkgApisMetaV1LabelSelector } from './IoK8sApimachineryPkgApisMetaV1LabelSelector';
import {
    IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON,
    IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON,
} from './IoK8sApimachineryPkgApisMetaV1LabelSelector';

/**
 * PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes
 * @export
 * @interface IoK8sApiCoreV1PersistentVolumeClaimSpec
 */
export interface IoK8sApiCoreV1PersistentVolumeClaimSpec {
    /**
     * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
     * @type {Array<string>}
     * @memberof IoK8sApiCoreV1PersistentVolumeClaimSpec
     */
    accessModes?: Array<string>;
    /**
     * 
     * @type {IoK8sApiCoreV1TypedLocalObjectReference}
     * @memberof IoK8sApiCoreV1PersistentVolumeClaimSpec
     */
    dataSource?: IoK8sApiCoreV1TypedLocalObjectReference;
    /**
     * 
     * @type {IoK8sApiCoreV1TypedObjectReference}
     * @memberof IoK8sApiCoreV1PersistentVolumeClaimSpec
     */
    dataSourceRef?: IoK8sApiCoreV1TypedObjectReference;
    /**
     * 
     * @type {IoK8sApiCoreV1ResourceRequirements}
     * @memberof IoK8sApiCoreV1PersistentVolumeClaimSpec
     */
    resources?: IoK8sApiCoreV1ResourceRequirements;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1LabelSelector}
     * @memberof IoK8sApiCoreV1PersistentVolumeClaimSpec
     */
    selector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
    /**
     * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
     * @type {string}
     * @memberof IoK8sApiCoreV1PersistentVolumeClaimSpec
     */
    storageClassName?: string;
    /**
     * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
     * 
     * Possible enum values:
     *  - `"Block"` means the volume will not be formatted with a filesystem and will remain a raw block device.
     *  - `"Filesystem"` means the volume will be or is formatted with a filesystem.
     * @type {string}
     * @memberof IoK8sApiCoreV1PersistentVolumeClaimSpec
     */
    volumeMode?: IoK8sApiCoreV1PersistentVolumeClaimSpecVolumeModeEnum;
    /**
     * volumeName is the binding reference to the PersistentVolume backing this claim.
     * @type {string}
     * @memberof IoK8sApiCoreV1PersistentVolumeClaimSpec
     */
    volumeName?: string;
}


/**
 * @export
 */
export const IoK8sApiCoreV1PersistentVolumeClaimSpecVolumeModeEnum = {
    Block: 'Block',
    Filesystem: 'Filesystem'
} as const;
export type IoK8sApiCoreV1PersistentVolumeClaimSpecVolumeModeEnum = typeof IoK8sApiCoreV1PersistentVolumeClaimSpecVolumeModeEnum[keyof typeof IoK8sApiCoreV1PersistentVolumeClaimSpecVolumeModeEnum];


/**
 * Check if a given object implements the IoK8sApiCoreV1PersistentVolumeClaimSpec interface.
 */
export function instanceOfIoK8sApiCoreV1PersistentVolumeClaimSpec(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoreV1PersistentVolumeClaimSpecFromJSON(json: any): IoK8sApiCoreV1PersistentVolumeClaimSpec {
    return IoK8sApiCoreV1PersistentVolumeClaimSpecFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1PersistentVolumeClaimSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1PersistentVolumeClaimSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessModes': !exists(json, 'accessModes') ? undefined : json['accessModes'],
        'dataSource': !exists(json, 'dataSource') ? undefined : IoK8sApiCoreV1TypedLocalObjectReferenceFromJSON(json['dataSource']),
        'dataSourceRef': !exists(json, 'dataSourceRef') ? undefined : IoK8sApiCoreV1TypedObjectReferenceFromJSON(json['dataSourceRef']),
        'resources': !exists(json, 'resources') ? undefined : IoK8sApiCoreV1ResourceRequirementsFromJSON(json['resources']),
        'selector': !exists(json, 'selector') ? undefined : IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON(json['selector']),
        'storageClassName': !exists(json, 'storageClassName') ? undefined : json['storageClassName'],
        'volumeMode': !exists(json, 'volumeMode') ? undefined : json['volumeMode'],
        'volumeName': !exists(json, 'volumeName') ? undefined : json['volumeName'],
    };
}

export function IoK8sApiCoreV1PersistentVolumeClaimSpecToJSON(value?: IoK8sApiCoreV1PersistentVolumeClaimSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accessModes': value.accessModes,
        'dataSource': IoK8sApiCoreV1TypedLocalObjectReferenceToJSON(value.dataSource),
        'dataSourceRef': IoK8sApiCoreV1TypedObjectReferenceToJSON(value.dataSourceRef),
        'resources': IoK8sApiCoreV1ResourceRequirementsToJSON(value.resources),
        'selector': IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON(value.selector),
        'storageClassName': value.storageClassName,
        'volumeMode': value.volumeMode,
        'volumeName': value.volumeName,
    };
}

