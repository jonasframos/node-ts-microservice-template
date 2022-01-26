import { Request, Response, NextFunction } from 'express'
import router from './routes'
import * as express from 'express'

const app = express()
const PORT = 8000

app.use(router)

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
});