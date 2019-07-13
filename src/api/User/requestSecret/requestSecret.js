import { generateSecret } from '../../../lib/utils';
import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    requestSecret: async (_, args) => {
      const { email } = args;
      const loginSecret = generateSecret();
      try {
        await prisma.updateUser({ data: { loginSecret }, where: { email } });
        return true;
      } catch (error) {
        throw new Error(error);
      }
    }
  }
};
