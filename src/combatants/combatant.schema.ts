import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';

export type CombatantDocument = Combatant & Document;

@ObjectType()
@Schema()
export class Combatant {
  @Field(() => ID)
  _id: string;

  @Field()
  @Prop({ required: true })
  accountId: string; // coach's account ID

  @Field()
  @Prop({ required: true })
  name: string;

  @Field({ nullable: true })
  @Prop()
  photoUrl?: string;

  @Field({ nullable: true })
  @Prop()
  weightClass?: string;

  @Field({ nullable: true })
  @Prop()
  record?: string; // e.g. "12-2-1"

  @Field({ nullable: true })
  @Prop()
  discipline?: string; // BOXING, MMA, BJJ, etc.

  @Field({ nullable: true })
  @Prop()
  notes?: string;

  @Field()
  @Prop({ default: Date.now })
  createdAt: Date;
}

export const CombatantSchema = SchemaFactory.createForClass(Combatant);
