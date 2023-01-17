# Pasos a seguir
## 1. Sino se tiene typescript se instala con **npm install -g typescript**
## 2. Iniciamos el proyecto con **npm init -y**
## 3. Iniciamos un proyecto de ts con **tsc --init**
Si estas en windows es mejor hacerlo por cmd y no por powershell debido a unos pedillos de los permisos
## 4.Configuracion de tsconfig.json
Para ver que configuracion se usara, que hueva escribir todo lo que hay que descomentar ahi ves el archivo xd
## 5.Ejecutar tsc
**OJO:Para no tener problemas al ejecutar tsc, se crea el app.ts para que el compliador este feli y no nos de el error ts18003**
## 6. tslint
Lo instalamos con el **npm i tslint --save-dev** lo instalamos asi debido a que es una dependencia de desarrollo nada mas
## 7.Instalar typescript
Se vuelve a instalar ts de manera local por asi decirse que solo es para una dependencia de desarrollo, **npm i typescript --save-dev**
## 8. Archivo tslint.json
Para poder generar este archivo, abrimos la powershell de windows, no el cmd y ejecutamos **./node_modules/.bin/tslint --init**
Si nos da un error abrimos una powershell aparte y ejecutamos
**Set-ExecutionPolicy unrestricted** y de ahi solo ejecutamos el script anterior y ya se debe de generar el tslint.json sin ningun problema

## 9. tslint.json => rules
solamente agregamos esta regla **"no-console": false** para que a la hora de hacer un sonsole.log no nos marque un error.



