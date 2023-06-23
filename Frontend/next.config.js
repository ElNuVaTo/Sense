/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  env: {
    VER_TODAS_PUBLICACIONES: "http://localhost:3001/publicaciones/get-all",
    PUBLICAR_CONTENIDO: "http://localhost:3001/publicaciones/publicar",

    DAR_LIKE: "http://localhost:3001/publicaciones/me-gusta/:id",
    QUITAR_LIKE: "http://localhost:3001/publicaciones/no-me-gusta/:id",

    CERRAR_CUENTA: "http://localhost:3001/usuario/cerrar-sesion",
    ACTUALIZAR_DATOS: "http://localhost:3001/usuario/cambiar-datos",
    CREAR_CUENTA: "http://localhost:3001/usuario/crear",
    INICIAR_SESION: "http://localhost:3001/usuario/iniciar-sesion",
  },
};

module.exports = nextConfig;
