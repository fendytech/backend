import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OutfitController } from 'src/controllers/outfit.controller';
import { Outfit } from 'src/entities/outfit.entity';
import { OutfitService } from 'src/services/outfit.service';

@Module({
  imports: [TypeOrmModule.forFeature([Outfit])],
  controllers: [OutfitController],
  providers: [OutfitService],
})
export class OutfitModule {}
