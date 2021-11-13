import express from 'express'
import config from 'config';
import AuthRouter from './routes/AuthRoutes';

const PORT  = config.get("port") as number;
const HOST = config.get("host") as string;

const app = express();
app.use(express.json())

app.use('/auth',AuthRouter);

app.listen(PORT,HOST,()=> {
    console.log(`Server listening of http://${HOST}:${PORT}`)
})
