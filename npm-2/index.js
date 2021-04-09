try {
    console.log(`require.resolve('parseUrl'): ${require.resolve('parseUrl')}`)
} catch (e) {
    console.error(`💥 ${e.message}`)
}

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
