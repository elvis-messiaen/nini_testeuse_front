import {Categories} from "../categories";
import {Category} from "./enum/category";

export interface Card {
  id: number;
  title: string;
  description: string;
  image: string [];
  category: Category;
  qualite?: string;
  gout?: string;
  packaging?: string;
  prix?: string;
  efficacite?: string;
}
