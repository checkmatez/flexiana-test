import { app } from './app'

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 4000

app.listen(
  {
    host,
    port,
  },
  () => {
    console.log(`Listening on ${host}:${port}`)
  },
)
