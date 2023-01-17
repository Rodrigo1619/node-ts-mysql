import express, {Application} from 'express';

import userRoutes from '../routes/usuario.route'

class Server{

    private app: Application; //app es de tipo express.Application pero de esta forma se ve mucho mejor
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000'; //sino encuentra nuestra variable de entonrno haremos que siempre use el puerto 8000
        
        //definimos las rutas
        this.routes();
    }

    routes(){
        this.app.use(this.apiPaths.usuarios, userRoutes )
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        })
    }
}

export default Server;