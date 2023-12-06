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
import type { IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry } from './IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry';
import {
    IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntryFromJSON,
    IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntryFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntryToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry';
import type { IoK8sApimachineryPkgApisMetaV1OwnerReference } from './IoK8sApimachineryPkgApisMetaV1OwnerReference';
import {
    IoK8sApimachineryPkgApisMetaV1OwnerReferenceFromJSON,
    IoK8sApimachineryPkgApisMetaV1OwnerReferenceFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1OwnerReferenceToJSON,
} from './IoK8sApimachineryPkgApisMetaV1OwnerReference';

/**
 * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
 * @export
 * @interface IoK8sApimachineryPkgApisMetaV1ObjectMeta
 */
export interface IoK8sApimachineryPkgApisMetaV1ObjectMeta {
    /**
     * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApimachineryPkgApisMetaV1ObjectMeta
     */
    annotations?: { [key: string]: string; };
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sApimachineryPkgApisMetaV1ObjectMeta
     */
    creationTimestamp?: Date;
    /**
     * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
     * @type {number}
     * @memberof IoK8sApimachineryPkgApisMetaV1ObjectMeta
     */
    deletionGracePeriodSeconds?: number;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sApimachineryPkgApisMetaV1ObjectMeta
     */
    deletionTimestamp?: Date;
    /**
     * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
     * @type {Array<string>}
     * @memberof IoK8sApimachineryPkgApisMetaV1ObjectMeta
     */
    finalizers?: Array<string>;
    /**
     * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
     * 
     * If this field is specified and the generated name exists, the server will return a 409.
     * 
     * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1ObjectMeta
     */
    generateName?: string;
    /**
     * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
     * @type {number}
     * @memberof IoK8sApimachineryPkgApisMetaV1ObjectMeta
     */
    generation?: number;
    /**
     * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApimachineryPkgApisMetaV1ObjectMeta
     */
    labels?: { [key: string]: string; };
    /**
     * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
     * @type {Array<IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry>}
     * @memberof IoK8sApimachineryPkgApisMetaV1ObjectMeta
     */
    managedFields?: Array<IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry>;
    /**
     * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1ObjectMeta
     */
    name?: string;
    /**
     * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
     * 
     * Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1ObjectMeta
     */
    namespace?: string;
    /**
     * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
     * @type {Array<IoK8sApimachineryPkgApisMetaV1OwnerReference>}
     * @memberof IoK8sApimachineryPkgApisMetaV1ObjectMeta
     */
    ownerReferences?: Array<IoK8sApimachineryPkgApisMetaV1OwnerReference>;
    /**
     * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
     * 
     * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1ObjectMeta
     */
    resourceVersion?: string;
    /**
     * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1ObjectMeta
     */
    selfLink?: string;
    /**
     * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
     * 
     * Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1ObjectMeta
     */
    uid?: string;
}

/**
 * Check if a given object implements the IoK8sApimachineryPkgApisMetaV1ObjectMeta interface.
 */
export function instanceOfIoK8sApimachineryPkgApisMetaV1ObjectMeta(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json: any): IoK8sApimachineryPkgApisMetaV1ObjectMeta {
    return IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped(json, false);
}

export function IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApimachineryPkgApisMetaV1ObjectMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'annotations': !exists(json, 'annotations') ? undefined : json['annotations'],
        'creationTimestamp': !exists(json, 'creationTimestamp') ? undefined : (new Date(json['creationTimestamp'])),
        'deletionGracePeriodSeconds': !exists(json, 'deletionGracePeriodSeconds') ? undefined : json['deletionGracePeriodSeconds'],
        'deletionTimestamp': !exists(json, 'deletionTimestamp') ? undefined : (new Date(json['deletionTimestamp'])),
        'finalizers': !exists(json, 'finalizers') ? undefined : json['finalizers'],
        'generateName': !exists(json, 'generateName') ? undefined : json['generateName'],
        'generation': !exists(json, 'generation') ? undefined : json['generation'],
        'labels': !exists(json, 'labels') ? undefined : json['labels'],
        'managedFields': !exists(json, 'managedFields') ? undefined : ((json['managedFields'] as Array<any>).map(IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntryFromJSON)),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'ownerReferences': !exists(json, 'ownerReferences') ? undefined : ((json['ownerReferences'] as Array<any>).map(IoK8sApimachineryPkgApisMetaV1OwnerReferenceFromJSON)),
        'resourceVersion': !exists(json, 'resourceVersion') ? undefined : json['resourceVersion'],
        'selfLink': !exists(json, 'selfLink') ? undefined : json['selfLink'],
        'uid': !exists(json, 'uid') ? undefined : json['uid'],
    };
}

export function IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value?: IoK8sApimachineryPkgApisMetaV1ObjectMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'annotations': value.annotations,
        'creationTimestamp': value.creationTimestamp === undefined ? undefined : (value.creationTimestamp.toISOString()),
        'deletionGracePeriodSeconds': value.deletionGracePeriodSeconds,
        'deletionTimestamp': value.deletionTimestamp === undefined ? undefined : (value.deletionTimestamp.toISOString()),
        'finalizers': value.finalizers,
        'generateName': value.generateName,
        'generation': value.generation,
        'labels': value.labels,
        'managedFields': value.managedFields === undefined ? undefined : ((value.managedFields as Array<any>).map(IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntryToJSON)),
        'name': value.name,
        'namespace': value.namespace,
        'ownerReferences': value.ownerReferences === undefined ? undefined : ((value.ownerReferences as Array<any>).map(IoK8sApimachineryPkgApisMetaV1OwnerReferenceToJSON)),
        'resourceVersion': value.resourceVersion,
        'selfLink': value.selfLink,
        'uid': value.uid,
    };
}

