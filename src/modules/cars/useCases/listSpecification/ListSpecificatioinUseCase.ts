import { Specification } from "../../entities/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

class ListSpecificationUseCase {
  constructor(private listSpecificationRespository: ISpecificationRepository) {}
  execute(): Specification[] {
    return this.listSpecificationRespository.list();
  }
}

export { ListSpecificationUseCase };
