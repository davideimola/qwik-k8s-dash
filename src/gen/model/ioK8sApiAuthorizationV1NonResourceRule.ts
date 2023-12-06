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
* NonResourceRule holds information that describes a rule for the non-resource
*/
export class IoK8sApiAuthorizationV1NonResourceRule {
    /**
    * NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path.  \"*\" means all.
    */
    'nonResourceURLs'?: Array<string>;
    /**
    * Verb is a list of kubernetes non-resource API verbs, like: get, post, put, delete, patch, head, options.  \"*\" means all.
    */
    'verbs': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "nonResourceURLs",
            "baseName": "nonResourceURLs",
            "type": "Array<string>"
        },
        {
            "name": "verbs",
            "baseName": "verbs",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiAuthorizationV1NonResourceRule.attributeTypeMap;
    }
}

