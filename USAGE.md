<!-- Start SDK Example Usage -->


```typescript
import { SpeakeasyAPI } from "Speakeasy-API";

(async () => {
    const sdk = new SpeakeasyAPI({
        apiKey: "",
    });

    const res = await sdk.apis.getApis({
        metadata: {
            key: ["string"],
        },
        op: {
            and: false,
        },
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->