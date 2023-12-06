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
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes.
 * @export
 * @interface IoK8sApiCoreV1Secret
 */
export interface IoK8sApiCoreV1Secret {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiCoreV1Secret
     */
    apiVersion?: string;
    /**
     * Data contains the secret data. Each key must consist of alphanumeric characters, '-', '_' or '.'. The serialized form of the secret data is a base64 encoded string, representing the arbitrary (possibly non-string) data value here. Described in https://tools.ietf.org/html/rfc4648#section-4
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApiCoreV1Secret
     */
    data?: { [key: string]: string; };
    /**
     * Immutable, if set to true, ensures that data stored in the Secret cannot be updated (only object metadata can be modified). If not set to true, the field can be modified at any time. Defaulted to nil.
     * @type {boolean}
     * @memberof IoK8sApiCoreV1Secret
     */
    immutable?: boolean;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiCoreV1Secret
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiCoreV1Secret
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * stringData allows specifying non-binary secret data in string form. It is provided as a write-only input field for convenience. All keys and values are merged into the data field on write, overwriting any existing values. The stringData field is never output when reading from the API.
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApiCoreV1Secret
     */
    stringData?: { [key: string]: string; };
    /**
     * Used to facilitate programmatic handling of secret data. More info: https://kubernetes.io/docs/concepts/configuration/secret/#secret-types
     * @type {string}
     * @memberof IoK8sApiCoreV1Secret
     */
    type?: string;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1Secret interface.
 */
export function instanceOfIoK8sApiCoreV1Secret(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoreV1SecretFromJSON(json: any): IoK8sApiCoreV1Secret {
    return IoK8sApiCoreV1SecretFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1SecretFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1Secret {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'data': !exists(json, 'data') ? undefined : json['data'],
        'immutable': !exists(json, 'immutable') ? undefined : json['immutable'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'stringData': !exists(json, 'stringData') ? undefined : json['stringData'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function IoK8sApiCoreV1SecretToJSON(value?: IoK8sApiCoreV1Secret | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'data': value.data,
        'immutable': value.immutable,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'stringData': value.stringData,
        'type': value.type,
    };
}

