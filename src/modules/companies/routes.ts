import { Router } from 'express';
import { CompaniesController as controller } from './controller';
import { catcher } from '../../helpers/catcher';

const router = Router();

const conroller = new controller();

router.get('/', catcher(conroller.getCompanies));
router.post('/save', catcher(conroller.saveCompanies));
router.patch('/update/:id', catcher(conroller.updateCompany));
router.delete('/delete/:id', catcher(conroller.deleteCompany));

export default router;
