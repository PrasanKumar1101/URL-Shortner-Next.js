import { UrlRespositor } from "@/respositories/UrlRepositories";
import shortId from "shortid";

export class UrlShortnerService {
  private urlRepository: UrlRespositor;
  constructor() {
    this.urlRepository = new UrlRespositor();
  }

  async shortenUrl(originalUrl: string): Promise<string> {
    let url = await this.urlRepository.getUrlByoriginalUrl(originalUrl);
    if (url) {
      return url.shortUrl;
    }
    let shortUrl = shortId();
    url = await this.urlRepository.getUrlByShortUrl(shortUrl);
    while (url) {
      shortUrl = shortId();
      url = await this.urlRepository.getUrlByShortUrl(shortUrl);
    }

    await this.urlRepository.createUrl(originalUrl, shortUrl);
    return shortUrl;
  }

  async getAllUrls() {
    return await this.urlRepository.getAllUrls();
  }

  async getUrlByShortUrl(shortUrl: string) {
    return await this.urlRepository.getUrlByShortUrl(shortUrl);
  }

  //write more service method to this
}
