import express from "express"
import cors from "cors"
import { existsSync } from "fs"


const app = express()
const port = 3000

app.use(cors()).use(express.json())

const db = {}

const maxRatingValue = 6;

const isValidRating = json => typeof json.id === "number"
    && typeof json.rating === "number"
    && json.rating >= 0
    && json.rating <= maxRatingValue
    && tryGetPathFromId(json.rating)

const tryGetPathFromId = id => {
    let path = `./assets/${+id + 1}.jpg`

    return existsSync(path) ? path : null
}

app.get("/image/:id", (request, response) => {
    let path = tryGetPathFromId(request.params.id)

    return path
        ? response.sendFile(path, { root: "." })
        : response.sendStatus(404)
})

app.get("/rating/:id", (request, response) => {
    let id = +request.params.id

    return response.json({
        id: id,
        rating: db[id] || 0
    })
})

app.post("/rating/:id", (request, response) => {
    let json = {
        id: +request.params.id,
        rating: +request.query.rating
    }

    if (!isValidRating(json))
        return response.sendStatus(400)

    db[json.id] = json.rating

    return response.sendStatus(200)
})

app.get("/healtcheck", (_, response) => response.sendStatus(200))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
