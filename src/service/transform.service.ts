import { Injectable } from '@nestjs/common';
import * as process from 'child_process'
import { join } from 'path';

@Injectable()
export class TransformService {
  async mx2obj() {
    let success = true
    const path = join(__dirname, '../../lib')
    process.exec(`${path}/MxToObj.exe -f ${path}/test.mx`, (error, stdout, stderr)=> {
      if(error){
        success = false
      }
      console.log(error)
      console.log(stdout)
      console.log(stderr)
    })
    return success
  }
}
