import { Router } from 'express';
import { TicketsController as Controller } from './controller';
import { catcher } from '../../helpers/catcher';

const router: Router = Router();

const controller = new Controller();

router.get('/', catcher(controller.getTickets));
router.post('/save', catcher(controller.saveTickets));
router.patch('/update/:id', catcher(controller.updateTicket));
router.delete('/delete/:id', catcher(controller.deleteTicket));

export default router;
