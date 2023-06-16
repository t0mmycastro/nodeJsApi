import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { UserEntity } from "../../user/entities/user.entity";
import { PurchaseEntity } from "../../purchase/entities/purchase.entity";


@Entity({name: "customer"}) // esto es necesario para crear la entidad
export class CustomerEntity extends BaseEntity {


    @Column() // columna
    address!: string;

    @Column()
    dni!: number;

    // hay que trabajar de manera bi direccional, como este es una relacion 1:1, vamos a llamar a un decorador OneToONE

    @OneToOne(() => UserEntity, (user) => user.customer) // acá ponemos la otra entidad que queremos que se relacione
    @JoinColumn({name: "user_id"}) // Además de los otros campos, address y dni, nos creará este campo es un forenky, una ID
    user!: UserEntity // creamos el campo user


    @OneToMany(() => PurchaseEntity, (purchase) => purchase.customer)
    purchases!: PurchaseEntity[] //  va a ser un array.
}