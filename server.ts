import { createServer } from 'node:http';

type invoivestatus = 'pending' | 'paid';

interface customer {
    id: number;
    name: string;
    email: string;
}

interface invoice {
    id: Number;
    amount: Number;
    status: invoivestatus;
    issuedate: string;
    duedate: string;
    customer: customer;
}

const invoices: invoice[] = [{
    id: 1,
    amount: 125000,
    status: 'pending',
    issuedate: '10-09-2026',
    duedate: '10-12-2026',
    customer: {
        id: 7,
        name: 'construtora meridiano',
        email: 'contato@meridiano.com'
    }
}, {
    id: 2,
    amount: 125000,
    status: 'pending',
    issuedate: '10-09-2026',
    duedate: '10-12-2026',
    customer: {
        id: 7,
        name: 'construtora meridiano',
        email: 'contato@meridiano.com'
    }
}];

createServer(function (request, response) {
    if (request.url === '/api/health') {
        response.writeHead(
            200,
            { 'content-type': 'application/json' }
        );
        response.end(JSON.stringify({ status: 'ok' }));
        return;
    }

    if (request.url === '/api/invoices') {
        response.writeHead(
            200,
            { 'content-type': 'application/json' }
        );
        response.end(JSON.stringify(invoices));
        return;
    }

    response.writeHead(
        404,
        { 'content-type': 'aplication/json' }
    );
    response.end(JSON.stringify({ message: 'recurso não encontrado' }))
}).listen(3000);