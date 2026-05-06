import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Combatant, CombatantDocument } from './combatant.schema';

@Injectable()
export class CombatantsService {
  constructor(
    @InjectModel(Combatant.name) private combatantModel: Model<CombatantDocument>,
  ) {}

  async findByAccount(accountId: string): Promise<Combatant[]> {
    return this.combatantModel.find({ accountId }).exec();
  }

  async findById(id: string): Promise<Combatant | null> {
    return this.combatantModel.findById(id).exec();
  }

  async create(data: Partial<Combatant>): Promise<Combatant> {
    const combatant = new this.combatantModel(data);
    return combatant.save();
  }

  async update(id: string, data: Partial<Combatant>): Promise<Combatant | null> {
    return this.combatantModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.combatantModel.findByIdAndDelete(id).exec();
    return !!result;
  }
}
