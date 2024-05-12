import 'dotenv/config'
import express, { Request, Response } from "express"
import cors from "cors";
import { AddressInfo } from 'net'
import { userRouter } from './routes/userRouter';


const app = express();

app.use(express.json());
app.use(cors());


app.get("/", async (req: Request, res: Response) => {
  try {
    res.send("Hello, world!");
  } catch (e: any) {
    res.send(e.sqlMessage || e.message);
  }
});

app.use('/users/', userRouter)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
