import { Router } from 'express';
import { TicketAttachmentController as Controller } from './controller';
import { catcher } from '../../helpers/catcher';

const router: Router = Router();

const controller = new Controller();

router.get('/', catcher(controller.getTicketAttachments));
router.post('/save', catcher(controller.saveTicketAttachments));
router.patch('/update/:id', catcher(controller.updateTicketAttachment));
router.delete('/delete/:id', catcher(controller.deleteTicketAttachment));

export default router;
