import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountsModule } from './accounts/accounts.module';
import { CombatantsModule } from './combatants/combatants.module';
import { VideosModule } from './videos/videos.module';
import { SocialModule } from './social/social.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { TtsModule } from './tts/tts.module';
import { join } from 'path';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/combatclip'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
    }),
    AccountsModule,
    CombatantsModule,
    VideosModule,
    SocialModule,
    CloudinaryModule,
    TtsModule,
  ],
})
export class AppModule {}
