export interface Article {
  body: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  taglist: Array<any>;
  title: string;
  createdAt: Date;
  updateAt: Date;
  author: Author;
}

export interface Author {
  bio: string;
  following: boolean;
  image: string;
  username: string;
}
