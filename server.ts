import express, { response } from 'express';
import { request } from 'node:http';

const app = express();

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

app.get('/api/health', (request, response) => {
    response.status(200).json({status: 'ok'});
});

app.get('/api/invoices', (request, response) => {
    response.status(200).json({invoices});
});

app.use((request, response) => {
    response.status(404).json({ error: { 
        status: 404,
        message: 'recurso não encontrado.'
        }})
});

app.listen(3000);