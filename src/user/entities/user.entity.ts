import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CustomerEntity } from "../../customers/entities/customer.entity";
import { RoleType } from "../dto/user.dto";


@Entity({name: "user"}) // esto es necesario para crear la entidad
export class UserEntity extends BaseEntity {

    @Column({default: ""})
    name!: string;
  
    @Column()
    lastname!: string;
  
    @Column()
    username!: string;
  
    @Column()
    email!: string;
  
    @Column({ select: false })
    password!: string;
  
    @Column()
    city!: string;
  
    @Column()
    province!: string;

    @Column({type: "enum", enum: RoleType, nullable: false})
    role!: RoleType;

    @Column()
    state!: string;

    @OneToOne(() => CustomerEntity, (customer) => customer.user)
    customer!: CustomerEntity; // la relacion es de customer con user
}