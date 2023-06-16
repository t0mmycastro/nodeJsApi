import { Request, Response } from "express";
import { UserServices } from "../services/user.service";

export class UserController {
  constructor(
    private readonly userService: UserServices = new UserServices() // creamos una instancia de userservices
  ) {}
  async getUsers(req: Request, res: Response) {
    try {
      const data = await this.userService.findAllUser(); // llamamos a todos los usuarios
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }
  async getUsersById(req: Request, res: Response) {
    const { id } = req.params; // sacamos el id de los parametros
    try {
      const data = await this.userService.findUserById(id); // llamamos a todos los usuarios
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const data = await this.userService.createUser(req.body); // llamamos a todos los usuarios
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }

  async updateUser(req: Request, res: Response) {
    const { id } = req.params; // sacamos el id de los parametros
    try {
      const data = await this.userService.updateUser(id, req.body); // llamamos a todos los usuarios
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params; // sacamos el id de los parametros
    try {
      const data = await this.userService.deleteUser(id); // llamamos a todos los usuarios
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }
}
