/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as shared from "../sdk/models/shared";
import { ApiEndpoints } from "./apiendpoints";
import { Apis } from "./apis";
import { Embeds } from "./embeds";
import { Metadata } from "./metadata";
import { Requests } from "./requests";
import { Schemas } from "./schemas";
import axios from "axios";
import { AxiosInstance } from "axios";

export const ServerProd = "prod";
/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = {
    [ServerProd]: "https://api.prod.speakeasyapi.dev",
} as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    apiKey?: string;

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    server?: keyof typeof ServerList;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "0.1.0";
    sdkVersion = "0.5.3";
    genVersion = "2.194.1";
    userAgent = "speakeasy-sdk/typescript 0.5.3 2.194.1 0.1.0 Speakeasy-API";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Speakeasy API: The Speakeasy API allows teams to manage common operations with their APIs
 *
 * @see {@link https://docs.speakeasyapi.dev} - The Speakeasy Platform Documentation
 */
export class SpeakeasyAPI {
    /**
     * REST APIs for managing Api entities
     */
    public apis: Apis;
    /**
     * REST APIs for managing ApiEndpoint entities
     */
    public apiEndpoints: ApiEndpoints;
    /**
     * REST APIs for managing Version Metadata entities
     */
    public metadata: Metadata;
    /**
     * REST APIs for managing Schema entities
     */
    public schemas: Schemas;
    /**
     * REST APIs for retrieving request information
     */
    public requests: Requests;
    /**
     * REST APIs for managing embeds
     */
    public embeds: Embeds;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const server = props?.server ?? ServerProd;

        if (!serverURL) {
            serverURL = ServerList[server];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: new shared.Security({ apiKey: props?.apiKey }),

            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.apis = new Apis(this.sdkConfiguration);
        this.apiEndpoints = new ApiEndpoints(this.sdkConfiguration);
        this.metadata = new Metadata(this.sdkConfiguration);
        this.schemas = new Schemas(this.sdkConfiguration);
        this.requests = new Requests(this.sdkConfiguration);
        this.embeds = new Embeds(this.sdkConfiguration);
    }
}
