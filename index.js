const path = require('path')
const fs = require('fs')
const http = require('http')
let router = require('./routes');

const server = http.createServer((request, response) => {
    if (request.url === '/home'){
        let filepath = path.join(__dirname, 'public', 'index.html')
        fs.readFile(filepath, 'utf8', (err, data) => {
               const path = require('path') 
               response.writeHead(200, {"content-type": "text/html"})
                response.end(data)
        })
    }
})

const port = 5000

server.listen(port, () => {

console.log(`server is running on port ${port}`)
})