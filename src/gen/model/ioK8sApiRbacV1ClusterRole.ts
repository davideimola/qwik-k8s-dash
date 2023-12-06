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

import { RequestFile } from './models';
import { IoK8sApiRbacV1AggregationRule } from './ioK8sApiRbacV1AggregationRule';
import { IoK8sApiRbacV1PolicyRule } from './ioK8sApiRbacV1PolicyRule';
import { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './ioK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
* ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
*/
export class IoK8sApiRbacV1ClusterRole {
    'aggregationRule'?: IoK8sApiRbacV1AggregationRule;
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
    * Rules holds all the PolicyRules for this ClusterRole
    */
    'rules'?: Array<IoK8sApiRbacV1PolicyRule>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "aggregationRule",
            "baseName": "aggregationRule",
            "type": "IoK8sApiRbacV1AggregationRule"
        },
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "IoK8sApimachineryPkgApisMetaV1ObjectMeta"
        },
        {
            "name": "rules",
            "baseName": "rules",
            "type": "Array<IoK8sApiRbacV1PolicyRule>"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiRbacV1ClusterRole.attributeTypeMap;
    }
}

