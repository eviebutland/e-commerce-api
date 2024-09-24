
export const api = new sst.aws.ApiGatewayV2("MyApi");  // not connected to AWS

api.route("GET /", {
    handler: 'api.index.getProducts',
});