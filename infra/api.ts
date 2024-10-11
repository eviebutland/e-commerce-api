
export const api = new sst.aws.ApiGatewayV2("e-commerce-api-on-stop-christmas-shop");  // not connected to AWS

api.route("GET /products", {
    handler: 'api.index.getProducts',
});