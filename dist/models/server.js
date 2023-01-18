"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_route_1 = __importDefault(require("../routes/usuario.route"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000'; //sino encuentra nuestra variable de entonrno haremos que siempre use el puerto 8000
        //Metodos iniciales
        this.middlewares();
        this.routes();
    }
    middlewares() {
        //configurando cors
        this.app.use((0, cors_1.default)());
        //lectura del body, parseando el body
        this.app.use(express_1.default.json());
        //carpeta publica
        this.app.use(express_1.default.static('public')); //para poder servir el sitio web de esa carpeta
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_route_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map