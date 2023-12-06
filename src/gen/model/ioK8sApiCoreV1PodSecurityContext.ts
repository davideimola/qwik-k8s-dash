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
import { IoK8sApiCoreV1SELinuxOptions } from './ioK8sApiCoreV1SELinuxOptions';
import { IoK8sApiCoreV1SeccompProfile } from './ioK8sApiCoreV1SeccompProfile';
import { IoK8sApiCoreV1Sysctl } from './ioK8sApiCoreV1Sysctl';
import { IoK8sApiCoreV1WindowsSecurityContextOptions } from './ioK8sApiCoreV1WindowsSecurityContextOptions';

/**
* PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.
*/
export class IoK8sApiCoreV1PodSecurityContext {
    /**
    * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:  1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR\'d with rw-rw----  If unset, the Kubelet will not modify the ownership and permissions of any volume. Note that this field cannot be set when spec.os.name is windows.
    */
    'fsGroup'?: number;
    /**
    * fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are \"OnRootMismatch\" and \"Always\". If not specified, \"Always\" is used. Note that this field cannot be set when spec.os.name is windows.  Possible enum values:  - `\"Always\"` indicates that volume\'s ownership and permissions should always be changed whenever volume is mounted inside a Pod. This the default behavior.  - `\"OnRootMismatch\"` indicates that volume\'s ownership and permissions will be changed only when permission and ownership of root directory does not match with expected permissions on the volume. This can help shorten the time it takes to change ownership and permissions of a volume.
    */
    'fsGroupChangePolicy'?: IoK8sApiCoreV1PodSecurityContext.FsGroupChangePolicyEnum;
    /**
    * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
    */
    'runAsGroup'?: number;
    /**
    * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
    */
    'runAsNonRoot'?: boolean;
    /**
    * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
    */
    'runAsUser'?: number;
    'seLinuxOptions'?: IoK8sApiCoreV1SELinuxOptions;
    'seccompProfile'?: IoK8sApiCoreV1SeccompProfile;
    /**
    * A list of groups applied to the first process run in each container, in addition to the container\'s primary GID, the fsGroup (if specified), and group memberships defined in the container image for the uid of the container process. If unspecified, no additional groups are added to any container. Note that group memberships defined in the container image for the uid of the container process are still effective, even if they are not included in this list. Note that this field cannot be set when spec.os.name is windows.
    */
    'supplementalGroups'?: Array<number>;
    /**
    * Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. Note that this field cannot be set when spec.os.name is windows.
    */
    'sysctls'?: Array<IoK8sApiCoreV1Sysctl>;
    'windowsOptions'?: IoK8sApiCoreV1WindowsSecurityContextOptions;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fsGroup",
            "baseName": "fsGroup",
            "type": "number"
        },
        {
            "name": "fsGroupChangePolicy",
            "baseName": "fsGroupChangePolicy",
            "type": "IoK8sApiCoreV1PodSecurityContext.FsGroupChangePolicyEnum"
        },
        {
            "name": "runAsGroup",
            "baseName": "runAsGroup",
            "type": "number"
        },
        {
            "name": "runAsNonRoot",
            "baseName": "runAsNonRoot",
            "type": "boolean"
        },
        {
            "name": "runAsUser",
            "baseName": "runAsUser",
            "type": "number"
        },
        {
            "name": "seLinuxOptions",
            "baseName": "seLinuxOptions",
            "type": "IoK8sApiCoreV1SELinuxOptions"
        },
        {
            "name": "seccompProfile",
            "baseName": "seccompProfile",
            "type": "IoK8sApiCoreV1SeccompProfile"
        },
        {
            "name": "supplementalGroups",
            "baseName": "supplementalGroups",
            "type": "Array<number>"
        },
        {
            "name": "sysctls",
            "baseName": "sysctls",
            "type": "Array<IoK8sApiCoreV1Sysctl>"
        },
        {
            "name": "windowsOptions",
            "baseName": "windowsOptions",
            "type": "IoK8sApiCoreV1WindowsSecurityContextOptions"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1PodSecurityContext.attributeTypeMap;
    }
}

export namespace IoK8sApiCoreV1PodSecurityContext {
    export enum FsGroupChangePolicyEnum {
        Always = <any> 'Always',
        OnRootMismatch = <any> 'OnRootMismatch'
    }
}