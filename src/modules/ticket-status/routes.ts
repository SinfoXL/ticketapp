import { Router } from 'express';
import { TicketStatusController as controller } from './controller';
import { catcher } from '../../helpers/catcher';

const router = Router();

const conroller = new controller();

router.get('/', catcher(conroller.getTicketStatuses));
router.post('/save', catcher(conroller.saveTicketStatuses));
router.patch('/update/:id', catcher(conroller.updateTicketStatus));
router.delete('/delete/:id', catcher(conroller.deleteTicketStatus));

export default router;
