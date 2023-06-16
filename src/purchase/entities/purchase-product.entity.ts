import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { PurchaseEntity } from "./purchase.entity";
import { ProductEntity } from "../../product/entities/product.entity";


@Entity({name: "purchases_products"}) // esto es necesario para crear la entidad
export class PurchaseProductEntity extends BaseEntity {

    @Column() // columna
    quantityProduct!: number;

    @Column()
    totalPrice!: number;

    @Column()
    price!: number;

    // keys y entidades que vamos a necesitar
    @ManyToOne(() => PurchaseEntity, (purchase) => purchase.purchaseProduct)
    @JoinColumn({name: "purchase_id"})
    purchase!: PurchaseEntity

    @ManyToOne(() => ProductEntity, (product) => product.purchaseProduct)
    @JoinColumn({name: "product_id"})
    product!: ProductEntity
    
}