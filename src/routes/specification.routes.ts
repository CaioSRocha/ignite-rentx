import { Router } from "express";

import { createSpecificationController } from "../module/cars/useCases/createSpecification";
import { listSpecificationController } from "../module/cars/useCases/listSpecification";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationRoutes.get("/", (request, response) => {
  return listSpecificationController.handle(request, response);
});

export { specificationRoutes };
