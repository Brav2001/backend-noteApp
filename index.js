import express from "express";
import corsMiddleware from "./src/middlewares/cors-middleware.js";

import authRouter from "./src/routes/auth.router.js";
import noteRouter from "./src/routes/note.router.js";
import { initORM } from "./src/models/init.model.js";
import { verifyToken } from "./src/middlewares/jwt-middleware.js";
import compression from "compression";
import categoryRouter from "./src/routes/category.router.js";
import categoryNoteRouter from "./src/routes/category-note.router.js";

const app = express();
app.disable("x-powered-by");

const PORT = process.env.PORT ?? 3000;

initORM();

app.use(compression());
app.use(express.json());
app.use(corsMiddleware());

app.use("/auth", authRouter);
app.use("/note", verifyToken, noteRouter);
app.use("/category", verifyToken, categoryRouter);
app.use("/categorynote", verifyToken, categoryNoteRouter);

app.listen(PORT, () => {
  console.log(`servidor iniciado en el puerto: ${PORT}`);
});
