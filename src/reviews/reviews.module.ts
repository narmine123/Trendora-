import { Module } from '@nestjs/common';
import { ReviewService } from './reviews.service';
import { ReviewController } from './reviews.controller';

@Module({
  providers: [ReviewService],
  controllers: [ReviewController]
})
export class ReviewsModule {}
