// cosas que necesitamos como entidad base: id,update_ad,created_ad, todo tiene que tener una id, nos muestre cuando se creo y cuando se actualizo

import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

export abstract class BaseEntity {
  @PrimaryGeneratedColumn("uuid") // trabajamos con uuid
  id!: string;

  @CreateDateColumn({
    name: "created_ad",
    type: "timestamp", // esto nos trae, años, dias, mes, hora,  etc
  })
  createdAt!: Date;

  @UpdateDateColumn({
    name: "updated_ad",
    type: "timestamp", // esto nos trae, años, dias, mes, hora,  etc
  })
  updatedAt!: Date;
}
