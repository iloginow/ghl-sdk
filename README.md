# GoHighLevel SDK for JavaScript

![GitHub License](https://img.shields.io/github/license/adkonghq/ghl-sdk)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/adkonghq/ghl-sdk/master)

## Installation  
```bash  
npm install ghl-sdk  
```
```bash   
yarn add ghl-sdk  
```
```bash  
pnpm add ghl-sdk  
``` 

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

## Useful Resources  
- [Typedoc Reference](https://adkonghq.github.io/ghl-sdk/)
- [Issues](https://github.com/adkonghq/ghl-sdk/issues)  


## License  
[MIT License](https://github.com/adkonghq/ghl-sdk/blob/main/LICENSE) © ADKongHQ  

---
