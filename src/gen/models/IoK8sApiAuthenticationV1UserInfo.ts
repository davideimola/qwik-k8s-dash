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
 * UserInfo holds the information about the user needed to implement the user.Info interface.
 * @export
 * @interface IoK8sApiAuthenticationV1UserInfo
 */
export interface IoK8sApiAuthenticationV1UserInfo {
    /**
     * Any additional information provided by the authenticator.
     * @type {{ [key: string]: Array<string>; }}
     * @memberof IoK8sApiAuthenticationV1UserInfo
     */
    extra?: { [key: string]: Array<string>; };
    /**
     * The names of groups this user is a part of.
     * @type {Array<string>}
     * @memberof IoK8sApiAuthenticationV1UserInfo
     */
    groups?: Array<string>;
    /**
     * A unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs.
     * @type {string}
     * @memberof IoK8sApiAuthenticationV1UserInfo
     */
    uid?: string;
    /**
     * The name that uniquely identifies this user among all active users.
     * @type {string}
     * @memberof IoK8sApiAuthenticationV1UserInfo
     */
    username?: string;
}

/**
 * Check if a given object implements the IoK8sApiAuthenticationV1UserInfo interface.
 */
export function instanceOfIoK8sApiAuthenticationV1UserInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiAuthenticationV1UserInfoFromJSON(json: any): IoK8sApiAuthenticationV1UserInfo {
    return IoK8sApiAuthenticationV1UserInfoFromJSONTyped(json, false);
}

export function IoK8sApiAuthenticationV1UserInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAuthenticationV1UserInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'extra': !exists(json, 'extra') ? undefined : json['extra'],
        'groups': !exists(json, 'groups') ? undefined : json['groups'],
        'uid': !exists(json, 'uid') ? undefined : json['uid'],
        'username': !exists(json, 'username') ? undefined : json['username'],
    };
}

export function IoK8sApiAuthenticationV1UserInfoToJSON(value?: IoK8sApiAuthenticationV1UserInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'extra': value.extra,
        'groups': value.groups,
        'uid': value.uid,
        'username': value.username,
    };
}

