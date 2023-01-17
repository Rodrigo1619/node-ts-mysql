import express, {Application} from 'express';

class Server{

    private app: Application; //app es de tipo express.Application pero de esta forma se ve mucho mejor
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000'; //sino encuentra nuestra variable de entonrno haremos que siempre use el puerto 8000
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        })
    }
}

export default Server;