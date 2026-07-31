"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

export function SanityStudio() {
  return <NextStudio config={config} />;
}
