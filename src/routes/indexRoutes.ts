import {Router} from "express";
import {getIndex, getAbout} from '../controllers/index.controller';
let indexRoutes = Router();

indexRoutes.get('/', getIndex);
indexRoutes.get('/about', getAbout);

export default indexRoutes;
