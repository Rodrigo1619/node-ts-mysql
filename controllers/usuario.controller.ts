import { Request, Response } from "express";
import Usuario from '../models/usuario.model';


export const getUsuarios = async(req: Request, res: Response)=>{
    const usuarios = await Usuario.findAll();
    res.json({usuarios});
}


export const getUsuario = async(req: Request, res: Response)=>{

    const {id} = req.params;

    const usuario = await Usuario.findByPk(id);

    //verificando que el usuario exista y no nos regrese un simple null
    if(usuario){
        res.json({usuario})
    }else{
        res.status(400).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }
}

export const postUsuario = async(req: Request, res: Response)=>{
    const {body} = req;

    try {

        const existeEmail = await Usuario.findOne({
            where:{
                email:body.email
            }
        });

        if(existeEmail){
            return res.status(400).json({
                msg: `Ya existe un usuario con el email ${body.email}`
            });
        }

        const usuario = await Usuario.create(body);
        res.json({usuario})
        
    } catch (error:any) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}
export const putUsuario = async(req: Request, res: Response)=>{
    const {id} = req.params;
    const {body} = req
    try {
        const usuario = await Usuario.findByPk(id);
        if(!usuario){
            return res.status(404).json({
                msg: `No se encontro un usuario con el id ${id}`
            })
        }

        await usuario.update(body);

        res.json({usuario});

        
    } catch (error:any) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const deleteUsuario = async(req: Request, res: Response)=>{
    const {id} = req.params;

    const usuario = await Usuario.findByPk(id);
        if(!usuario){
            return res.status(404).json({
                msg: `No se encontro un usuario con el id ${id}`
            })
        }
    
        //await usuario.destroy(); //esto borra al usuario de la base de datos, depende nuestro escenario no es muy recomendable

        await usuario.update({estado:false}) //nos pone nuestro estado de 1 a 0

    res.json({
        msg: 'Usuario Borrado',
        usuario
    })
}