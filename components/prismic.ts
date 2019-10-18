import Prismic from "prismic-javascript";

const apiEndpoint = "https://damaeracom.prismic.io/api/v2";
const client = Prismic.client(apiEndpoint);

export { client, Prismic };
