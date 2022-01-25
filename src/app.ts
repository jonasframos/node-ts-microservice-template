import { Request, Response, NextFunction } from 'express'
const express = require('express')

const app = express()
const PORT = 8000

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Express + TypeScript')
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
});