import express from "express"
import "dotenv/config"


const app = express();



app.get("/", (_req, res) => {
    res.send("Server is up and running")
})


if (process.env.NODE_ENV === "development"){
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT || 3000}`)
    })
};

export default app;