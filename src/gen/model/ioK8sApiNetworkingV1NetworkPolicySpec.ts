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
import { IoK8sApiNetworkingV1NetworkPolicyEgressRule } from './ioK8sApiNetworkingV1NetworkPolicyEgressRule';
import { IoK8sApiNetworkingV1NetworkPolicyIngressRule } from './ioK8sApiNetworkingV1NetworkPolicyIngressRule';
import { IoK8sApimachineryPkgApisMetaV1LabelSelector } from './ioK8sApimachineryPkgApisMetaV1LabelSelector';

/**
* NetworkPolicySpec provides the specification of a NetworkPolicy
*/
export class IoK8sApiNetworkingV1NetworkPolicySpec {
    /**
    * egress is a list of egress rules to be applied to the selected pods. Outgoing traffic is allowed if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic matches at least one egress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy limits all outgoing traffic (and serves solely to ensure that the pods it selects are isolated by default). This field is beta-level in 1.8
    */
    'egress'?: Array<IoK8sApiNetworkingV1NetworkPolicyEgressRule>;
    /**
    * ingress is a list of ingress rules to be applied to the selected pods. Traffic is allowed to a pod if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic source is the pod\'s local node, OR if the traffic matches at least one ingress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy does not allow any traffic (and serves solely to ensure that the pods it selects are isolated by default)
    */
    'ingress'?: Array<IoK8sApiNetworkingV1NetworkPolicyIngressRule>;
    'podSelector': IoK8sApimachineryPkgApisMetaV1LabelSelector;
    /**
    * policyTypes is a list of rule types that the NetworkPolicy relates to. Valid options are [\"Ingress\"], [\"Egress\"], or [\"Ingress\", \"Egress\"]. If this field is not specified, it will default based on the existence of ingress or egress rules; policies that contain an egress section are assumed to affect egress, and all policies (whether or not they contain an ingress section) are assumed to affect ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ \"Egress\" ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include \"Egress\" (since such a policy would not include an egress section and would otherwise default to just [ \"Ingress\" ]). This field is beta-level in 1.8
    */
    'policyTypes'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "egress",
            "baseName": "egress",
            "type": "Array<IoK8sApiNetworkingV1NetworkPolicyEgressRule>"
        },
        {
            "name": "ingress",
            "baseName": "ingress",
            "type": "Array<IoK8sApiNetworkingV1NetworkPolicyIngressRule>"
        },
        {
            "name": "podSelector",
            "baseName": "podSelector",
            "type": "IoK8sApimachineryPkgApisMetaV1LabelSelector"
        },
        {
            "name": "policyTypes",
            "baseName": "policyTypes",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiNetworkingV1NetworkPolicySpec.attributeTypeMap;
    }
}

