import { Router } from 'express';
import { TicketsController as controller } from './controller';
import { catcher } from '../../helpers/catcher';

const router = Router();

const conroller = new controller();

router.get('/', catcher(conroller.getTickets));
router.post('/save', catcher(conroller.saveTickets));
router.patch('/update/:id', catcher(conroller.updateTicket));
router.delete('/delete/:id', catcher(conroller.deleteTicket));

export default router;
