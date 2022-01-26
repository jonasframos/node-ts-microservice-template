import * as express from 'express'
import pingRouter from './v1/ping';

const router = express.Router()

router.use('/v1/ping', pingRouter)

export default router