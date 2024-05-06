import express from "express"
import path from "path"
const app = express()
const __dirname = path.resolve()
const PORT = process.env.PORT || 5000
app.use(express.static(path.join(__dirname, "frontend", "dist")))

app.get("/test", (req, res) => {
    res.status(200).send("reached test")
})
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})