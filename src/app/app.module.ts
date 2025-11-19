import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from '../modules/health/health.module';
import { UsersModule } from '../modules/users/users.module';
import { AuthModule } from '../modules/auth/auth.module';
import { configuration } from '../config/configuration';
import { envValidationSchema } from '../config/validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: ['.env', 'src/config/env/.env.example'],
      validationSchema: envValidationSchema,
    }),
    HealthModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
