import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CustomerEntity } from "../../customers/entities/customer.entity";
import { CategoryEntity } from "../../category/entities/category.entity";
import { PurchaseProductEntity } from "../../purchase/entities/purchase-product.entity";


@Entity({name: "product"}) // esto es necesario para crear la entidad
export class ProductEntity extends BaseEntity {

    @Column() // columna
    productName!: string;

    @Column()
    description!: string;

    @Column()
    price!: number;

    // muchas compras a 1 customer
    @ManyToOne(() => CategoryEntity, (category) => category.products) //en la ultima parte es donde buscamos la relacion que queremos tener con la otra entidad, o sea con purchases.
    @JoinColumn({name: "category_id"})
    category!: CategoryEntity;

    @OneToMany(() => PurchaseProductEntity, (purchaseProduct) => purchaseProduct.product)
    purchaseProduct!: PurchaseProductEntity[]
}