import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { VideosService } from './videos.service';
import { Video, VideoStatus, CombatStyle } from './video.schema';

@Resolver(() => Video)
export class VideosResolver {
  constructor(private videosService: VideosService) {}

  @Query(() => [Video])
  async videos(@Args('accountId', { type: () => ID }) accountId: string): Promise<Video[]> {
    return this.videosService.findByAccount(accountId);
  }

  @Query(() => Video, { nullable: true })
  async video(@Args('id', { type: () => ID }) id: string): Promise<Video | null> {
    return this.videosService.findById(id);
  }

  @Query(() => Object)
  async videoStats(@Args('accountId', { type: () => ID }) accountId: string) {
    return this.videosService.getStats(accountId);
  }

  @Mutation(() => Video)
  async createVideo(
    @Args('accountId', { type: () => ID }) accountId: string,
    @Args('title') title: string,
    @Args('combatStyle', { type: () => CombatStyle }) combatStyle: CombatStyle,
    @Args('templateStyle', { nullable: true }) templateStyle?: string,
  ): Promise<Video> {
    return this.videosService.create({ accountId, title, combatStyle, templateStyle });
  }

  @Mutation(() => Video, { nullable: true })
  async updateVideo(
    @Args('id', { type: () => ID }) id: string,
    @Args('data') data: Partial<Video>,
  ): Promise<Video | null> {
    return this.videosService.update(id, data as any);
  }

  @Mutation(() => Video, { nullable: true })
  async updateVideoStatus(
    @Args('id', { type: () => ID }) id: string,
    @Args('status', { type: () => VideoStatus }) status: VideoStatus,
  ): Promise<Video | null> {
    return this.videosService.updateStatus(id, status);
  }

  @Mutation(() => Video, { nullable: true })
  async addSocialPost(
    @Args('id', { type: () => ID }) id: string,
    @Args('post') post: any,
  ): Promise<Video | null> {
    return this.videosService.addSocialPost(id, post);
  }

  @Mutation(() => Boolean)
  async deleteVideo(@Args('id', { type: () => ID }) id: string): Promise<boolean> {
    return this.videosService.delete(id);
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Object = class {
  total: number;
  ready: number;
  processing: number;
};
