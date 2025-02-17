import { GhlClient } from 'src/ghl.client';
import { CoursePublicExporterPayload } from './courses.types';

export class CoursesClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  public async import(dto: CoursePublicExporterPayload): Promise<null> {
    return this.post<null>('/courses/courses-exporter/public/import', dto);
  }
}
