<!-- Start SDK Example Usage [usage] -->
```typescript
import { SpeakeasyAPI } from "Speakeasy-API";

async function run() {
    const sdk = new SpeakeasyAPI({
        apiKey: "<YOUR_API_KEY_HERE>",
    });

    const res = await sdk.apis.getApis({
        metadata: {
            key: ["<value>"],
        },
        op: {
            and: false,
        },
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->