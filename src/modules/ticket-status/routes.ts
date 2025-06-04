import { Router } from 'express';
import { TicketStatusController as Controller } from './controller';
import { catcher } from '../../helpers/catcher';

const router: Router = Router();

const controller = new Controller();

router.get('/', catcher(controller.getTicketStatuses));
router.post('/save', catcher(controller.saveTicketStatuses));
router.patch('/update/:id', catcher(controller.updateTicketStatus));
router.delete('/delete/:id', catcher(controller.deleteTicketStatus));

export default router;
