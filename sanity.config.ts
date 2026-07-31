import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, siteUrl, studioProjectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemas";

export default defineConfig({
  name: "portfolio",
  title: "Sagor S. Dhor Portfolio",
  basePath: "/studio",
  projectId: studioProjectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes
  },
  document: {
    productionUrl: async (_previousUrl, context) => {
      const document = context.document;

      if (document._type === "project" && document.slug && typeof document.slug === "object" && "current" in document.slug) {
        return `${siteUrl}/projects/${document.slug.current}`;
      }

      return siteUrl;
    }
  },
  scheduledPublishing: {
    enabled: false
  },
  schemaTemplates: [],
  tools: (previousTools) => previousTools,
  form: {
    image: {
      assetSources: (previousAssetSources) => previousAssetSources
    }
  },
  unstable_tasks: {
    enabled: false
  },
  apiVersion
});
