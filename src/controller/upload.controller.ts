import { ApiException } from './../infrastructure/exception/api.exception';
import { Controller, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiBody, ApiConsumes, ApiOperation } from '@nestjs/swagger';
import { createWriteStream } from 'fs';
import { join } from 'path';

import { FileUploadReq, FilesUploadReq } from './../dto/request/file.upload.req';

@ApiTags('UploadController')
@Controller('upload')
export class UploadController {
    @ApiOperation({summary: '单文件上传'})
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: '文件上传',
        type: FileUploadReq,
    })
    @Post('file')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file): string {
        const path = join(__dirname, '../../upload/files', `${Date.now()}-${file.originalname}`)
        const writeImage = createWriteStream(path)
        writeImage.write(file.buffer)

        return path;
    }

    @ApiOperation({summary: '多文件上传'})
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: '文件上传',
        type: FilesUploadReq
    })
    @Post('files')
    @UseInterceptors(FilesInterceptor('files'))
    uploadFiles(@UploadedFiles() files: any[]): string[] {
        if(files.length === 0){
            throw new ApiException('参数有误')
        }
        let urls = [];
        for (const file of files) {
            const path = join(__dirname, '../../upload/files', `${Date.now()}-${file.originalname}`)
            const writeImage = createWriteStream(path)
            writeImage.write(file.buffer)
            urls.push(path)
        }
        return urls;
    }
}
