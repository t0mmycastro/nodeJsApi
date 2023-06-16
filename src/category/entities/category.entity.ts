import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { PurchaseEntity } from "../../purchase/entities/purchase.entity";
import { ProductEntity } from "../../product/entities/product.entity";


@Entity({name: "category"}) // esto es necesario para crear la entidad
export class CategoryEntity extends BaseEntity {


    @Column() // columna
    categoryName!: string;

    @OneToMany(() => ProductEntity, (product) => product.category)
    products!: CategoryEntity //  va a ser un array.
}