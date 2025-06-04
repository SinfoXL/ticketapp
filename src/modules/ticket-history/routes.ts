import { Router } from 'express';
import { TicketHistoryController as Controller } from './controller';
import { catcher } from '../../helpers/catcher';

const router: Router = Router();

const controller = new Controller();

router.get('/', catcher(controller.getTicketHistories));
router.post('/save', catcher(controller.saveTicketHistories));
router.patch('/update/:id', catcher(controller.updateTicketHistory));
router.delete('/delete/:id', catcher(controller.deleteTicketHistory));

export default router;
