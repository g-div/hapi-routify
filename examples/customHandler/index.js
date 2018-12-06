const register = (server, options) => {
	const handler = (route, options) => (request, h) => ({message: options.message});
	server.decorate('handler', 'custom', handler);
};

exports.plugin = {
  name: 'customHandler',
	version: '0.0.1',
	register
};

