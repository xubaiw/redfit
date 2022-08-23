/** @jsx h */
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { Quad } from "https://deno.land/x/rdflib@v0.1.1/mod.ts";

export default function ShowData() {
  const [data, setData] = useState<Quad[]>([]);
  useEffect(() => { fetchAndUpdate(setData) }, []);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {
        data.map(q => <text x="0" y="300">{ JSON.stringify(q) }</text>)
      }
    </svg>
  );
}

async function fetchAndUpdate(setData: (data: Quad[]) => void) {
  const response = await fetch("/api/data");
  const json = await response.json();
  setData(json);
}
