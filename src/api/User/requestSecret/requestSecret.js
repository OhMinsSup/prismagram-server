import { generateSecret } from '../../../lib/utils';
import { prisma } from '../../../../generated/prisma-client';
import { sendSecretMail } from '../../../lib/sendMail';

export default {
  Mutation: {
    requestSecret: async (_, args, { request }) => {
      console.log(request);
      const { email } = args;
      const loginSecret = generateSecret();
      try {
        throw Error();
        await sendSecretMail(email, loginSecret);
        await prisma.updateUser({ data: { loginSecret }, where: { email } });
        return true;
      } catch (error) {
        throw new Error(error);
      }
    }
  }
};
