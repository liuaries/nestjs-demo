import { DynamicModule, Module, Global } from '@nestjs/common';
import { ConfigService } from '../infrastructure/config/config.service';
import { CONFIG_OPTIONS } from '../infrastructure/config/constants';

export interface ConfigModuleOptions {
  folder: string;
}

@Global()
@Module({})
export class ConfigModule {
  static register(options: ConfigModuleOptions): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: CONFIG_OPTIONS,
          useValue: options,
        },
        ConfigService,
      ],
      exports: [ConfigService],
    };
  }
}
