/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

/**
 * Configuration for filter operations
 */
export class QueryParamOp extends SpeakeasyBase {
    /**
     * Whether to AND or OR the filters
     */
    @SpeakeasyMetadata({ data: "queryParam, name=and" })
    and: boolean;
}

export class GetApisRequest extends SpeakeasyBase {
    /**
     * Metadata to filter Apis on
     */
    @SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=metadata" })
    metadata?: Record<string, string[]>;

    /**
     * Configuration for filter operations
     */
    @SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=op" })
    op?: QueryParamOp;
}

export class GetApisResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Default error response
     */
    @SpeakeasyMetadata()
    error?: shared.ErrorT;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata({ elemType: shared.Api })
    classes?: shared.Api[];
}
