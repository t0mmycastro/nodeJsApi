
// Creamos el DTO porque cada uno de los modulos, va a tener un dto para validar la informacion que va a entrar de cada entidad

import { IsDate, IsOptional, IsUUID } from "class-validator";

//middleware nos permite validar la informacion que va a entrar

export class BaseDTO {

    // class validator sirve para validar campos

    @IsUUID() // UUID
    @IsOptional() // OPCIONAL
    id!: string;

    @IsDate()
    @IsOptional()
    createdAt!: Date;
  
    @IsDate()
    @IsOptional()
    updatedAt!: Date;
}