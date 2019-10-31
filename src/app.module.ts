import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Survey } from './entities/survey';
import { SurveyModule } from './survey/survey.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    SurveyModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.DATABASE_URL,
      entities: [
        Survey,
      ],
      synchronize: false,
      logging: true,
      useUnifiedTopology: true,
    }),
    GraphQLModule.forRoot({
      debug: process.env.NODE_ENV === 'development',
      playground: process.env.NODE_ENV === 'development',
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [
  ],
  providers: [
    AppService,
  ],
})
export class AppModule {}
