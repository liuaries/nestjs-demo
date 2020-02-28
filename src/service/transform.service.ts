import { Injectable } from '@nestjs/common';
import * as process from 'child_process'

@Injectable()
export class TransformService {
  async mx2obj() {
    let success = true
    process.exec('../../lib/MxToObj.exe -f ../../lib/test.mx', (error, stdout, stderr)=> {
      if(!error){
        success = false
      }
      console.log(error)
      console.log(stdout)
      console.log(stderr)
    })
    return success
  }
}
