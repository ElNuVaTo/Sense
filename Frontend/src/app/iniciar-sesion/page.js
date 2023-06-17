import IniciarSesion from "@/components/usuario/iniciar-sesion/IniciarSesion"
import { UseStateProvider } from "@/components/usuario/iniciar-sesion/UseState"


const PageIniciar = () => {
  return (
    <>
    <UseStateProvider>
      <IniciarSesion/>
    </UseStateProvider>
    </>
  )
}

export default PageIniciar