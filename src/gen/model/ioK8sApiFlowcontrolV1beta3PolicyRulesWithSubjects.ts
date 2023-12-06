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
import { IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule } from './ioK8sApiFlowcontrolV1beta3NonResourcePolicyRule';
import { IoK8sApiFlowcontrolV1beta3ResourcePolicyRule } from './ioK8sApiFlowcontrolV1beta3ResourcePolicyRule';
import { IoK8sApiFlowcontrolV1beta3Subject } from './ioK8sApiFlowcontrolV1beta3Subject';

/**
* PolicyRulesWithSubjects prescribes a test that applies to a request to an apiserver. The test considers the subject making the request, the verb being requested, and the resource to be acted upon. This PolicyRulesWithSubjects matches a request if and only if both (a) at least one member of subjects matches the request and (b) at least one member of resourceRules or nonResourceRules matches the request.
*/
export class IoK8sApiFlowcontrolV1beta3PolicyRulesWithSubjects {
    /**
    * `nonResourceRules` is a list of NonResourcePolicyRules that identify matching requests according to their verb and the target non-resource URL.
    */
    'nonResourceRules'?: Array<IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule>;
    /**
    * `resourceRules` is a slice of ResourcePolicyRules that identify matching requests according to their verb and the target resource. At least one of `resourceRules` and `nonResourceRules` has to be non-empty.
    */
    'resourceRules'?: Array<IoK8sApiFlowcontrolV1beta3ResourcePolicyRule>;
    /**
    * subjects is the list of normal user, serviceaccount, or group that this rule cares about. There must be at least one member in this slice. A slice that includes both the system:authenticated and system:unauthenticated user groups matches every request. Required.
    */
    'subjects': Array<IoK8sApiFlowcontrolV1beta3Subject>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "nonResourceRules",
            "baseName": "nonResourceRules",
            "type": "Array<IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule>"
        },
        {
            "name": "resourceRules",
            "baseName": "resourceRules",
            "type": "Array<IoK8sApiFlowcontrolV1beta3ResourcePolicyRule>"
        },
        {
            "name": "subjects",
            "baseName": "subjects",
            "type": "Array<IoK8sApiFlowcontrolV1beta3Subject>"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiFlowcontrolV1beta3PolicyRulesWithSubjects.attributeTypeMap;
    }
}
