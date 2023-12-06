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
import type { IoK8sApiCoreV1ExecAction } from './IoK8sApiCoreV1ExecAction';
import {
    IoK8sApiCoreV1ExecActionFromJSON,
    IoK8sApiCoreV1ExecActionFromJSONTyped,
    IoK8sApiCoreV1ExecActionToJSON,
} from './IoK8sApiCoreV1ExecAction';
import type { IoK8sApiCoreV1HTTPGetAction } from './IoK8sApiCoreV1HTTPGetAction';
import {
    IoK8sApiCoreV1HTTPGetActionFromJSON,
    IoK8sApiCoreV1HTTPGetActionFromJSONTyped,
    IoK8sApiCoreV1HTTPGetActionToJSON,
} from './IoK8sApiCoreV1HTTPGetAction';
import type { IoK8sApiCoreV1TCPSocketAction } from './IoK8sApiCoreV1TCPSocketAction';
import {
    IoK8sApiCoreV1TCPSocketActionFromJSON,
    IoK8sApiCoreV1TCPSocketActionFromJSONTyped,
    IoK8sApiCoreV1TCPSocketActionToJSON,
} from './IoK8sApiCoreV1TCPSocketAction';

/**
 * LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified.
 * @export
 * @interface IoK8sApiCoreV1LifecycleHandler
 */
export interface IoK8sApiCoreV1LifecycleHandler {
    /**
     * 
     * @type {IoK8sApiCoreV1ExecAction}
     * @memberof IoK8sApiCoreV1LifecycleHandler
     */
    exec?: IoK8sApiCoreV1ExecAction;
    /**
     * 
     * @type {IoK8sApiCoreV1HTTPGetAction}
     * @memberof IoK8sApiCoreV1LifecycleHandler
     */
    httpGet?: IoK8sApiCoreV1HTTPGetAction;
    /**
     * 
     * @type {IoK8sApiCoreV1TCPSocketAction}
     * @memberof IoK8sApiCoreV1LifecycleHandler
     */
    tcpSocket?: IoK8sApiCoreV1TCPSocketAction;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1LifecycleHandler interface.
 */
export function instanceOfIoK8sApiCoreV1LifecycleHandler(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoreV1LifecycleHandlerFromJSON(json: any): IoK8sApiCoreV1LifecycleHandler {
    return IoK8sApiCoreV1LifecycleHandlerFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1LifecycleHandlerFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1LifecycleHandler {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exec': !exists(json, 'exec') ? undefined : IoK8sApiCoreV1ExecActionFromJSON(json['exec']),
        'httpGet': !exists(json, 'httpGet') ? undefined : IoK8sApiCoreV1HTTPGetActionFromJSON(json['httpGet']),
        'tcpSocket': !exists(json, 'tcpSocket') ? undefined : IoK8sApiCoreV1TCPSocketActionFromJSON(json['tcpSocket']),
    };
}

export function IoK8sApiCoreV1LifecycleHandlerToJSON(value?: IoK8sApiCoreV1LifecycleHandler | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exec': IoK8sApiCoreV1ExecActionToJSON(value.exec),
        'httpGet': IoK8sApiCoreV1HTTPGetActionToJSON(value.httpGet),
        'tcpSocket': IoK8sApiCoreV1TCPSocketActionToJSON(value.tcpSocket),
    };
}

