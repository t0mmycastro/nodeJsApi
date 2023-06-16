import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CustomerEntity } from "../../customers/entities/customer.entity";
import { PurchaseProductEntity } from "./purchase-product.entity";


@Entity({name: "purchase"}) // esto es necesario para crear la entidad
export class PurchaseEntity extends BaseEntity {

    @Column() // columna
    status!: string;

    @Column()
    paymentMethod!: string;

    // muchas compras a 1 customer
    @ManyToOne(() => CustomerEntity, (customer) => customer.purchases) //en la ultima parte es donde buscamos la relacion que queremos tener con la otra entidad, o sea con purchases.
    @JoinColumn({name: "customer"})
    customer!: CustomerEntity

    @ManyToOne(() => PurchaseProductEntity, (purchaseProducts) => purchaseProducts.purchase)
    purchaseProduct!: PurchaseProductEntity[]
}