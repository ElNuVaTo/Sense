import Registrarse from "@/components/usuario/registrarse/Registrarse";
import { UseStateProvider } from "@/components/usuario/registrarse/UseState";

const PageRegistrarse = () => {
  return (
    <>
      <UseStateProvider>
        <Registrarse />
      </UseStateProvider>
    </>
  );
};

export default PageRegistrarse;
