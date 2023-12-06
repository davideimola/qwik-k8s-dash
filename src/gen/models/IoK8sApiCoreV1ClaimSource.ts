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
 * ClaimSource describes a reference to a ResourceClaim.
 * 
 * Exactly one of these fields should be set.  Consumers of this type must treat an empty object as if it has an unknown value.
 * @export
 * @interface IoK8sApiCoreV1ClaimSource
 */
export interface IoK8sApiCoreV1ClaimSource {
    /**
     * ResourceClaimName is the name of a ResourceClaim object in the same namespace as this pod.
     * @type {string}
     * @memberof IoK8sApiCoreV1ClaimSource
     */
    resourceClaimName?: string;
    /**
     * ResourceClaimTemplateName is the name of a ResourceClaimTemplate object in the same namespace as this pod.
     * 
     * The template will be used to create a new ResourceClaim, which will be bound to this pod. When this pod is deleted, the ResourceClaim will also be deleted. The pod name and resource name, along with a generated component, will be used to form a unique name for the ResourceClaim, which will be recorded in pod.status.resourceClaimStatuses.
     * 
     * This field is immutable and no changes will be made to the corresponding ResourceClaim by the control plane after creating the ResourceClaim.
     * @type {string}
     * @memberof IoK8sApiCoreV1ClaimSource
     */
    resourceClaimTemplateName?: string;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1ClaimSource interface.
 */
export function instanceOfIoK8sApiCoreV1ClaimSource(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoreV1ClaimSourceFromJSON(json: any): IoK8sApiCoreV1ClaimSource {
    return IoK8sApiCoreV1ClaimSourceFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1ClaimSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1ClaimSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'resourceClaimName': !exists(json, 'resourceClaimName') ? undefined : json['resourceClaimName'],
        'resourceClaimTemplateName': !exists(json, 'resourceClaimTemplateName') ? undefined : json['resourceClaimTemplateName'],
    };
}

export function IoK8sApiCoreV1ClaimSourceToJSON(value?: IoK8sApiCoreV1ClaimSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'resourceClaimName': value.resourceClaimName,
        'resourceClaimTemplateName': value.resourceClaimTemplateName,
    };
}

