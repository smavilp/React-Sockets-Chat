const Mensaje = require("../models/mensaje");

const obtenerChat = async (req, res) => {
  try {
    const miId = req.uid;
    const mensajesDe = req.params.de;

    const lastMensajes = await Mensaje.find({
      $or: [
        { de: miId, para: mensajesDe },
        { de: mensajesDe, para: miId }
      ]
    })
      .sort({ createdAt: "desc" })
      .limit(30);

    res.json({
      ok: true,
      mensajes: lastMensajes
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = obtenerChat;
