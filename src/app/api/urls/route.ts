import { NextResponse } from "next/server";

import { UrlShortnerService } from "@/services/UrlShortenerServices";

import { cache } from "react";


//The cache will stay unless we reload the whole site ofr state updations and re-rendering the cache will still stay
const featchUrls = cache(async () => {
  const shortnerService = new UrlShortnerService();
  const response = await shortnerService.getAllUrls();
  return response;
});
export async function GET() {
  const urls = await featchUrls();
  return NextResponse.json({ urls });
}
