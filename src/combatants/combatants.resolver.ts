import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { CombatantsService } from './combatants.service';
import { Combatant } from './combatant.schema';

@Resolver(() => Combatant)
export class CombatantsResolver {
  constructor(private combatantsService: CombatantsService) {}

  @Query(() => [Combatant])
  async combatants(@Args('accountId', { type: () => ID }) accountId: string): Promise<Combatant[]> {
    return this.combatantsService.findByAccount(accountId);
  }

  @Query(() => Combatant, { nullable: true })
  async combatant(@Args('id', { type: () => ID }) id: string): Promise<Combatant | null> {
    return this.combatantsService.findById(id);
  }

  @Mutation(() => Combatant)
  async createCombatant(@Args('data') data: Combatant): Promise<Combatant> {
    return this.combatantsService.create(data as any);
  }

  @Mutation(() => Combatant, { nullable: true })
  async updateCombatant(
    @Args('id', { type: () => ID }) id: string,
    @Args('data') data: Partial<Combatant>,
  ): Promise<Combatant | null> {
    return this.combatantsService.update(id, data as any);
  }

  @Mutation(() => Boolean)
  async deleteCombatant(@Args('id', { type: () => ID }) id: string): Promise<boolean> {
    return this.combatantsService.delete(id);
  }
}
