import { inject, injectable } from "tsyringe";

import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private listCategoriesRespository: ICategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    const list = await this.listCategoriesRespository.list();
    return list;
  }
}

export { ListCategoriesUseCase };
