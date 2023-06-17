import { verify } from "jsonwebtoken";

const autenticacionMiddleware = (req, res, next) => {
  const token = req.cookies.usuario;
  if (!token) {
    return res.status(401).json({ mensaje: "Acceso no autorizado" });
  }

  const usuario = verify(token, "Secreto", (err) => {
    if (err) {
      console.log(err);
      return res
        .status(401)
        .json({ mensaje: "Acceso no autorizado por token" });
    } else {
      req.usuario = usuario;
      next();
    }
  });
};

export default autenticacionMiddleware;
