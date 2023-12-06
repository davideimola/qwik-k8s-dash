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
import type { IoK8sApiCoreV1NodeSelectorRequirement } from './IoK8sApiCoreV1NodeSelectorRequirement';
import {
    IoK8sApiCoreV1NodeSelectorRequirementFromJSON,
    IoK8sApiCoreV1NodeSelectorRequirementFromJSONTyped,
    IoK8sApiCoreV1NodeSelectorRequirementToJSON,
} from './IoK8sApiCoreV1NodeSelectorRequirement';

/**
 * A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
 * @export
 * @interface IoK8sApiCoreV1NodeSelectorTerm
 */
export interface IoK8sApiCoreV1NodeSelectorTerm {
    /**
     * A list of node selector requirements by node's labels.
     * @type {Array<IoK8sApiCoreV1NodeSelectorRequirement>}
     * @memberof IoK8sApiCoreV1NodeSelectorTerm
     */
    matchExpressions?: Array<IoK8sApiCoreV1NodeSelectorRequirement>;
    /**
     * A list of node selector requirements by node's fields.
     * @type {Array<IoK8sApiCoreV1NodeSelectorRequirement>}
     * @memberof IoK8sApiCoreV1NodeSelectorTerm
     */
    matchFields?: Array<IoK8sApiCoreV1NodeSelectorRequirement>;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1NodeSelectorTerm interface.
 */
export function instanceOfIoK8sApiCoreV1NodeSelectorTerm(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoreV1NodeSelectorTermFromJSON(json: any): IoK8sApiCoreV1NodeSelectorTerm {
    return IoK8sApiCoreV1NodeSelectorTermFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1NodeSelectorTermFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1NodeSelectorTerm {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'matchExpressions': !exists(json, 'matchExpressions') ? undefined : ((json['matchExpressions'] as Array<any>).map(IoK8sApiCoreV1NodeSelectorRequirementFromJSON)),
        'matchFields': !exists(json, 'matchFields') ? undefined : ((json['matchFields'] as Array<any>).map(IoK8sApiCoreV1NodeSelectorRequirementFromJSON)),
    };
}

export function IoK8sApiCoreV1NodeSelectorTermToJSON(value?: IoK8sApiCoreV1NodeSelectorTerm | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'matchExpressions': value.matchExpressions === undefined ? undefined : ((value.matchExpressions as Array<any>).map(IoK8sApiCoreV1NodeSelectorRequirementToJSON)),
        'matchFields': value.matchFields === undefined ? undefined : ((value.matchFields as Array<any>).map(IoK8sApiCoreV1NodeSelectorRequirementToJSON)),
    };
}

