import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';


@Module({
  imports: [
    UserModule,
    AuthModule,
    RoleModule,
    CategoryModule,
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
