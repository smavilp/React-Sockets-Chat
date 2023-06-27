const { response } = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/usuario");
const { generarJWT } = require("../helpers/jwt");

const crearUsuario = async (req, res = response) => {
  try {
    const { email, password } = req.body;
    const existeEmail = await Usuario.findOne({ email });
    if (existeEmail) {
      return res.status(400).json({
        ok: false,
        msg: "Ha ocurrido un error"
      });
    }

    const usuario = new Usuario(req.body);

    const salt = bcrypt.genSaltSync();

    usuario.password = bcrypt.hashSync(password.toString(), salt);

    await usuario.save();

    const token = await generarJWT(usuario.id);

    res.json({
      usuario,
      token
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador"
    });
  }
};

//login
const login = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const usuarioDB = await Usuario.findOne({ email });
    if (!usuarioDB) {
      return res.status(400).json({
        ok: false,
        msg: "Ha ocurrido un error"
      });
    }

    const validPassword = bcrypt.compareSync(
      password.toString(),
      usuarioDB.password
    );
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Ha ocurrido un error"
      });
    }

    const token = await generarJWT(usuarioDB.id);

    res.json({
      ok: true,
      usuario: usuarioDB,
      token
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador"
    });
  }
};

//renewToken

const renewToken = async (req, res = response) => {
  const uid = req.uid;
  const token = await generarJWT(uid);
  const usuario = await Usuario.findById(uid);

  res.json({
    ok: true,
    usuario,
    token
  });
};

module.exports = { crearUsuario, login, renewToken };
