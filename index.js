import express from 'express'
import cors from 'cors'
import secure from 'ssl-express-www'
import { color } from './renz/lib/color.js'
import mainrouter from'./routes/main'
import apirouter from './routes/api'

const app = express()
app.enable('trust proxy');
app.set("json spaces", 2)
app.use(cors())
app.use(secure)
app.use(express.static("./renz/views"))
/* diatas ini adalah dir untuk template
dokumentasi api anda*/

app.use('/', mainrouter) // home
app.use('/api', apirouter) // api

app.listen(4000, () => {
    console.log(color("Server running on port 4000" , 'green'))
})
