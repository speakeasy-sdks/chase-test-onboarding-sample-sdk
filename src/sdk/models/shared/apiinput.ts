/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * An Api is representation of a API (a collection of API Endpoints) within the Speakeasy Platform.
 */
export class ApiInput extends SpeakeasyBase {
    /**
     * The ID of this Api. This is a human-readable name (subject to change).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "api_id" })
    apiId: string;

    /**
     * A detailed description of the Api.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    /**
     * A set of values associated with a meta_data key. This field is only set on get requests.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "meta_data" })
    metaData?: Record<string, string[]>;

    /**
     * The version ID of this Api. This is semantic version identifier.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "version_id" })
    versionId: string;
}
