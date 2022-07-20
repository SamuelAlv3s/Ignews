import * as Prismic from "@prismicio/client";

export default function getPrismicClient() {
  const prismic = Prismic.createClient(process.env.PRISMIC_API_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return prismic;
}
