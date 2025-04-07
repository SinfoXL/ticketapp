import { Router } from 'express';
import { TicketCommentController as controller } from './controller';
import { catcher } from '../../helpers/catcher';

const router = Router();

const conroller = new controller();

router.get('/', catcher(conroller.getTicketComments));
router.post('/save', catcher(conroller.saveTicketComments));
router.patch('/update/:id', catcher(conroller.updateTicketComment));
router.delete('/delete/:id', catcher(conroller.deleteTicketComment));

export default router;
