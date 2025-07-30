import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { UploadModule } from './upload/upload.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PhotosModule } from './photos/photos.module';
import { FavoritesModule } from './favorites/favorites.module';


@Module({
  imports: [
    UserModule,
    AuthModule,
    RoleModule,
    CategoryModule,
    ProductModule,
    UploadModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'), // путь до папки с файлами
      serveRoot: '/uploads', // URL-путь, по которому будут доступны файлы
    }),
    PhotosModule,
    FavoritesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
