import { Router } from 'express';
import { CompaniesController as Controller } from './controller';
import { catcher } from '../../helpers/catcher';

const router: Router = Router();

const controller = new Controller();

router.get('/', catcher(controller.getCompanies));
router.post('/save', catcher(controller.saveCompanies));
router.patch('/update/:id', catcher(controller.updateCompany));
router.delete('/delete/:id', catcher(controller.deleteCompany));

export default router;
