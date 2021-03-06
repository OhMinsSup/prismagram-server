import './env';
import './lib/passport';
import { isAuthenticated } from './lib/middlewares';
import { authenticateJwt } from './lib/passport';
import { GraphQLServer } from 'graphql-yoga';
import logger from 'morgan';
import schema from './schema';

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request, isAuthenticated })
});

server.express.use(logger('dev'));
server.express.use(authenticateJwt);

server.start({ port: PORT }, () => console.log(`Server running on port http://localhost:${PORT}`));
