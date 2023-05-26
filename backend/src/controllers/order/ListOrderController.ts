import {Request, Response} from 'express';
import { ListOrderService } from '../../services/order/ListOrderService'


class ListOrderController{

    async handle(req: Request, res:Response){
    
        const listOrderServices = new ListOrderService();
        
        const orders = await listOrderServices.execute();

        return res.json(orders);
    }

}

export { ListOrderController }