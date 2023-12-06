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
import type { IoK8sApiCoreV1EventSource } from './IoK8sApiCoreV1EventSource';
import {
    IoK8sApiCoreV1EventSourceFromJSON,
    IoK8sApiCoreV1EventSourceFromJSONTyped,
    IoK8sApiCoreV1EventSourceToJSON,
} from './IoK8sApiCoreV1EventSource';
import type { IoK8sApiCoreV1ObjectReference } from './IoK8sApiCoreV1ObjectReference';
import {
    IoK8sApiCoreV1ObjectReferenceFromJSON,
    IoK8sApiCoreV1ObjectReferenceFromJSONTyped,
    IoK8sApiCoreV1ObjectReferenceToJSON,
} from './IoK8sApiCoreV1ObjectReference';
import type { IoK8sApiEventsV1EventSeries } from './IoK8sApiEventsV1EventSeries';
import {
    IoK8sApiEventsV1EventSeriesFromJSON,
    IoK8sApiEventsV1EventSeriesFromJSONTyped,
    IoK8sApiEventsV1EventSeriesToJSON,
} from './IoK8sApiEventsV1EventSeries';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system. Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data.
 * @export
 * @interface IoK8sApiEventsV1Event
 */
export interface IoK8sApiEventsV1Event {
    /**
     * action is what action was taken/failed regarding to the regarding object. It is machine-readable. This field cannot be empty for new Events and it can have at most 128 characters.
     * @type {string}
     * @memberof IoK8sApiEventsV1Event
     */
    action?: string;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiEventsV1Event
     */
    apiVersion?: string;
    /**
     * deprecatedCount is the deprecated field assuring backward compatibility with core.v1 Event type.
     * @type {number}
     * @memberof IoK8sApiEventsV1Event
     */
    deprecatedCount?: number;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sApiEventsV1Event
     */
    deprecatedFirstTimestamp?: Date;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sApiEventsV1Event
     */
    deprecatedLastTimestamp?: Date;
    /**
     * 
     * @type {IoK8sApiCoreV1EventSource}
     * @memberof IoK8sApiEventsV1Event
     */
    deprecatedSource?: IoK8sApiCoreV1EventSource;
    /**
     * MicroTime is version of Time with microsecond level precision.
     * @type {Date}
     * @memberof IoK8sApiEventsV1Event
     */
    eventTime: Date;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiEventsV1Event
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiEventsV1Event
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * note is a human-readable description of the status of this operation. Maximal length of the note is 1kB, but libraries should be prepared to handle values up to 64kB.
     * @type {string}
     * @memberof IoK8sApiEventsV1Event
     */
    note?: string;
    /**
     * reason is why the action was taken. It is human-readable. This field cannot be empty for new Events and it can have at most 128 characters.
     * @type {string}
     * @memberof IoK8sApiEventsV1Event
     */
    reason?: string;
    /**
     * 
     * @type {IoK8sApiCoreV1ObjectReference}
     * @memberof IoK8sApiEventsV1Event
     */
    regarding?: IoK8sApiCoreV1ObjectReference;
    /**
     * 
     * @type {IoK8sApiCoreV1ObjectReference}
     * @memberof IoK8sApiEventsV1Event
     */
    related?: IoK8sApiCoreV1ObjectReference;
    /**
     * reportingController is the name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`. This field cannot be empty for new Events.
     * @type {string}
     * @memberof IoK8sApiEventsV1Event
     */
    reportingController?: string;
    /**
     * reportingInstance is the ID of the controller instance, e.g. `kubelet-xyzf`. This field cannot be empty for new Events and it can have at most 128 characters.
     * @type {string}
     * @memberof IoK8sApiEventsV1Event
     */
    reportingInstance?: string;
    /**
     * 
     * @type {IoK8sApiEventsV1EventSeries}
     * @memberof IoK8sApiEventsV1Event
     */
    series?: IoK8sApiEventsV1EventSeries;
    /**
     * type is the type of this event (Normal, Warning), new types could be added in the future. It is machine-readable. This field cannot be empty for new Events.
     * @type {string}
     * @memberof IoK8sApiEventsV1Event
     */
    type?: string;
}

/**
 * Check if a given object implements the IoK8sApiEventsV1Event interface.
 */
export function instanceOfIoK8sApiEventsV1Event(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "eventTime" in value;

    return isInstance;
}

export function IoK8sApiEventsV1EventFromJSON(json: any): IoK8sApiEventsV1Event {
    return IoK8sApiEventsV1EventFromJSONTyped(json, false);
}

export function IoK8sApiEventsV1EventFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiEventsV1Event {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': !exists(json, 'action') ? undefined : json['action'],
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'deprecatedCount': !exists(json, 'deprecatedCount') ? undefined : json['deprecatedCount'],
        'deprecatedFirstTimestamp': !exists(json, 'deprecatedFirstTimestamp') ? undefined : (new Date(json['deprecatedFirstTimestamp'])),
        'deprecatedLastTimestamp': !exists(json, 'deprecatedLastTimestamp') ? undefined : (new Date(json['deprecatedLastTimestamp'])),
        'deprecatedSource': !exists(json, 'deprecatedSource') ? undefined : IoK8sApiCoreV1EventSourceFromJSON(json['deprecatedSource']),
        'eventTime': (new Date(json['eventTime'])),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'note': !exists(json, 'note') ? undefined : json['note'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'regarding': !exists(json, 'regarding') ? undefined : IoK8sApiCoreV1ObjectReferenceFromJSON(json['regarding']),
        'related': !exists(json, 'related') ? undefined : IoK8sApiCoreV1ObjectReferenceFromJSON(json['related']),
        'reportingController': !exists(json, 'reportingController') ? undefined : json['reportingController'],
        'reportingInstance': !exists(json, 'reportingInstance') ? undefined : json['reportingInstance'],
        'series': !exists(json, 'series') ? undefined : IoK8sApiEventsV1EventSeriesFromJSON(json['series']),
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function IoK8sApiEventsV1EventToJSON(value?: IoK8sApiEventsV1Event | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': value.action,
        'apiVersion': value.apiVersion,
        'deprecatedCount': value.deprecatedCount,
        'deprecatedFirstTimestamp': value.deprecatedFirstTimestamp === undefined ? undefined : (value.deprecatedFirstTimestamp.toISOString()),
        'deprecatedLastTimestamp': value.deprecatedLastTimestamp === undefined ? undefined : (value.deprecatedLastTimestamp.toISOString()),
        'deprecatedSource': IoK8sApiCoreV1EventSourceToJSON(value.deprecatedSource),
        'eventTime': (value.eventTime.toISOString()),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'note': value.note,
        'reason': value.reason,
        'regarding': IoK8sApiCoreV1ObjectReferenceToJSON(value.regarding),
        'related': IoK8sApiCoreV1ObjectReferenceToJSON(value.related),
        'reportingController': value.reportingController,
        'reportingInstance': value.reportingInstance,
        'series': IoK8sApiEventsV1EventSeriesToJSON(value.series),
        'type': value.type,
    };
}

