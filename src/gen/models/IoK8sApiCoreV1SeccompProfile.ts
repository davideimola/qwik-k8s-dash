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
 * SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set.
 * @export
 * @interface IoK8sApiCoreV1SeccompProfile
 */
export interface IoK8sApiCoreV1SeccompProfile {
    /**
     * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must be set if type is "Localhost". Must NOT be set for any other type.
     * @type {string}
     * @memberof IoK8sApiCoreV1SeccompProfile
     */
    localhostProfile?: string;
    /**
     * type indicates which kind of seccomp profile will be applied. Valid options are:
     * 
     * Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
     * 
     * Possible enum values:
     *  - `"Localhost"` indicates a profile defined in a file on the node should be used. The file's location relative to <kubelet-root-dir>/seccomp.
     *  - `"RuntimeDefault"` represents the default container runtime seccomp profile.
     *  - `"Unconfined"` indicates no seccomp profile is applied (A.K.A. unconfined).
     * @type {string}
     * @memberof IoK8sApiCoreV1SeccompProfile
     */
    type: IoK8sApiCoreV1SeccompProfileTypeEnum;
}


/**
 * @export
 */
export const IoK8sApiCoreV1SeccompProfileTypeEnum = {
    Localhost: 'Localhost',
    RuntimeDefault: 'RuntimeDefault',
    Unconfined: 'Unconfined'
} as const;
export type IoK8sApiCoreV1SeccompProfileTypeEnum = typeof IoK8sApiCoreV1SeccompProfileTypeEnum[keyof typeof IoK8sApiCoreV1SeccompProfileTypeEnum];


/**
 * Check if a given object implements the IoK8sApiCoreV1SeccompProfile interface.
 */
export function instanceOfIoK8sApiCoreV1SeccompProfile(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function IoK8sApiCoreV1SeccompProfileFromJSON(json: any): IoK8sApiCoreV1SeccompProfile {
    return IoK8sApiCoreV1SeccompProfileFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1SeccompProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1SeccompProfile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'localhostProfile': !exists(json, 'localhostProfile') ? undefined : json['localhostProfile'],
        'type': json['type'],
    };
}

export function IoK8sApiCoreV1SeccompProfileToJSON(value?: IoK8sApiCoreV1SeccompProfile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'localhostProfile': value.localhostProfile,
        'type': value.type,
    };
}

