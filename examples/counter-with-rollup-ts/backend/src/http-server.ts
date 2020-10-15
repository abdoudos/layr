import {ComponentHTTPServer} from '@liaison/component-http-server';

import {server} from './server';

const httpServer = new ComponentHTTPServer(server, {port: 3001});
httpServer.start();
