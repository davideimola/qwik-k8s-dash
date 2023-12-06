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

import { RequestFile } from './models';

/**
* VolumeMount describes a mounting of a Volume within a container.
*/
export class IoK8sApiCoreV1VolumeMount {
    /**
    * Path within the container at which the volume should be mounted.  Must not contain \':\'.
    */
    'mountPath': string;
    /**
    * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.  Possible enum values:  - `\"Bidirectional\"` means that the volume in a container will receive new mounts from the host or other containers, and its own mounts will be propagated from the container to the host or other containers. Note that this mode is recursively applied to all mounts in the volume (\"rshared\" in Linux terminology).  - `\"HostToContainer\"` means that the volume in a container will receive new mounts from the host or other containers, but filesystems mounted inside the container won\'t be propagated to the host or other containers. Note that this mode is recursively applied to all mounts in the volume (\"rslave\" in Linux terminology).  - `\"None\"` means that the volume in a container will not receive new mounts from the host or other containers, and filesystems mounted inside the container won\'t be propagated to the host or other containers. Note that this mode corresponds to \"private\" in Linux terminology.
    */
    'mountPropagation'?: IoK8sApiCoreV1VolumeMount.MountPropagationEnum;
    /**
    * This must match the Name of a Volume.
    */
    'name': string;
    /**
    * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
    */
    'readOnly'?: boolean;
    /**
    * Path within the volume from which the container\'s volume should be mounted. Defaults to \"\" (volume\'s root).
    */
    'subPath'?: string;
    /**
    * Expanded path within the volume from which the container\'s volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container\'s environment. Defaults to \"\" (volume\'s root). SubPathExpr and SubPath are mutually exclusive.
    */
    'subPathExpr'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "mountPath",
            "baseName": "mountPath",
            "type": "string"
        },
        {
            "name": "mountPropagation",
            "baseName": "mountPropagation",
            "type": "IoK8sApiCoreV1VolumeMount.MountPropagationEnum"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean"
        },
        {
            "name": "subPath",
            "baseName": "subPath",
            "type": "string"
        },
        {
            "name": "subPathExpr",
            "baseName": "subPathExpr",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1VolumeMount.attributeTypeMap;
    }
}

export namespace IoK8sApiCoreV1VolumeMount {
    export enum MountPropagationEnum {
        Bidirectional = <any> 'Bidirectional',
        HostToContainer = <any> 'HostToContainer',
        None = <any> 'None'
    }
}
