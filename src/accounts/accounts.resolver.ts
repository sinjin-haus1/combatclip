import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { AccountsService } from './accounts.service';
import { Account, SocialConnection } from './account.schema';

@Resolver(() => Account)
export class AccountsResolver {
  constructor(private accountsService: AccountsService) {}

  @Query(() => Account, { nullable: true })
  async me(@Args('id', { type: () => ID }) id: string): Promise<Account | null> {
    return this.accountsService.findById(id);
  }

  @Query(() => Account, { nullable: true })
  async accountByEmail(@Args('email') email: string): Promise<Account | null> {
    return this.accountsService.findByEmail(email);
  }

  @Mutation(() => Account)
  async createAccount(
    @Args('email') email: string,
    @Args('passwordHash') passwordHash: string,
  ): Promise<Account> {
    return this.accountsService.create(email, passwordHash);
  }

  @Mutation(() => Account)
  async updateAccountPlan(
    @Args('id', { type: () => ID }) id: string,
    @Args('plan') plan: string,
  ): Promise<Account | null> {
    return this.accountsService.updatePlan(id, plan);
  }

  @Mutation(() => Account)
  async addSocialConnection(
    @Args('id', { type: () => ID }) id: string,
    @Args('connection') connection: SocialConnection,
  ): Promise<Account | null> {
    return this.accountsService.addSocialConnection(id, connection as any);
  }

  @Mutation(() => Account)
  async removeSocialConnection(
    @Args('id', { type: () => ID }) id: string,
    @Args('platform') platform: string,
  ): Promise<Account | null> {
    return this.accountsService.removeSocialConnection(id, platform);
  }
}
