/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  env: {
    CREAR_CUENTA: "http://localhost:3001/usuario/crear",
    INICIAR_SESION: "http://localhost:3001/usuario/iniciar-sesion",
  },
};

module.exports = nextConfig;
