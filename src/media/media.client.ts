import { GhlClient } from 'src/ghl.client';
import {
  ListMediaFilesResponse,
  MediaFileSearchParams,
  UploadFileDto,
  UploadFileResponse,
} from './media.types';
import { SuccessDeleteResponse } from 'src/common.types';

export class MediaClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  public async findFiles(
    params: MediaFileSearchParams,
  ): Promise<ListMediaFilesResponse> {
    return this.get<ListMediaFilesResponse>('/medias/files', { params });
  }

  public async uploadFile(dto: UploadFileDto): Promise<UploadFileResponse> {
    return this.post<UploadFileResponse>('medias/upload-file', dto, {
      headers: { 'content-type': 'multipart/form-data' },
    });
  }

  public async deleteFile(
    fileId: string,
    altType: 'agency' | 'location',
    altId: string,
  ): Promise<SuccessDeleteResponse> {
    return this.delete<SuccessDeleteResponse>(`/medias/${fileId}`, {
      params: { altType, altId },
    });
  }
}
