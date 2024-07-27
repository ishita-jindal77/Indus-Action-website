import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: "*",
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


import userRoutes from "./routes/user.routes.js"
app.use("/api/users",userRoutes)

import updateRoutes from "./routes/updateSchemes.routes.js"
app.use("/api/updates",updateRoutes)


import workerRoutes from "./routes/workers.routes.js"
app.use("/api/workers",workerRoutes)

import schemeRoutes from "./routes/scheme.routes.js"
app.use("/api/scheme",schemeRoutes)

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
      error: {
        message: err.message,
        status: err.status || 500
      }
    });
});

export {app}