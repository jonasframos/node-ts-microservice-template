import { Request, Response, NextFunction } from 'express'
import { Responder } from '../../utils/responder'
import * as express from 'express';
const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    let responseCode = 3000
    return Responder.send({ responseCode, req, res })
})

export default router