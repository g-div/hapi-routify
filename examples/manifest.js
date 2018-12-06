module.exports = {
  "server": {
    "port": 8000,
  },
  "register": {
    "plugins": [
      {
        "plugin": "./",
        "options": {
          "routes": [{
            "method": "GET",
            "path": "/",
            "handler": (request, reply) => ({hello: "world"})
          }]
        },
      },
      "blipp"
    ]
  }
};
