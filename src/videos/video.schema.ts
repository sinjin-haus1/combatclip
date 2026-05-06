import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field, ID, Enum } from '@nestjs/graphql';

export type VideoDocument = Video & Document;

@ObjectType()
export enum VideoStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  READY = 'READY',
  FAILED = 'FAILED',
}

@ObjectType()
export enum CombatStyle {
  BOXING = 'BOXING',
  MMA = 'MMA',
  BJJ = 'BJJ',
  KICKBOXING = 'KICKBOXING',
  WRESTLING = 'WRESTLING',
  MUAY_THAI = 'MUAY_THAI',
  JUDO = 'JUDO',
  TAEKWONDO = 'TAEKWONDO',
}

@ObjectType()
@Schema()
export class Video {
  @Field(() => ID)
  _id: string;

  @Field()
  @Prop({ required: true })
  accountId: string;

  @Field()
  @Prop({ required: true })
  title: string;

  @Field(() => VideoStatus)
  @Prop({ default: VideoStatus.PENDING })
  status: VideoStatus;

  @Field(() => CombatStyle)
  @Prop({ required: true })
  combatStyle: CombatStyle;

  @Field({ nullable: true })
  @Prop()
  templateStyle?: string;

  @Field({ nullable: true })
  @Prop()
  inputMediaUrls?: string[]; // Cloudinary URLs of uploaded images/video

  @Field({ nullable: true })
  @Prop()
  voiceoverUrl?: string; // Cloudinary URL of TTS audio

  @Field({ nullable: true })
  @Prop()
  generatedVideoUrl?: string; // Cloudinary URL of rendered video

  @Field({ nullable: true })
  @Prop()
  thumbnailUrl?: string;

  @Field({ nullable: true })
  @Prop()
  hookText?: string; // trending hook caption

  @Field({ nullable: true })
  @Prop()
  captionText?: string; // full caption

  @Field(() => [SocialPost])
  @Prop({ type: [SocialPostSchema], default: [] })
  socialPosts: SocialPost[];

  @Field()
  @Prop({ default: Date.now })
  createdAt: Date;

  @Field({ nullable: true })
  @Prop()
  scheduledAt?: Date;
}

@ObjectType()
export class SocialPost {
  @Field()
  @Prop({ required: true })
  platform: string; // tiktok | instagram | youtube

  @Field()
  @Prop({ required: true })
  status: string; // pending | posted | failed

  @Field({ nullable: true })
  @Prop()
  postId?: string; // platform's post ID

  @Field({ nullable: true })
  @Prop()
  postUrl?: string; // URL to the posted video

  @Field({ nullable: true })
  @Prop()
  errorMessage?: string;

  @Field({ nullable: true })
  @Prop()
  postedAt?: Date;
}

import { Schema as MongooseSchema } from 'mongoose';
export const SocialPostSchema = new MongooseSchema({
  platform: { type: String, required: true },
  status: { type: String, required: true },
  postId: { type: String },
  postUrl: { type: String },
  errorMessage: { type: String },
  postedAt: { type: Date },
});

export const VideoSchema = SchemaFactory.createForClass(Video);
