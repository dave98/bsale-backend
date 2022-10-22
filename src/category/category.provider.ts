import { CATEGORY_REPOSITORY } from "src/constants";
import { Category } from "./category.entity";

export const categoryProviders = {
    provide: CATEGORY_REPOSITORY,
    useValue: Category,
}