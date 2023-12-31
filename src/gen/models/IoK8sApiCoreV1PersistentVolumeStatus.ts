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
 * PersistentVolumeStatus is the current status of a persistent volume.
 * @export
 * @interface IoK8sApiCoreV1PersistentVolumeStatus
 */
export interface IoK8sApiCoreV1PersistentVolumeStatus {
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sApiCoreV1PersistentVolumeStatus
     */
    lastPhaseTransitionTime?: Date;
    /**
     * message is a human-readable message indicating details about why the volume is in this state.
     * @type {string}
     * @memberof IoK8sApiCoreV1PersistentVolumeStatus
     */
    message?: string;
    /**
     * phase indicates if a volume is available, bound to a claim, or released by a claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#phase
     * 
     * Possible enum values:
     *  - `"Available"` used for PersistentVolumes that are not yet bound Available volumes are held by the binder and matched to PersistentVolumeClaims
     *  - `"Bound"` used for PersistentVolumes that are bound
     *  - `"Failed"` used for PersistentVolumes that failed to be correctly recycled or deleted after being released from a claim
     *  - `"Pending"` used for PersistentVolumes that are not available
     *  - `"Released"` used for PersistentVolumes where the bound PersistentVolumeClaim was deleted released volumes must be recycled before becoming available again this phase is used by the persistent volume claim binder to signal to another process to reclaim the resource
     * @type {string}
     * @memberof IoK8sApiCoreV1PersistentVolumeStatus
     */
    phase?: IoK8sApiCoreV1PersistentVolumeStatusPhaseEnum;
    /**
     * reason is a brief CamelCase string that describes any failure and is meant for machine parsing and tidy display in the CLI.
     * @type {string}
     * @memberof IoK8sApiCoreV1PersistentVolumeStatus
     */
    reason?: string;
}


/**
 * @export
 */
export const IoK8sApiCoreV1PersistentVolumeStatusPhaseEnum = {
    Available: 'Available',
    Bound: 'Bound',
    Failed: 'Failed',
    Pending: 'Pending',
    Released: 'Released'
} as const;
export type IoK8sApiCoreV1PersistentVolumeStatusPhaseEnum = typeof IoK8sApiCoreV1PersistentVolumeStatusPhaseEnum[keyof typeof IoK8sApiCoreV1PersistentVolumeStatusPhaseEnum];


/**
 * Check if a given object implements the IoK8sApiCoreV1PersistentVolumeStatus interface.
 */
export function instanceOfIoK8sApiCoreV1PersistentVolumeStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoreV1PersistentVolumeStatusFromJSON(json: any): IoK8sApiCoreV1PersistentVolumeStatus {
    return IoK8sApiCoreV1PersistentVolumeStatusFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1PersistentVolumeStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1PersistentVolumeStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastPhaseTransitionTime': !exists(json, 'lastPhaseTransitionTime') ? undefined : (new Date(json['lastPhaseTransitionTime'])),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'phase': !exists(json, 'phase') ? undefined : json['phase'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
    };
}

export function IoK8sApiCoreV1PersistentVolumeStatusToJSON(value?: IoK8sApiCoreV1PersistentVolumeStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lastPhaseTransitionTime': value.lastPhaseTransitionTime === undefined ? undefined : (value.lastPhaseTransitionTime.toISOString()),
        'message': value.message,
        'phase': value.phase,
        'reason': value.reason,
    };
}

