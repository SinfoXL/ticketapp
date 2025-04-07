import { Router } from 'express';
import { TicketHistoryController as controller } from './controller';
import { catcher } from '../../helpers/catcher';

const router = Router();

const conroller = new controller();

router.get('/', catcher(conroller.getTicketHistories));
router.post('/save', catcher(conroller.saveTicketHistories));
router.patch('/update/:id', catcher(conroller.updateTicketHistory));
router.delete('/delete/:id', catcher(conroller.deleteTicketHistory));

export default router;
