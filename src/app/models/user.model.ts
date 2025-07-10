export interface User {
  id?: number;
  name: string;
  username: string;
  password?: string;
  reviews?: Review[];
}

export interface UserNameView {
  name: string;
  username: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface Review {
  id?: number;
  title: string;
  content: string;
  user?: User;
  resources?: Resource[];
}

export interface Resource {
  id?: number;
  type: ResourceType;
  url: string;
  review?: Review;
}

export enum ResourceType {
  LINK = 'LINK',
  IMAGE = 'IMAGE',
  FILE = 'FILE'
}