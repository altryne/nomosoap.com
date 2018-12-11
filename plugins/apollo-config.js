export default function (ctx) {
  return {
    httpEndpoint: ctx.env.HTTP_ENDPOINT,
    getAuth: () => ctx.env.DATO_ACCESS_TOKEN
  }
}
