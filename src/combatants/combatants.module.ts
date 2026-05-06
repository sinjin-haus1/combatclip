import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Combatant, CombatantSchema } from './combatant.schema';
import { CombatantsResolver } from './combatants.resolver';
import { CombatantsService } from './combatants.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Combatant.name, schema: CombatantSchema }]),
  ],
  providers: [CombatantsResolver, CombatantsService],
  exports: [CombatantsService],
})
export class CombatantsModule {}
