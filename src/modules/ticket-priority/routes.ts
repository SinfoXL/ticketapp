import { Router } from 'express';
import { TicketPriorityController as controller } from './controller';
import { catcher } from '../../helpers/catcher';

const router = Router();

const conroller = new controller();

router.get('/', catcher(conroller.getTicketPriorities));
router.post('/save', catcher(conroller.saveTicketPriorities));
router.patch('/update/:id', catcher(conroller.updateTicketPriority));
router.delete('/delete/:id', catcher(conroller.deleteTicketPriority));

export default router;
