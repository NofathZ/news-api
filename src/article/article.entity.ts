import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('article')
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  author: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  contentType: string;

  @Column()
  url: string;

  @Column()
  urlImage: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}