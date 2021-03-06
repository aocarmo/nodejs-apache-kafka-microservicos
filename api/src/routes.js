import { Router } from "express";
import { CompressionTypes } from "kafkajs";

const routes = new Router();

routes.post('/certifications', async (req,res)=>{
    const message = {
        user: { id: 1, name: 'Alex Carmo' },
        course: 'Kafka com Node.js',
        grade: 5,
    }
    
    //Chamar micro serviço
    await req.producer.send({
        topic: 'issue-certificate',
        compression: CompressionTypes.GZIP,
        messages: [
            {
                value: JSON.stringify(message),
            },
        ],
    })

    return res.json({
        ok:true
    });

});
export default routes;