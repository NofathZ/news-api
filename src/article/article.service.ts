import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Article } from "./article.entity";

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
  ) { }

  async findAll() {
    return await this.articleRepository.find();
  }

  async create(articles) {
    const articleRepo = this.articleRepository.create(articles)
    await this.articleRepository.save(articleRepo)
    return articleRepo;
  }

  async findById(id) {
    return await this.articleRepository.findByIds(id)
  }

  async deleteArticle(id) {
    await this.articleRepository.delete(id)
    return {
      message: "delete success"
    }
  }
}