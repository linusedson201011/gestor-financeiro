import { createServer } from 'node:http';

createServer(function (request, response) {
    if (request.url === '/api/health'){
        response.writeHead(
            200,
            {'content-type': 'application/json' }
        );
        response.end(JSON.stringify({ status: 'ok'}));
        return;
    }


 Response.writeHead(
    404,
    {'content-type': 'aplication/json'}
 );
 Response.end(JSON.stringify({ message: 'recurso não encontrado'}))
}).lisen(3000);
