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
* ServiceBackendPort is the service port being referenced.
*/
export class IoK8sApiNetworkingV1ServiceBackendPort {
    /**
    * name is the name of the port on the Service. This is a mutually exclusive setting with \"Number\".
    */
    'name'?: string;
    /**
    * number is the numerical port number (e.g. 80) on the Service. This is a mutually exclusive setting with \"Name\".
    */
    'number'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiNetworkingV1ServiceBackendPort.attributeTypeMap;
    }
}
