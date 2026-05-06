import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { SocialService, PostResult } from './social.service';

@Resolver()
export class SocialResolver {
  constructor(private socialService: SocialService) {}

  @Mutation(() => PostResult)
  async postToTikTok(
    @Args('videoUrl') videoUrl: string,
    @Args('caption') caption: string,
    @Args('hashtags', { type: () => [String] }) hashtags: string[],
  ): Promise<PostResult> {
    return this.socialService.postToTikTok(videoUrl, caption, hashtags);
  }

  @Mutation(() => PostResult)
  async postToInstagram(
    @Args('videoUrl') videoUrl: string,
    @Args('caption') caption: string,
    @Args('hashtags', { type: () => [String] }) hashtags: string[],
  ): Promise<PostResult> {
    return this.socialService.postToInstagram(videoUrl, caption, hashtags);
  }

  @Mutation(() => PostResult)
  async postToYouTube(
    @Args('videoUrl') videoUrl: string,
    @Args('title') title: string,
    @Args('description') description: string,
    @Args('tags', { type: () => [String] }) tags: string[],
  ): Promise<PostResult> {
    return this.socialService.postToYouTube(videoUrl, title, description, tags);
  }

  @Mutation(() => [String])
  async getHashtags(@Args('combatStyle') combatStyle: string): Promise<string[]> {
    return this.socialService.getHashtags(combatStyle);
  }
}
