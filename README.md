# Micro-servico com Node.js

- Utilizando Kafka;
- Utilizando Node.js

## Fluxo da Aplicação

- API principal (Station);
- Geração de Certificado;

## Fluxo 
- API principal envia uma mensagem pro serviço de certificado para gerar o certificado;
- Micro-servico de certificado devolve uma resposta (síncrona/assincrona);

Se conseguir síncrona/assíncrona:

- Receber uma resposta assíncrona de quando o email com o certificado foi enviado;

## O que sabemos?

- REST (Problema latencia)
- Redis / RabbitMQ / **Kafka**;

- Empresas que usam Nubank, Uber, Paypal, Netflix

## O que podemos estudar

- Pegar o retorno do consumer com o producer
- Consumer demorando para subir
- Frameworks especificos para microservices (Molecular / Nest.js)
- _expectResponse_ (Algo assim).

## Getting started

1. Clone this repository;
2. Move to the appropriate directory;<br />
3. Run `yarn` to install dependencies.<br />
4. Run `yarn start`.