import { ApiException } from './../infrastructure/exception/api.exception';
import { Controller, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiBody, ApiConsumes } from '@nestjs/swagger';
import { createWriteStream } from 'fs';
import { join } from 'path';

import { FileUploadReq, FilesUploadReq } from './../dto/request/file.upload.req';

@ApiTags('UploadController')
@Controller('upload')
export class UploadController {
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: '文件上传',
        type: FileUploadReq,
    })
    @Post('file')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file): string {
        const writeImage = createWriteStream(join(__dirname, '../../upload/files', `${Date.now()}-${file.originalname}`))
        writeImage.write(file.buffer)

        return '上传成功';
    }

    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: '文件上传',
        type: FilesUploadReq
    })
    @Post('files')
    @UseInterceptors(FilesInterceptor('files'))
    uploadFiles(@UploadedFiles() files: any[]): string {
        if(files.length === 0){
            throw new ApiException('参数有误')
        }
        for (const file of files) {
            const writeImage = createWriteStream(join(__dirname, '../../upload/files', `${Date.now()}-${file.originalname}`))
            writeImage.write(file.buffer)
        }
        return '上传成功';
    }
}
