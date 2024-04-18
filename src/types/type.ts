export interface IResponseError {
  message?: string;
}

export interface IVacancy {
  id: string;
  title: string;
  desc: string;
  short_desc?: string;
  conditions?: string;
  offers?: string;
  image?: string;
  slug?: string;
  published?: boolean;
}

export interface IService {
  id: string;
  title: string;
  description: string;
  slug: string;
  isPublic: boolean;
}

export interface ISubNavigate {
  id: string;
  title: string;
  slug?: string;
}

export interface INavigate {
  id: string;
  name?: string;
  url?: string;
  showHeader: boolean;
  showFooter: boolean;
}

export interface IRateStructure {
  id: string;
  name: string;
  locked: boolean;
}

export interface IRate {
  id?: number;
  name: string;
  desc: string;
  price: number;
  oldprice?: number;
  popular: boolean;
  term: string;
  volume: string;
  structure: IRateStructure[];
  uniqueId: string;
}
