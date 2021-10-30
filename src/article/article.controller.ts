import { Body, Controller, Get, Post, Param, Delete } from "@nestjs/common";
import { ArticleService } from "./article.service";
import { CreateArticle } from "./article.dto";


@Controller('news')
export class ArticleController {
  constructor(private readonly articleService: ArticleService){}

  @Get()
  getArticles(){
    return this.articleService.findAll();
  }

  @Get(':id')
  getArticleById(@Param('id') id) {
    return this.articleService.findById(id)
  }

  @Post()
  async postArticle(@Body() createArticle: CreateArticle) {
    const articles = await this.articleService.create(createArticle)
    return articles
  }

  @Delete(':id')
  async deleteArticle(@Param('id') id) {
    const deleteMessage = await this.articleService.deleteArticle(id)
    return deleteMessage
  }
}