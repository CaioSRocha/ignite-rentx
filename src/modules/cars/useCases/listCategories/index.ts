import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export default (): ListCategoriesController => {
  const listCategoriesRespository = new CategoriesRepository();

  const listCategoriesUseCase = new ListCategoriesUseCase(
    listCategoriesRespository
  );

  const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase
  );
  return listCategoriesController;
};
