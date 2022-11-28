import { NextFunction, Request, Response } from "express";
import CreateCelebrationService from "../services/CreateCelebrationService";
import DeleteCelebrationService from "../services/DeleteCelebrationService";
import ListCelebrationService from "../services/ListCelebrationService";
import ShowCelebrationService from "../services/ShowCelebrationService";
import UpdateCelebrationService from "../services/UpdateCelebrationService";

class CelebrationController {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      let { day, hour, solemnitie, confirm_celebration } = request.body;
      const createService = new CreateCelebrationService();
      const newCelebration = await createService.execute({
        day,
        hour,
        solemnitie,
        confirm_celebration,
      });
      return response.json(newCelebration);
    } catch (error) {
      next(error);
    }
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const listService = new ListCelebrationService();
    const celebrations = await listService.execute();
    return response.json(celebrations);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    let { id } = request.params;
    const showService = new ShowCelebrationService();
    const celebration = await showService.execute({ id });
    return response.json(celebration);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    let { id } = request.params;
    let { day, hour, solemnitie, confirm_celebration } = request.body;
    const updateService = new UpdateCelebrationService();
    const updatedCelebration = await updateService.execute({
      id,
      day,
      hour,
      solemnitie,
      confirm_celebration,
    });
    return response.json(updatedCelebration);
  }

  public async delete(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      let {id} = request.params;
      const deleteService = new DeleteCelebrationService();
      await deleteService.execute(id);
      return response.json([]);
    } catch (error) {
      next(error);
    }
  }
}
export default CelebrationController;
