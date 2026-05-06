import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';

export type AccountDocument = Account & Document;

@ObjectType()
@Schema()
export class Account {
  @Field(() => ID)
  _id: string;

  @Field()
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  passwordHash: string;

  @Field()
  @Prop({ default: '' })
  displayName: string;

  @Field()
  @Prop({ default: 'free' })
  plan: string; // free | pro | elite

  @Field(() => [SocialConnection])
  @Prop({ type: [SocialConnectionSchema], default: [] })
  socialConnections: SocialConnection[];

  @Field()
  @Prop({ default: Date.now })
  createdAt: Date;
}

@ObjectType()
export class SocialConnection {
  @Field()
  @Prop({ required: true })
  platform: string; // tiktok | instagram | youtube

  @Field()
  @Prop({ required: true })
  status: string; // connected | disconnected | pending

  @Field({ nullable: true })
  @Prop()
  accessToken?: string;

  @Field({ nullable: true })
  @Prop()
  refreshToken?: string;

  @Field({ nullable: true })
  @Prop()
  expiresAt?: Date;

  @Field({ nullable: true })
  @Prop()
  accountId?: string; // platform-specific account ID
}

import { Schema as MongooseSchema } from 'mongoose';
export const SocialConnectionSchema = new MongooseSchema({
  platform: { type: String, required: true },
  status: { type: String, required: true },
  accessToken: { type: String },
  refreshToken: { type: String },
  expiresAt: { type: Date },
  accountId: { type: String },
});

export const AccountSchema = SchemaFactory.createForClass(Account);
