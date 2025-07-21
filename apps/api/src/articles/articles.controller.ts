import { Controller, Get, Param, Query } from '@nestjs/common';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  async findAll(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ) {
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    
    return this.articlesService.findAll(pageNum, limitNum);
  }

  @Get(':slug')
  async findOneBySlug(@Param('slug') slug: string) {
    return this.articlesService.findOneBySlug(slug);
  }
} 