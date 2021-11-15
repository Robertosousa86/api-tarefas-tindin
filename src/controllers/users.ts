import { Request, Response } from 'express';
import * as user from '../services/users';
import { error } from '../libs/bindError';

const create = async (req: Request<any>, res: Response<any>) => {
  try {
    const { email, password } = req.body;

    await user.create({ email, password });

    return res
      .status(201)
      .json({ message: 'Usuário(a) criado(a) com sucesso!' });
  } catch (err: any) {
    return error(res, err);
  }
};

const list = async (req: Request<any>, res: Response<any>) => {
  try {
    const users = await user.list();
    return res.json(users);
  } catch (err: any) {
    return error(res, err);
  }
};

export { create, list };
