import { Request, Response } from "express";
import CreateOptionService from "../services/CreateOptionService";
import ShowOptionService from "../services/ShowOptionService";
import UpdateOptionService from "../services/UpdateOptionService";

class OptionController{
    public async create(request: Request, response: Response): Promise<Response>{
        let{id} = request.params
        let{
            manual_organization, 
            experience_organization, 
            form_team, set_interval, 
            various_scales
        } = request.body
        console.log(id)
        const createService = new CreateOptionService()
        await createService.execute({id, 
            manual_organization, experience_organization, 
            form_team, 
            set_interval, 
            various_scales
        })
        return response.json([])
    }

    public async show(request: Request, response: Response): Promise<Response>{
        let {id_pastoral} = request.params
        const showService = new ShowOptionService()
        const option = await showService.execute(id_pastoral)
        return response.json(option)
    }

    public async update(request: Request, response: Response): Promise<Response>{
        let {id_pastoral} = request.params
        let {
            manual_organization, 
            experience_organization, 
            form_team, 
            set_interval, 
            various_scales
        } = request.body
        const updateService = new UpdateOptionService()
        const updatedOption = await updateService.execute({
            id_pastoral, 
            manual_organization, 
            experience_organization, 
            form_team, 
            set_interval, 
            various_scales
        })
        return response.json(updatedOption)
    }
}
export default OptionController