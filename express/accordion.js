const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
app.use(cors());

const db = [
    {
        index: '0',
        activeElements: [
            Array.from({length: 2}, () => false),
            Array.from({length: 2}, () => true)
        ],
        elementsData: [
            [
                {
                    title: "text",
                    info: "info"
                },
                {
                    title: "text1",
                    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                        " Proin augue ligula, mattis sit amet ipsum sed, commodo porta ante. Praesent eu elit ut neque ullamcorper ornare. " +
                        "Curabitur congue ultrices tempor. Ut non dignissim mauris, at ultrices enim. Curabitur pellentesque lacus eget velit fringilla, " +
                        "ut venenatis leo mattis. Quisque ullamcorper lectus rutrum felis aliquam, eget pulvinar libero maximus. " +
                        "Curabitur blandit metus ornare venenatis mollis. Sed malesuada auctor massa, non vestibulum nisi tincidunt quis."
                }
            ],
            [
                {
                    title: "text2",
                    info: "info2"
                },
                {
                    title: "<a href='https://en.wikipedia.org/wiki/Quokka'>quokka</a>",
                    info: "<img src='https://live-production.wcms.abc-cdn.net.au/119e113a1102ce984df0b3d77972931b?impolicy=wcms_crop_resize&cropH=808&cropW=1080&xPos=0&yPos=401&width=862&height=647' alt='a picture of a cute quokka'>"
                },
            ]
        ]
    },
    {
        index: '1',
        activeElements: [
            Array.from({length: 1}, () => true),
        ],
        elementsData: [
            [
                {
                    title: "quokka",
                    info: "The quokka (/ˈkwɒkə/) (Setonix brachyurus)[4] is a small macropod" +
                        " about the size of a domestic cat. It is the only member of the genus Setonix." +
                        " Like other marsupials in the macropod family (such as kangaroos and wallabies)," +
                        " the quokka is herbivorous and mainly nocturnal.[5]"
                }
            ],
        ]
    }
]

app.get('/acc', (req, res) => {
    if (req.query && req.query.id) {
        return res.json(db.filter(item => (item.index === req.query.id)))
    }
    return res.json(db)
})

app.get('/acc/:id', (req, res) => {
    return res.json(db.find(item => (item.index === req.params.id)))
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})
