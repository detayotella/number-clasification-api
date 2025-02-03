import { configDotenv } from "dotenv";
import express from "express"; 
import cors from "cors"; 
import numbersRoutes from "./routes/numberRoutes.js"; 

configDotenv(); 

const app = express(); 

const PORT = process.env.PORT || 3000;  

app.use(cors()); 

app.use(express.json());

app.use("/api", numbersRoutes); 

app.listen(PORT, () => {
    console.log(`Server is listening at: ${PORT}`); 
})