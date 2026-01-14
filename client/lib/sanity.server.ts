import { createClient } from "@sanity/client";

export const sanityServerClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-05-24",
  token: process.env.SANITY_API_TOKEN, // private token
  useCdn: false,
});
