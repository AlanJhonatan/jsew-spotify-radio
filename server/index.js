import config from './config.js';
import server from './server.js';
import { logger } from './util.js';

server.listen(config.port)
  .on('listening', () => logger.info('🔥 Server is running at http://localhost:%d', config.port));
