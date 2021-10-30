import { IsNotEmpty, IsUrl } from "class-validator";

export class CreateArticle {
  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  contentType: string;

  @IsNotEmpty()
  @IsUrl()
  url: string;

  @IsNotEmpty()
  @IsUrl()
  urlImage: string;
}
