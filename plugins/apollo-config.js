export default function (ctx) {
  return {
    httpEndpoint: process.env.HTTP_ENDPOINT,
    getAuth: () => process.env.DATO_ACCESS_TOKEN
  }
}
