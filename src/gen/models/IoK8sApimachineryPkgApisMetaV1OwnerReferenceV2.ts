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
 * OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.
 * @export
 * @interface IoK8sApimachineryPkgApisMetaV1OwnerReferenceV2
 */
export interface IoK8sApimachineryPkgApisMetaV1OwnerReferenceV2 {
    /**
     * API version of the referent.
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1OwnerReferenceV2
     */
    apiVersion: string;
    /**
     * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
     * @type {boolean}
     * @memberof IoK8sApimachineryPkgApisMetaV1OwnerReferenceV2
     */
    blockOwnerDeletion?: boolean;
    /**
     * If true, this reference points to the managing controller.
     * @type {boolean}
     * @memberof IoK8sApimachineryPkgApisMetaV1OwnerReferenceV2
     */
    controller?: boolean;
    /**
     * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1OwnerReferenceV2
     */
    kind: string;
    /**
     * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1OwnerReferenceV2
     */
    name: string;
    /**
     * UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1OwnerReferenceV2
     */
    uid: string;
}

/**
 * Check if a given object implements the IoK8sApimachineryPkgApisMetaV1OwnerReferenceV2 interface.
 */
export function instanceOfIoK8sApimachineryPkgApisMetaV1OwnerReferenceV2(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "apiVersion" in value;
    isInstance = isInstance && "kind" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "uid" in value;

    return isInstance;
}

export function IoK8sApimachineryPkgApisMetaV1OwnerReferenceV2FromJSON(json: any): IoK8sApimachineryPkgApisMetaV1OwnerReferenceV2 {
    return IoK8sApimachineryPkgApisMetaV1OwnerReferenceV2FromJSONTyped(json, false);
}

export function IoK8sApimachineryPkgApisMetaV1OwnerReferenceV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApimachineryPkgApisMetaV1OwnerReferenceV2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'],
        'blockOwnerDeletion': !exists(json, 'blockOwnerDeletion') ? undefined : json['blockOwnerDeletion'],
        'controller': !exists(json, 'controller') ? undefined : json['controller'],
        'kind': json['kind'],
        'name': json['name'],
        'uid': json['uid'],
    };
}

export function IoK8sApimachineryPkgApisMetaV1OwnerReferenceV2ToJSON(value?: IoK8sApimachineryPkgApisMetaV1OwnerReferenceV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'blockOwnerDeletion': value.blockOwnerDeletion,
        'controller': value.controller,
        'kind': value.kind,
        'name': value.name,
        'uid': value.uid,
    };
}
