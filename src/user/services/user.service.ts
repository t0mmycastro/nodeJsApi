import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { UserDTO } from "../dto/user.dto";
import { UserEntity } from "../entities/user.entity";

export class UserServices extends BaseService<UserEntity> {
  constructor() {
    super(UserEntity);
  }

  //agregaremos los métodos a través de funciones

  async findAllUser(): Promise<UserEntity[]> {
    // Nos va a responser un array de todos los usuarios
    return (await this.execRepository).find();
  }
  async findUserById(id: string): Promise<UserEntity | null> {
    // BUSQUEDA DE USUARIO POR ID
    return (await this.execRepository).findOneBy({ id });
  }
  async createUser(body: UserDTO): Promise<UserEntity> {
    return (await this.execRepository).save(body); // para crear user
  }
  async deleteUser(id: string): Promise<DeleteResult> {
    // para delete
    return (await this.execRepository).delete({ id });
  }
  // el USERDTO lo usamos para tipar nomas
  async updateUser(id: string, infoUpdate: UserDTO): Promise<UpdateResult> {
    // update
    return (await this.execRepository).update(id, infoUpdate);
  }
}
