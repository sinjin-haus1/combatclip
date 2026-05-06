import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Video, VideoSchema } from './video.schema';
import { VideosResolver } from './videos.resolver';
import { VideosService } from './videos.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Video.name, schema: VideoSchema }]),
  ],
  providers: [VideosResolver, VideosService],
  exports: [VideosService],
})
export class VideosModule {}
