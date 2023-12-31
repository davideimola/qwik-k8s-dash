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
 * Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.
 * @export
 * @interface IoK8sApiCoreV1HostPathVolumeSource
 */
export interface IoK8sApiCoreV1HostPathVolumeSource {
    /**
     * path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
     * @type {string}
     * @memberof IoK8sApiCoreV1HostPathVolumeSource
     */
    path: string;
    /**
     * type for HostPath Volume Defaults to "" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
     * 
     * Possible enum values:
     *  - `""` For backwards compatible, leave it empty if unset
     *  - `"BlockDevice"` A block device must exist at the given path
     *  - `"CharDevice"` A character device must exist at the given path
     *  - `"Directory"` A directory must exist at the given path
     *  - `"DirectoryOrCreate"` If nothing exists at the given path, an empty directory will be created there as needed with file mode 0755, having the same group and ownership with Kubelet.
     *  - `"File"` A file must exist at the given path
     *  - `"FileOrCreate"` If nothing exists at the given path, an empty file will be created there as needed with file mode 0644, having the same group and ownership with Kubelet.
     *  - `"Socket"` A UNIX socket must exist at the given path
     * @type {string}
     * @memberof IoK8sApiCoreV1HostPathVolumeSource
     */
    type?: IoK8sApiCoreV1HostPathVolumeSourceTypeEnum;
}


/**
 * @export
 */
export const IoK8sApiCoreV1HostPathVolumeSourceTypeEnum = {
    Empty: '',
    BlockDevice: 'BlockDevice',
    CharDevice: 'CharDevice',
    Directory: 'Directory',
    DirectoryOrCreate: 'DirectoryOrCreate',
    File: 'File',
    FileOrCreate: 'FileOrCreate',
    Socket: 'Socket'
} as const;
export type IoK8sApiCoreV1HostPathVolumeSourceTypeEnum = typeof IoK8sApiCoreV1HostPathVolumeSourceTypeEnum[keyof typeof IoK8sApiCoreV1HostPathVolumeSourceTypeEnum];


/**
 * Check if a given object implements the IoK8sApiCoreV1HostPathVolumeSource interface.
 */
export function instanceOfIoK8sApiCoreV1HostPathVolumeSource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "path" in value;

    return isInstance;
}

export function IoK8sApiCoreV1HostPathVolumeSourceFromJSON(json: any): IoK8sApiCoreV1HostPathVolumeSource {
    return IoK8sApiCoreV1HostPathVolumeSourceFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1HostPathVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1HostPathVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'path': json['path'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function IoK8sApiCoreV1HostPathVolumeSourceToJSON(value?: IoK8sApiCoreV1HostPathVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'path': value.path,
        'type': value.type,
    };
}

