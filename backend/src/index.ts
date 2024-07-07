import express from "express"
import cors from "cors"
import "dotenv/config"
import mongose from "mongoose"
import usersRoutes from "./routes/users"
import authRoutes from "./routes/auth"
import validateRoute from "./routes/auth"
import hotelRoutes from "./routes/my-hotel"
import cookieParser from "cookie-parser"
import path from "path"
import { v2 as cloudinary } from "cloudinary"

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUDE_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})
const app  = express()
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors({
    origin:process.env.FRONTEND_URL as string,
    credentials:true
}));

const port = 7000
mongose.connect(process.env.CONNECTION_STRING as string)
app.use(express.static(path.join(__dirname,"../../vite-project/dist")))
app.use("/api/users",usersRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/auth",validateRoute)
app.use("/api/my-hotels",hotelRoutes)


app.listen(7000,()=>{
    console.log("server is running " + port)
})