import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // For .env info
    DatabaseModule, 
    CategoryModule, ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
