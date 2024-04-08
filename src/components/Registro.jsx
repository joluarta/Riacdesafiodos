import { useState } from "react";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import Alert from "./Alerts";

const Registro = () => {
    const [alert, setAlert] = useState({ error:"", msg:"", color:""});
return(
<>
<div className="container border-light-subtle rounded-5 bg-with p-5">
<h1 className="fs-1">Crea Una Cuenta</h1>
<div className="d-flex gap-3 justify-content-center my-3">
    <SocialButton icon="fa-brands fa-facebook" />
    <SocialButton icon="fa-brands fa-github" />
    <SocialButton icon="fa-brands fa-linkedin-in" />
</div>
<p>Usa tu email para registrarte</p>
<Formulario setAlert={setAlert}/>
{alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
</div>
</>
);
};
export default Registro;
 