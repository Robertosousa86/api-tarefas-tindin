import { IUsers } from '../types/IUsers';
import { connect } from '../libs/mongodb';
import { User } from '../models/userModel';

const create = async (user: IUsers) => {
  await connect();

  if (!user.email) throw new Error('Informe o campo email!');

  if (!user.password) throw new Error('Informe o campo password!');

  await User.create(user);

  return true;
};

export { create };
