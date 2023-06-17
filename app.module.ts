import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './app/products/products.module';
import { ColorsModule } from './app/colors/colors.module';
import { SizesModule } from './app/sizes/sizes.module';
import { CategoriesModule } from './app/categories/categories.module';
import { UserModule } from './app/user/user.module';
import { AuthModule } from './app/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://vinhtran230703:Thanhvinh12@cluster0.3zmldr5.mongodb.net/'),
    ProductsModule,
    ColorsModule,
    SizesModule,
    CategoriesModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
