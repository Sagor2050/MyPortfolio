import { defineCliConfig } from "sanity/cli";
import { dataset, studioProjectId } from "./src/sanity/env";

export default defineCliConfig({
  api: {
    projectId: studioProjectId,
    dataset
  }
});
