import { PlaywrightTestConfig, request } from "@playwright/test";

async function globalSetup(config: PlaywrightTestConfig) {
  const url = "https://apmapitest.interfacesys.com/api/Auth/Login";

  const requestContext = await request.newContext();
  const response = await requestContext.post(`${url}`, {
    data: {
      username: `${process.env.USERNAME}`,
      password: `${process.env.PASSWORD}`,
    },
  });

  const body = await response.json();
  console.log(body);
  process.env.TOKEN = body.Data.Token;
  console.log(process.env.TOKEN)
}

export default globalSetup;
// import { FullConfig, request } from '@playwright/test';

// async function globalSetup(config: FullConfig) {
//     const baseURL = config.projects[0].use.baseURL;
//     const url = 'https://apmapitest.interfacesys.com/api/Auth/Login';

//     const requestContext = await request.newContext();
//     const response = await requestContext.post(`${baseURL}${url}`, {
//             headers: {
//                 'Accept': 'application/json',
//                 'Authorization': `Basic ${Buffer.from(`${process.env.USERNAME}:${process.env.USER_ADMIN_PASSWORD}`).toString('base64')}`
//             }
//         });

//     const body = await response.json();
//     process.env.TOKEN = body.data.accessToken;
// }

// export default globalSetup;
