import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentService } from './comment.service';
import { Comment } from '../entities/comment';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Comment,
    ]),
  ],
  providers: [
    CommentService,
  ],
  exports: [
    CommentService,
  ],
})
export class CommentModule {}
