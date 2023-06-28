const {
  usuarioConectado,
  usuarioDesconectado
} = require("../controllers/sockets");
const { comprobarJWT } = require("../helpers/jwt");

class Sockets {
  constructor(io) {
    this.io = io;

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", async (socket) => {
      const [valido, uid] = comprobarJWT(socket.handshake.query["x-token"]);
      if (!valido) {
        console.log("socket no identificado");
        return socket.disconnect();
      }
      await usuarioConectado(uid);

      socket.on("disconnect", async (uid) => {
        await usuarioDesconectado(uid);
      });
    });
  }
}

module.exports = Sockets;
