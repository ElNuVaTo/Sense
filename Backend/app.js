import express from "express";
import morgan from "morgan";
import cors from "cors";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
import publicacaciones from "./src/routes/Publicaciones";
import auth from "./src/routes/Auth";
import baseDatos from "./src/db/mongoDB";
dotenv.config();

const app = express();

//middleware
app.use(morgan("tiny"));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rutas

app.use("/publicaciones", publicacaciones);
app.use("/usuario", auth);

app.set("puerto", process.env.PORT || 3000);
app.listen(app.get("puerto"), () => {
  console.log("Escuchando el puerto ", app.get("puerto"));
});
