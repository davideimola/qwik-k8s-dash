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
import { IoK8sApiCoreV1LoadBalancerStatus } from './ioK8sApiCoreV1LoadBalancerStatus';
import { IoK8sApimachineryPkgApisMetaV1Condition } from './ioK8sApimachineryPkgApisMetaV1Condition';

/**
* ServiceStatus represents the current status of a service.
*/
export class IoK8sApiCoreV1ServiceStatus {
    /**
    * Current service state
    */
    'conditions'?: Array<IoK8sApimachineryPkgApisMetaV1Condition>;
    'loadBalancer'?: IoK8sApiCoreV1LoadBalancerStatus;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<IoK8sApimachineryPkgApisMetaV1Condition>"
        },
        {
            "name": "loadBalancer",
            "baseName": "loadBalancer",
            "type": "IoK8sApiCoreV1LoadBalancerStatus"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1ServiceStatus.attributeTypeMap;
    }
}

