import { ArticleImage } from './ArticleImage';
import { ArticleVideo } from './ArticleVideo';
import { ArticleQA } from './ArticleQA';

export interface Article {
	title: string;
	body: string;
	createdAt: Date;
	updatedAt: Date;
    images: ArticleImage[];
    videos: ArticleVideo[];
    qa: ArticleQA[];
} 
