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
import { IoK8sApiCoreV1SecretReference } from './ioK8sApiCoreV1SecretReference';

/**
* Represents storage that is managed by an external CSI volume driver (Beta feature)
*/
export class IoK8sApiCoreV1CSIPersistentVolumeSource {
    'controllerExpandSecretRef'?: IoK8sApiCoreV1SecretReference;
    'controllerPublishSecretRef'?: IoK8sApiCoreV1SecretReference;
    /**
    * driver is the name of the driver to use for this volume. Required.
    */
    'driver': string;
    /**
    * fsType to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\".
    */
    'fsType'?: string;
    'nodeExpandSecretRef'?: IoK8sApiCoreV1SecretReference;
    'nodePublishSecretRef'?: IoK8sApiCoreV1SecretReference;
    'nodeStageSecretRef'?: IoK8sApiCoreV1SecretReference;
    /**
    * readOnly value to pass to ControllerPublishVolumeRequest. Defaults to false (read/write).
    */
    'readOnly'?: boolean;
    /**
    * volumeAttributes of the volume to publish.
    */
    'volumeAttributes'?: { [key: string]: string; };
    /**
    * volumeHandle is the unique volume name returned by the CSI volume plugin’s CreateVolume to refer to the volume on all subsequent calls. Required.
    */
    'volumeHandle': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "controllerExpandSecretRef",
            "baseName": "controllerExpandSecretRef",
            "type": "IoK8sApiCoreV1SecretReference"
        },
        {
            "name": "controllerPublishSecretRef",
            "baseName": "controllerPublishSecretRef",
            "type": "IoK8sApiCoreV1SecretReference"
        },
        {
            "name": "driver",
            "baseName": "driver",
            "type": "string"
        },
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string"
        },
        {
            "name": "nodeExpandSecretRef",
            "baseName": "nodeExpandSecretRef",
            "type": "IoK8sApiCoreV1SecretReference"
        },
        {
            "name": "nodePublishSecretRef",
            "baseName": "nodePublishSecretRef",
            "type": "IoK8sApiCoreV1SecretReference"
        },
        {
            "name": "nodeStageSecretRef",
            "baseName": "nodeStageSecretRef",
            "type": "IoK8sApiCoreV1SecretReference"
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean"
        },
        {
            "name": "volumeAttributes",
            "baseName": "volumeAttributes",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "volumeHandle",
            "baseName": "volumeHandle",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1CSIPersistentVolumeSource.attributeTypeMap;
    }
}

