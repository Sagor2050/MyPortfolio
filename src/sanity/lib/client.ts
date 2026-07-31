import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, readToken, studioProjectId } from "@/sanity/env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId: projectId || studioProjectId,
  token: readToken,
  useCdn: !readToken
});
