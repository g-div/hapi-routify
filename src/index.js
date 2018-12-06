const register = (server, options) => {
  options.routes = options.routes || [];

  server.route(options.routes);
};

exports.plugin = {
  name: 'hapi-routify',
  version: '0.0.1',
  register,
  multiple: true
};
