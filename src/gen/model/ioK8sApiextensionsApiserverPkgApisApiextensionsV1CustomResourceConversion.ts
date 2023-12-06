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
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion } from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion';

/**
* CustomResourceConversion describes how to convert different versions of a CR.
*/
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion {
    /**
    * strategy specifies how custom resources are converted between versions. Allowed values are: - `\"None\"`: The converter only change the apiVersion and would not touch any other field in the custom resource. - `\"Webhook\"`: API Server will call to an external webhook to do the conversion. Additional information   is needed for this option. This requires spec.preserveUnknownFields to be false, and spec.conversion.webhook to be set.
    */
    'strategy': string;
    'webhook'?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "strategy",
            "baseName": "strategy",
            "type": "string"
        },
        {
            "name": "webhook",
            "baseName": "webhook",
            "type": "IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion.attributeTypeMap;
    }
}

