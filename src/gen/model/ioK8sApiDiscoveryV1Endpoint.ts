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
import { IoK8sApiCoreV1ObjectReference } from './ioK8sApiCoreV1ObjectReference';
import { IoK8sApiDiscoveryV1EndpointConditions } from './ioK8sApiDiscoveryV1EndpointConditions';
import { IoK8sApiDiscoveryV1EndpointHints } from './ioK8sApiDiscoveryV1EndpointHints';

/**
* Endpoint represents a single logical \"backend\" implementing a service.
*/
export class IoK8sApiDiscoveryV1Endpoint {
    /**
    * addresses of this endpoint. The contents of this field are interpreted according to the corresponding EndpointSlice addressType field. Consumers must handle different types of addresses in the context of their own capabilities. This must contain at least one address but no more than 100. These are all assumed to be fungible and clients may choose to only use the first element. Refer to: https://issue.k8s.io/106267
    */
    'addresses': Array<string>;
    'conditions'?: IoK8sApiDiscoveryV1EndpointConditions;
    /**
    * deprecatedTopology contains topology information part of the v1beta1 API. This field is deprecated, and will be removed when the v1beta1 API is removed (no sooner than kubernetes v1.24).  While this field can hold values, it is not writable through the v1 API, and any attempts to write to it will be silently ignored. Topology information can be found in the zone and nodeName fields instead.
    */
    'deprecatedTopology'?: { [key: string]: string; };
    'hints'?: IoK8sApiDiscoveryV1EndpointHints;
    /**
    * hostname of this endpoint. This field may be used by consumers of endpoints to distinguish endpoints from each other (e.g. in DNS names). Multiple endpoints which use the same hostname should be considered fungible (e.g. multiple A values in DNS). Must be lowercase and pass DNS Label (RFC 1123) validation.
    */
    'hostname'?: string;
    /**
    * nodeName represents the name of the Node hosting this endpoint. This can be used to determine endpoints local to a Node.
    */
    'nodeName'?: string;
    'targetRef'?: IoK8sApiCoreV1ObjectReference;
    /**
    * zone is the name of the Zone this endpoint exists in.
    */
    'zone'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "addresses",
            "baseName": "addresses",
            "type": "Array<string>"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "IoK8sApiDiscoveryV1EndpointConditions"
        },
        {
            "name": "deprecatedTopology",
            "baseName": "deprecatedTopology",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "hints",
            "baseName": "hints",
            "type": "IoK8sApiDiscoveryV1EndpointHints"
        },
        {
            "name": "hostname",
            "baseName": "hostname",
            "type": "string"
        },
        {
            "name": "nodeName",
            "baseName": "nodeName",
            "type": "string"
        },
        {
            "name": "targetRef",
            "baseName": "targetRef",
            "type": "IoK8sApiCoreV1ObjectReference"
        },
        {
            "name": "zone",
            "baseName": "zone",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiDiscoveryV1Endpoint.attributeTypeMap;
    }
}

