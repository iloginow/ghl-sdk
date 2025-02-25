# GoHighLevel SDK for JavaScript  

![GHL SDK](https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/knES3eSWYIsc5YSZ3YLl/media/679a9bb431492763982fd8eb.png)  
*[Image source: LeadConnectorHQ]*  

---

## Key Features  
- **Type Safety**: TypeScript definitions for all API endpoints.  
- **Modular Design**: Import only the modules you need (e.g., `users`, `leads`).  
- **Error Handling**: Unified error responses with automatic retry logic.  

---

## Installation  
```bash  
npm install ghl-sdk  
# or  
yarn add ghl-sdk  
# or  
pnpm add ghl-sdk  
```  

---

## Quick Start  
```typescript  
import { OauthClient, LocationsClient } from 'ghl-sdk';  

const oauthClient = new OauthClient();  
const accessToken = await oauthClient.getAccessToken({
  client_id: '64720d51b50eb849194247ce-lzdnsr6z',
  client_secret: '5060d220-a031-4f39-9cr0-0424e08ffba5',
  grant_type: 'authorization_code',
  user_type: 'Location',
  code: '86b68a0da12ba59f9a85abf2f5bafde171321bdd',
});

// Fetch location details
const locationsClient = new LocationsClient(accessToken);
const { location } = await locationClient.findById('ve9EPM428h8vShlRW1KT');  
console.log(location.name);  
```  

---

## Documentation  
- [API Reference](https://adkonghq.github.io/ghl-sdk/)  

---

## Contributing  
Want to help improve the SDK?  
1. Read the [Contributing Guide](https://github.com/adkonghq/ghl-sdk/blob/main/CONTRIBUTING.md).  
2. Submit issues or pull requests.  
3. Follow our [Code of Conduct](https://github.com/adkonghq/ghl-sdk/blob/main/CODE_OF_CONDUCT.md).  

---

## Support  
- File issues: [GitHub Issues](https://github.com/adkonghq/ghl-sdk/issues)  

---

## License  
[MIT License](https://github.com/adkonghq/ghl-sdk/blob/main/LICENSE) © ADKongHQ  

---
