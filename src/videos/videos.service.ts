import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Video, VideoDocument, VideoStatus } from './video.schema';

@Injectable()
export class VideosService {
  constructor(
    @InjectModel(Video.name) private videoModel: Model<VideoDocument>,
  ) {}

  async findByAccount(accountId: string): Promise<Video[]> {
    return this.videoModel.find({ accountId }).sort({ createdAt: -1 }).exec();
  }

  async findById(id: string): Promise<Video | null> {
    return this.videoModel.findById(id).exec();
  }

  async create(data: Partial<Video>): Promise<Video> {
    const video = new this.videoModel(data);
    return video.save();
  }

  async update(id: string, data: Partial<Video>): Promise<Video | null> {
    return this.videoModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async updateStatus(id: string, status: VideoStatus): Promise<Video | null> {
    return this.videoModel.findByIdAndUpdate(id, { status }, { new: true }).exec();
  }

  async addSocialPost(id: string, post: any): Promise<Video | null> {
    return this.videoModel.findByIdAndUpdate(
      id,
      { $push: { socialPosts: post } },
      { new: true },
    ).exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.videoModel.findByIdAndDelete(id).exec();
    return !!result;
  }

  async countByAccount(accountId: string): Promise<number> {
    return this.videoModel.countDocuments({ accountId }).exec();
  }

  async getStats(accountId: string) {
    const total = await this.videoModel.countDocuments({ accountId }).exec();
    const ready = await this.videoModel.countDocuments({ accountId, status: VideoStatus.READY }).exec();
    const processing = await this.videoModel.countDocuments({ accountId, status: VideoStatus.PROCESSING }).exec();
    return { total, ready, processing };
  }
}
