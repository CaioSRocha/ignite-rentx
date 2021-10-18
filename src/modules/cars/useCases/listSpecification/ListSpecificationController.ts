import { Request, Response } from "express";

import { ListSpecificationUseCase } from "./ListSpecificatioinUseCase";

class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    const listSpecification = this.listSpecificationUseCase.execute();

    return response.status(200).json(listSpecification);
  }
}

export { ListSpecificationController };
