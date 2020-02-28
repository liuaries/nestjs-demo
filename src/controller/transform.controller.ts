import { Controller, All} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { TransformService } from './../service/transform.service';

@ApiTags('TransformController')
@Controller('transform')
export class TransformController {
  constructor(private readonly transformService: TransformService) {}

  @ApiOperation({ summary: '转换' })
  @All('/all')
  async transform() {
    const mx2objFlag = await this.transformService.mx2obj()
    return mx2objFlag;
  }
}
