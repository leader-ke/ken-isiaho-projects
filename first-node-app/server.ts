// The below commented is a Node.js server runtime implementation
/*import * as http from 'http' 

const hostname: string = '127.0.0.1'
const port: number = 3000

const server: http.Server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n')
  }
)

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})*/

// The below is a Bun server runtime implementation
const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("Hello World\n", {
      headers: { "Content-Type": "text/plain" },
    });
  },
});

console.log(`Server running on http://localhost:${server.port}`);
