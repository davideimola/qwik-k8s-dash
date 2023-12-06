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
import type { IoK8sApiCoreV1PodSpec } from './IoK8sApiCoreV1PodSpec';
import {
    IoK8sApiCoreV1PodSpecFromJSON,
    IoK8sApiCoreV1PodSpecFromJSONTyped,
    IoK8sApiCoreV1PodSpecToJSON,
} from './IoK8sApiCoreV1PodSpec';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * PodTemplateSpec describes the data a pod should have when created from a template
 * @export
 * @interface IoK8sApiCoreV1PodTemplateSpec
 */
export interface IoK8sApiCoreV1PodTemplateSpec {
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiCoreV1PodTemplateSpec
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiCoreV1PodSpec}
     * @memberof IoK8sApiCoreV1PodTemplateSpec
     */
    spec?: IoK8sApiCoreV1PodSpec;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1PodTemplateSpec interface.
 */
export function instanceOfIoK8sApiCoreV1PodTemplateSpec(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoreV1PodTemplateSpecFromJSON(json: any): IoK8sApiCoreV1PodTemplateSpec {
    return IoK8sApiCoreV1PodTemplateSpecFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1PodTemplateSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1PodTemplateSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiCoreV1PodSpecFromJSON(json['spec']),
    };
}

export function IoK8sApiCoreV1PodTemplateSpecToJSON(value?: IoK8sApiCoreV1PodTemplateSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sApiCoreV1PodSpecToJSON(value.spec),
    };
}

