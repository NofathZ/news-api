import { Module } from '@nestjs/common';
import { ArticleModule } from './article/article.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ArticleModule, UserModule],
  controllers: [],
  providers: [],
})

export class AppModule {
  constructor(private connection: Connection) { }
}
