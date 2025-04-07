import { Router } from 'express';
import { TicketAttachmentController as controller } from './controller';
import { catcher } from '../../helpers/catcher';

const router = Router();

const conroller = new controller();

router.get('/', catcher(conroller.getTicketAttachments));
router.post('/save', catcher(conroller.saveTicketAttachments));
router.patch('/update/:id', catcher(conroller.updateTicketAttachment));
router.delete('/delete/:id', catcher(conroller.deleteTicketAttachment));

export default router;
