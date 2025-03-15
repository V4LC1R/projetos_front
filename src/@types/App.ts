export type User = {
    id: number,
	email: string,
	name: string,
	type: 1 | 2,
	active: boolean,
	account_in_use: boolean,
	createdAt: Date,
	updatedAt: Date,
}

export type Streak = {
    streak:number
    title:string
    motivational?:string
}

export type Post = {
    id: number,
    name: string,
    theme:string
    title:string
    external_id: string,
    createdAt: Date,
    updatedAt: Date,
}

export type UserPost = {
    id: number,
    user_id: number,
    post_id: number,
    utm_source: string,
    utm_medium: string,
    utm_campaign: string,
    createdAt: Date,
    updatedAt: Date,
    post?:Post
}

export type AuthData = {
    user:User,
    token:string
}

export type SignInData = {
    email:string,
    password:string
}

export type SignUpData = {
    email:string,
    password:string,
    name:string
}

export interface UserProfile extends User {
    streak:Streak[]
}

export interface ReportData {
  ranking: RankingItem[];
  flowRead: FlowReadItem[];
  heatMap: HeatMapItem[];
  orignRead: OriginReadItem[];
}

export interface RankingItem {
  tema: string;
  total_leituras: number;
}

export interface FlowReadItem {
  post_id: number;
  userpost_id: number;
  theme: string;
  createdAt: string; // data no formato ISO
}

export interface HeatMapItem {
  day: string; // data no formato ISO
  total_registros: number;
}

export interface OriginReadItem {
  midia: string;
  total_leituras: number;
}
