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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface IoK8sApiCoreV1GRPCAction
 */
export interface IoK8sApiCoreV1GRPCAction {
    /**
     * Port number of the gRPC service. Number must be in the range 1 to 65535.
     * @type {number}
     * @memberof IoK8sApiCoreV1GRPCAction
     */
    port: number;
    /**
     * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
     * 
     * If this is not specified, the default behavior is defined by gRPC.
     * @type {string}
     * @memberof IoK8sApiCoreV1GRPCAction
     */
    service?: string;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1GRPCAction interface.
 */
export function instanceOfIoK8sApiCoreV1GRPCAction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "port" in value;

    return isInstance;
}

export function IoK8sApiCoreV1GRPCActionFromJSON(json: any): IoK8sApiCoreV1GRPCAction {
    return IoK8sApiCoreV1GRPCActionFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1GRPCActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1GRPCAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'port': json['port'],
        'service': !exists(json, 'service') ? undefined : json['service'],
    };
}

export function IoK8sApiCoreV1GRPCActionToJSON(value?: IoK8sApiCoreV1GRPCAction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'port': value.port,
        'service': value.service,
    };
}
