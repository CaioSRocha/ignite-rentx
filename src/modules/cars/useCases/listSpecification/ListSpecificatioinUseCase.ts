import { inject, injectable } from "tsyringe";

import { Specification } from "../../entities/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

@injectable()
class ListSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private listSpecificationRespository: ISpecificationRepository
  ) {}
  execute(): Specification[] {
    return this.listSpecificationRespository.list();
  }
}

export { ListSpecificationUseCase };
