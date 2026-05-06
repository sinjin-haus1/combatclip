import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from './account.schema';

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<AccountDocument>,
  ) {}

  async findByEmail(email: string): Promise<Account | null> {
    return this.accountModel.findOne({ email }).exec();
  }

  async findById(id: string): Promise<Account | null> {
    return this.accountModel.findById(id).exec();
  }

  async create(email: string, passwordHash: string): Promise<Account> {
    const account = new this.accountModel({
      email,
      passwordHash,
      displayName: email.split('@')[0],
    });
    return account.save();
  }

  async updatePlan(id: string, plan: string): Promise<Account | null> {
    return this.accountModel.findByIdAndUpdate(id, { plan }, { new: true }).exec();
  }

  async addSocialConnection(
    id: string,
    connection: { platform: string; status: string; accessToken?: string; refreshToken?: string; expiresAt?: Date; accountId?: string },
  ): Promise<Account | null> {
    return this.accountModel.findByIdAndUpdate(
      id,
      { $push: { socialConnections: connection } },
      { new: true },
    ).exec();
  }

  async removeSocialConnection(id: string, platform: string): Promise<Account | null> {
    return this.accountModel.findByIdAndUpdate(
      id,
      { $pull: { socialConnections: { platform } } },
      { new: true },
    ).exec();
  }
}
