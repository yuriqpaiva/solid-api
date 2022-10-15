import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("Usuário não existe");
    }

    const userTurnedIntoAdmin = this.usersRepository.turnAdmin(user);

    return userTurnedIntoAdmin;
  }
}

export { TurnUserAdminUseCase };
