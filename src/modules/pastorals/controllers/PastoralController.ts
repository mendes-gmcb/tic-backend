import { Request, Response } from "express";
import AppError from "../../../errors/AppError";
import CreatePastoralService from "../services/CreatePastoralService";
import DeletePastoralService from "../services/DeletePastoralService";
import ListPastoralService from "../services/ListPastoralService";
import ShowPastoralService from "../services/ShowPastoralService";
import UpdatePastoralService from "../services/UpdatePastoralService";
class PastoralController {
  public async create(request: Request, response: Response): Promise<Response> {
    let { name, description, creator_id } = request.body;
    const createService = new CreatePastoralService();
    const newPastoral = await createService.execute({
      name,
      description,
      creator_id,
    });
    return response.json(newPastoral);
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const listService = new ListPastoralService();
    let pastorals = await listService.execute();
    return response.json(pastorals);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const showService = new ShowPastoralService();
      const pastoral = await showService.execute({ id });
      return response.json(pastoral);
    } catch (error) {
      throw new AppError("Pastoral não existe!", 400);
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteService = new DeletePastoralService();
    await deleteService.execute(id);
    return response.json([]);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description, creator_id } = request.body;
    const updateService = new UpdatePastoralService();
    const updatePastoral = await updateService.execute({
      id,
      name,
      description,
      creator_id,
    });
    return response.json(updatePastoral);
  }
}
export default PastoralController;
