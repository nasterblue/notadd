import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { ArticleCategory } from './articleCategory.entity';
import { ArticleComment } from './articleComment.entity';
/**
 * 文章表
 */
@Entity({
    name: 'article',
})
export class Article {
    @PrimaryGeneratedColumn()
    article_id: number;

    @Column({
        type: 'varchar',
        length: 80,
        comment: '标题',
    })
    title: string;

    @Column({
        type: 'text',
        comment: '描述',
    })
    description: string;

    @Column({
        type: 'text',
        comment: '图片集',
    })
    thumbs: string;

    @Column({
        type: 'varchar',
        length: 255,
        comment: '图标/缩略图',
    })
    icon: string;

    /**
     * 文章的类型
     */
    @ManyToOne(() => ArticleCategory, type => type.article_category_id)
    @JoinColumn({
        name: 'article_cateogry_id'
    })
    category: ArticleCategory;

    /**
     * 文章下面的评论
     */
    @OneToMany(() => ArticleComment, type => type.article)
    comments: ArticleComment[];

    @CreateDateColumn({
        type: 'timestamptz'
    })
    create_time: Date;

    @UpdateDateColumn({
        type: 'timestamptz'
    })
    update_time: Date;
}