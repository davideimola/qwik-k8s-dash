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
import type { IoK8sApiCoreV1AttachedVolume } from './IoK8sApiCoreV1AttachedVolume';
import {
    IoK8sApiCoreV1AttachedVolumeFromJSON,
    IoK8sApiCoreV1AttachedVolumeFromJSONTyped,
    IoK8sApiCoreV1AttachedVolumeToJSON,
} from './IoK8sApiCoreV1AttachedVolume';
import type { IoK8sApiCoreV1ContainerImage } from './IoK8sApiCoreV1ContainerImage';
import {
    IoK8sApiCoreV1ContainerImageFromJSON,
    IoK8sApiCoreV1ContainerImageFromJSONTyped,
    IoK8sApiCoreV1ContainerImageToJSON,
} from './IoK8sApiCoreV1ContainerImage';
import type { IoK8sApiCoreV1NodeAddress } from './IoK8sApiCoreV1NodeAddress';
import {
    IoK8sApiCoreV1NodeAddressFromJSON,
    IoK8sApiCoreV1NodeAddressFromJSONTyped,
    IoK8sApiCoreV1NodeAddressToJSON,
} from './IoK8sApiCoreV1NodeAddress';
import type { IoK8sApiCoreV1NodeCondition } from './IoK8sApiCoreV1NodeCondition';
import {
    IoK8sApiCoreV1NodeConditionFromJSON,
    IoK8sApiCoreV1NodeConditionFromJSONTyped,
    IoK8sApiCoreV1NodeConditionToJSON,
} from './IoK8sApiCoreV1NodeCondition';
import type { IoK8sApiCoreV1NodeConfigStatus } from './IoK8sApiCoreV1NodeConfigStatus';
import {
    IoK8sApiCoreV1NodeConfigStatusFromJSON,
    IoK8sApiCoreV1NodeConfigStatusFromJSONTyped,
    IoK8sApiCoreV1NodeConfigStatusToJSON,
} from './IoK8sApiCoreV1NodeConfigStatus';
import type { IoK8sApiCoreV1NodeDaemonEndpoints } from './IoK8sApiCoreV1NodeDaemonEndpoints';
import {
    IoK8sApiCoreV1NodeDaemonEndpointsFromJSON,
    IoK8sApiCoreV1NodeDaemonEndpointsFromJSONTyped,
    IoK8sApiCoreV1NodeDaemonEndpointsToJSON,
} from './IoK8sApiCoreV1NodeDaemonEndpoints';
import type { IoK8sApiCoreV1NodeSystemInfo } from './IoK8sApiCoreV1NodeSystemInfo';
import {
    IoK8sApiCoreV1NodeSystemInfoFromJSON,
    IoK8sApiCoreV1NodeSystemInfoFromJSONTyped,
    IoK8sApiCoreV1NodeSystemInfoToJSON,
} from './IoK8sApiCoreV1NodeSystemInfo';

/**
 * NodeStatus is information about the current status of a node.
 * @export
 * @interface IoK8sApiCoreV1NodeStatus
 */
export interface IoK8sApiCoreV1NodeStatus {
    /**
     * List of addresses reachable to the node. Queried from cloud provider, if available. More info: https://kubernetes.io/docs/concepts/nodes/node/#addresses Note: This field is declared as mergeable, but the merge key is not sufficiently unique, which can cause data corruption when it is merged. Callers should instead use a full-replacement patch. See https://pr.k8s.io/79391 for an example. Consumers should assume that addresses can change during the lifetime of a Node. However, there are some exceptions where this may not be possible, such as Pods that inherit a Node's address in its own status or consumers of the downward API (status.hostIP).
     * @type {Array<IoK8sApiCoreV1NodeAddress>}
     * @memberof IoK8sApiCoreV1NodeStatus
     */
    addresses?: Array<IoK8sApiCoreV1NodeAddress>;
    /**
     * Allocatable represents the resources of a node that are available for scheduling. Defaults to Capacity.
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApiCoreV1NodeStatus
     */
    allocatable?: { [key: string]: string; };
    /**
     * Capacity represents the total resources of a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApiCoreV1NodeStatus
     */
    capacity?: { [key: string]: string; };
    /**
     * Conditions is an array of current observed node conditions. More info: https://kubernetes.io/docs/concepts/nodes/node/#condition
     * @type {Array<IoK8sApiCoreV1NodeCondition>}
     * @memberof IoK8sApiCoreV1NodeStatus
     */
    conditions?: Array<IoK8sApiCoreV1NodeCondition>;
    /**
     * 
     * @type {IoK8sApiCoreV1NodeConfigStatus}
     * @memberof IoK8sApiCoreV1NodeStatus
     */
    config?: IoK8sApiCoreV1NodeConfigStatus;
    /**
     * 
     * @type {IoK8sApiCoreV1NodeDaemonEndpoints}
     * @memberof IoK8sApiCoreV1NodeStatus
     */
    daemonEndpoints?: IoK8sApiCoreV1NodeDaemonEndpoints;
    /**
     * List of container images on this node
     * @type {Array<IoK8sApiCoreV1ContainerImage>}
     * @memberof IoK8sApiCoreV1NodeStatus
     */
    images?: Array<IoK8sApiCoreV1ContainerImage>;
    /**
     * 
     * @type {IoK8sApiCoreV1NodeSystemInfo}
     * @memberof IoK8sApiCoreV1NodeStatus
     */
    nodeInfo?: IoK8sApiCoreV1NodeSystemInfo;
    /**
     * NodePhase is the recently observed lifecycle phase of the node. More info: https://kubernetes.io/docs/concepts/nodes/node/#phase The field is never populated, and now is deprecated.
     * 
     * Possible enum values:
     *  - `"Pending"` means the node has been created/added by the system, but not configured.
     *  - `"Running"` means the node has been configured and has Kubernetes components running.
     *  - `"Terminated"` means the node has been removed from the cluster.
     * @type {string}
     * @memberof IoK8sApiCoreV1NodeStatus
     */
    phase?: IoK8sApiCoreV1NodeStatusPhaseEnum;
    /**
     * List of volumes that are attached to the node.
     * @type {Array<IoK8sApiCoreV1AttachedVolume>}
     * @memberof IoK8sApiCoreV1NodeStatus
     */
    volumesAttached?: Array<IoK8sApiCoreV1AttachedVolume>;
    /**
     * List of attachable volumes in use (mounted) by the node.
     * @type {Array<string>}
     * @memberof IoK8sApiCoreV1NodeStatus
     */
    volumesInUse?: Array<string>;
}


/**
 * @export
 */
export const IoK8sApiCoreV1NodeStatusPhaseEnum = {
    Pending: 'Pending',
    Running: 'Running',
    Terminated: 'Terminated'
} as const;
export type IoK8sApiCoreV1NodeStatusPhaseEnum = typeof IoK8sApiCoreV1NodeStatusPhaseEnum[keyof typeof IoK8sApiCoreV1NodeStatusPhaseEnum];


/**
 * Check if a given object implements the IoK8sApiCoreV1NodeStatus interface.
 */
export function instanceOfIoK8sApiCoreV1NodeStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoreV1NodeStatusFromJSON(json: any): IoK8sApiCoreV1NodeStatus {
    return IoK8sApiCoreV1NodeStatusFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1NodeStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1NodeStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addresses': !exists(json, 'addresses') ? undefined : ((json['addresses'] as Array<any>).map(IoK8sApiCoreV1NodeAddressFromJSON)),
        'allocatable': !exists(json, 'allocatable') ? undefined : json['allocatable'],
        'capacity': !exists(json, 'capacity') ? undefined : json['capacity'],
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(IoK8sApiCoreV1NodeConditionFromJSON)),
        'config': !exists(json, 'config') ? undefined : IoK8sApiCoreV1NodeConfigStatusFromJSON(json['config']),
        'daemonEndpoints': !exists(json, 'daemonEndpoints') ? undefined : IoK8sApiCoreV1NodeDaemonEndpointsFromJSON(json['daemonEndpoints']),
        'images': !exists(json, 'images') ? undefined : ((json['images'] as Array<any>).map(IoK8sApiCoreV1ContainerImageFromJSON)),
        'nodeInfo': !exists(json, 'nodeInfo') ? undefined : IoK8sApiCoreV1NodeSystemInfoFromJSON(json['nodeInfo']),
        'phase': !exists(json, 'phase') ? undefined : json['phase'],
        'volumesAttached': !exists(json, 'volumesAttached') ? undefined : ((json['volumesAttached'] as Array<any>).map(IoK8sApiCoreV1AttachedVolumeFromJSON)),
        'volumesInUse': !exists(json, 'volumesInUse') ? undefined : json['volumesInUse'],
    };
}

export function IoK8sApiCoreV1NodeStatusToJSON(value?: IoK8sApiCoreV1NodeStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addresses': value.addresses === undefined ? undefined : ((value.addresses as Array<any>).map(IoK8sApiCoreV1NodeAddressToJSON)),
        'allocatable': value.allocatable,
        'capacity': value.capacity,
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(IoK8sApiCoreV1NodeConditionToJSON)),
        'config': IoK8sApiCoreV1NodeConfigStatusToJSON(value.config),
        'daemonEndpoints': IoK8sApiCoreV1NodeDaemonEndpointsToJSON(value.daemonEndpoints),
        'images': value.images === undefined ? undefined : ((value.images as Array<any>).map(IoK8sApiCoreV1ContainerImageToJSON)),
        'nodeInfo': IoK8sApiCoreV1NodeSystemInfoToJSON(value.nodeInfo),
        'phase': value.phase,
        'volumesAttached': value.volumesAttached === undefined ? undefined : ((value.volumesAttached as Array<any>).map(IoK8sApiCoreV1AttachedVolumeToJSON)),
        'volumesInUse': value.volumesInUse,
    };
}

