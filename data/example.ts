import { Handlers } from "$fresh/server.ts";
import { Store } from "https://deno.land/x/rdflib@v0.1.1/mod.ts";

const url = new URL("example.nt", import.meta.url);
const store = new Store();
await store.parse(url.pathname);

export const handler: Handlers = {
  async GET() {
    const result = await store.findMany({});
    return new Response(JSON.stringify(result), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
