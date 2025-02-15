import { GhlClient } from '../ghl.client';
import {
  ListCategoriesResponse,
  CheckSlugResponse,
  CreatePostDto,
  BlogsSearchParams,
  CheckSlugDto,
  ListAuthorsResponse,
  CreatePostResponse,
  UpdatePostDto,
  UpdatePostResponse,
} from './blogs.types';

export class BlogsClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  public async findAuthors(
    params: BlogsSearchParams,
  ): Promise<ListAuthorsResponse> {
    return this.get<ListAuthorsResponse>('/blogs/authors', { params });
  }

  public async findCategories(
    params: BlogsSearchParams,
  ): Promise<ListCategoriesResponse> {
    return this.get<ListCategoriesResponse>('/blogs/categories', {
      params,
    });
  }

  public async checkSlug(dto: CheckSlugDto): Promise<CheckSlugResponse> {
    return this.post<CheckSlugResponse>('/blogs/posts/url-slug-exists', dto);
  }

  public async create(dto: CreatePostDto): Promise<CreatePostResponse> {
    return this.post<CreatePostResponse>('/blogs/posts', dto);
  }

  public async update(
    id: string,
    dto: UpdatePostDto,
  ): Promise<UpdatePostResponse> {
    return this.put<UpdatePostResponse>(`/blogs/${id}`, dto);
  }
}
