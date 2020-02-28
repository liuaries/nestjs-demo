import { Injectable } from '@nestjs/common';
import * as process from 'child_process';
import { join } from 'path';
import * as obj2gltf from 'obj2gltf';
import * as fs from 'fs';

const path = join(__dirname, '../../lib')

@Injectable()
export class TransformService {
  async mx2obj() {
    let success:boolean = false
    process.exec(`${path}/MxToObj.exe -f ${path}/test.mx`, async(error, stdout, stderr)  => {
      if(!error){
        success = await this.obj2glb();
      }
      return success
    })
  }

  async obj2glb(): Promise<boolean> {
    const glb = await obj2gltf(`${path}/test.mx.obj`,{binary: true});
    await fs.writeFileSync(`${path}/test.glb`,glb);

    return true
  }
}


