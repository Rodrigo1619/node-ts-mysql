import express, {Application} from 'express';
import userRoutes from '../routes/usuario.route';
import cors from 'cors';
import db from '../db/connection';

class Server{

    private app: Application; //app es de tipo express.Application pero de esta forma se ve mucho mejor
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000'; //sino encuentra nuestra variable de entonrno haremos que siempre use el puerto 8000
        
        //Metodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection(){
        try {
            await db.authenticate();
            console.log('Database online')
        } catch (error:any) {
            throw new Error(error)
        }
    }

    middlewares(){
        //configurando cors
        this.app.use(cors());

        //lectura del body, parseando el body
        this.app.use(express.json());

        //carpeta publica
        this.app.use(express.static('public')); //para poder servir el sitio web de esa carpeta
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