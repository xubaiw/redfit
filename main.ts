import manifest from "./fresh.gen.ts";
import * as devData from "./data/example.ts";
import { parse } from "https://deno.land/std@0.152.0/flags/mod.ts";
import { Manifest, start } from "$fresh/server.ts";

// if run as main, parse args
if (import.meta.main) {
  const args = parse(Deno.args);
  console.log(args);
  // else run in dev mode
} else {
  // modify manifest
  const devManifest: Manifest = manifest;
  devManifest.routes["./routes/api/data.ts"] = devData;
  await start(manifest);
}
