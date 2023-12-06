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
import type { IoK8sApiAuthenticationV1UserInfo } from './IoK8sApiAuthenticationV1UserInfo';
import {
    IoK8sApiAuthenticationV1UserInfoFromJSON,
    IoK8sApiAuthenticationV1UserInfoFromJSONTyped,
    IoK8sApiAuthenticationV1UserInfoToJSON,
} from './IoK8sApiAuthenticationV1UserInfo';

/**
 * SelfSubjectReviewStatus is filled by the kube-apiserver and sent back to a user.
 * @export
 * @interface IoK8sApiAuthenticationV1SelfSubjectReviewStatus
 */
export interface IoK8sApiAuthenticationV1SelfSubjectReviewStatus {
    /**
     * 
     * @type {IoK8sApiAuthenticationV1UserInfo}
     * @memberof IoK8sApiAuthenticationV1SelfSubjectReviewStatus
     */
    userInfo?: IoK8sApiAuthenticationV1UserInfo;
}

/**
 * Check if a given object implements the IoK8sApiAuthenticationV1SelfSubjectReviewStatus interface.
 */
export function instanceOfIoK8sApiAuthenticationV1SelfSubjectReviewStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiAuthenticationV1SelfSubjectReviewStatusFromJSON(json: any): IoK8sApiAuthenticationV1SelfSubjectReviewStatus {
    return IoK8sApiAuthenticationV1SelfSubjectReviewStatusFromJSONTyped(json, false);
}

export function IoK8sApiAuthenticationV1SelfSubjectReviewStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAuthenticationV1SelfSubjectReviewStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userInfo': !exists(json, 'userInfo') ? undefined : IoK8sApiAuthenticationV1UserInfoFromJSON(json['userInfo']),
    };
}

export function IoK8sApiAuthenticationV1SelfSubjectReviewStatusToJSON(value?: IoK8sApiAuthenticationV1SelfSubjectReviewStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userInfo': IoK8sApiAuthenticationV1UserInfoToJSON(value.userInfo),
    };
}

