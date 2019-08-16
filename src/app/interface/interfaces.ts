export interface Article {
  body: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: Array<any>;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  author: Author;
}

export interface NewArticle {
  title: string;
  description: string;
  body: string;
  tagList: Array<string>;
}

export interface Author {
  bio: string;
  following: boolean;
  image: string;
  username: string;
}

export interface User {
  email: string;
  token: string;
  username: string;
  bio: string;
  images: string;
}

export interface NewUser {
  username: string;
  email: string;
  password: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface ErrorAneo {
  field: string;
  msg: Array<string>;
}

export interface Profile {
  username: string;
  bio: string;
  image: string;
  following: string;
}
