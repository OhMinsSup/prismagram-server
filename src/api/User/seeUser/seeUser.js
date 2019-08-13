import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeUser: (_, args, { request }) => {
      console.log(request);

      const { id } = args;
      return prisma.user({ id });
    }
  }
};
