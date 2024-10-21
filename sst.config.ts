// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />


export default $config({
  app(input) {
    return {
      name: "e-commerce-api-one-stop-christmas-shop",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          profile: input.stage === "production" ? "e-commerce-production" : "e-commerce-dev"
        }
      }
    };
  },
  async run() {
    new sst.aws.Remix("e-commerce-api-one-stop-christmas-shop", {
      // path: "my-remix-app/",
      // domain: "my-app.com",
    });

    await import('infra/api')
  },
});
