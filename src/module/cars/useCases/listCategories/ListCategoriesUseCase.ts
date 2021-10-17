import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(private listCategoriesRespository: ICategoriesRepository) {}

  async execute(): Promise<Category[]> {
    const list = await this.listCategoriesRespository.list();
    return list;
  }
}

export { ListCategoriesUseCase };
