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


import * as runtime from '../runtime';
import type {
  IoK8sApimachineryPkgApisMetaV1APIGroup,
} from '../models/index';
import {
    IoK8sApimachineryPkgApisMetaV1APIGroupFromJSON,
    IoK8sApimachineryPkgApisMetaV1APIGroupToJSON,
} from '../models/index';

/**
 * 
 */
export class AppsApi extends runtime.BaseAPI {

    /**
     * get information of a group
     */
    async getAppsAPIGroupRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1APIGroup>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/apps/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1APIGroupFromJSON(jsonValue));
    }

    /**
     * get information of a group
     */
    async getAppsAPIGroup(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IoK8sApimachineryPkgApisMetaV1APIGroup> {
        const response = await this.getAppsAPIGroupRaw(initOverrides);
        return await response.value();
    }

}
