import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  async findAll(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;
    
    const [articles, total] = await Promise.all([
      this.prisma.article.findMany({
        where: { isPublished: true },
        include: {
          author: {
            select: {
              id: true,
              name: true,
              imageUrl: true,
            },
          },
        },
        orderBy: { publishedAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.article.count({
        where: { isPublished: true },
      }),
    ]);

    return {
      articles,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        hasNext: page * limit < total,
        hasPrev: page > 1,
      },
    };
  }

  async findOneBySlug(slug: string) {
    const article = await this.prisma.article.findUnique({
      where: { slug },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            imageUrl: true,
          },
        },
      },
    });

    if (!article) {
      throw new NotFoundException(`Article with slug ${slug} not found`);
    }

    return article;
  }
} 