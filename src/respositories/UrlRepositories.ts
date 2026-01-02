import Url, { IUrl } from "@/models/Url";
import connectDB from "@/config/db";
import { Model } from "mongoose";
export class UrlRespositor {
  private urlModel: Model<IUrl>;
  constructor() {
    connectDB(); //make connection b/w project and the bd
    this.urlModel = Url;
  }

  async getUrlById(id: string): Promise<IUrl | null> {
    return await this.urlModel.findById(id).lean();
  }

  async getUrlByShortUrl(shortUrl: string): Promise<IUrl | null> {
    return await this.urlModel.findOne({ shortUrl }).lean();
  }

  async getUrlByoriginalUrl(originalUrl: string): Promise<IUrl | null> {
    return await this.urlModel.findOne({ originalUrl }).lean();
  }

  async getAllUrls(): Promise<IUrl[]> {
    return this.urlModel.find().lean();
  }

  async deleteUrl(id: string): Promise<IUrl | null> {
    return await this.urlModel.findByIdAndDelete(id).lean();
  }

  async createUrl(originalUrl: string, shortUrl: string): Promise<IUrl> {
    return await this.urlModel.create({ shortUrl, originalUrl });
  }
  //Todo write the update method by myself
}
