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

/**
* ScaleStatus represents the current status of a scale subresource.
*/
export class IoK8sApiAutoscalingV1ScaleStatus {
    /**
    * replicas is the actual number of observed instances of the scaled object.
    */
    'replicas': number;
    /**
    * selector is the label query over pods that should match the replicas count. This is same as the label selector but in the string format to avoid introspection by clients. The string will be in the same format as the query-param syntax. More info about label selectors: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
    */
    'selector'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "replicas",
            "baseName": "replicas",
            "type": "number"
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiAutoscalingV1ScaleStatus.attributeTypeMap;
    }
}

