import React from "react";
import { useForm } from "react-hook-form";

export default function ParametrosEntrada() {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => console.log(data);

  const maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(
        0,
        object.target.maxLength
      );
    }
  };

  const cancelCourse = () => {
    document.getElementById("form").reset();
  };

  const postForm = (data) => {
    console.log(data);
    let data2 = JSON.stringify(data);
    console.log(data2);
    return fetch("http://testasd123.somee.com/api/LabelingWindows", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data2,
    }).then((response) => console.log(response));
  };

  return (
    <form id="form" onSubmit={handleSubmit(postForm)}>
      <div className="formDiv">
        <div className="celdasForm">
          <label htmlFor="ancho">Ancho</label>
          <input
            placeholder=" mm"
            type="number"
            name="ancho"
            id="ancho"
            ref={register}
          />
        </div>
        <div className="celdasForm">
          <label htmlFor="alto">Alto</label>
          <input
            placeholder=" mm"
            type="number"
            name="alto"
            id="alto"
            ref={register}
          />
        </div>
        <div className="celdasForm">
          <label htmlFor="codigoMarco">CODIGO DE MARCO</label>
          <select id="codigoMarco" name="codigoMarco" ref={register}>
            <option value="554002">554002</option>
            <option value="500013">500013</option>
            <option value="500025">500025</option>
            <option value="500343">500343</option>
            <option value="500086">500086</option>
            <option value="500386">500386</option>
            <option value="500715">500715</option>
            <option value="500718">500718</option>
          </select>
        </div>
        <div className="celdasForm">
          <label htmlFor="codigoHoja">CODIGO DE HOJA</label>
          <select id="codigoHoja" name="codigoHoja" ref={register}>
            <option value="541170">541170</option>
            <option value="541150">541150</option>
            <option value="554012">554012</option>
            <option value="554281">554281</option>
            <option value="541130">541130</option>
            <option value="500033">500033</option>
            <option value="501403">501403</option>
            <option value="500486">500486</option>
            <option value="500719">500719</option>
            <option value="sinHoja">Sin Hoja</option>
          </select>
        </div>
        <div className="celdasForm">
          <label htmlFor="codigoTercerPerfil">
            CODIGO TERCER PERFIL (TRAVESAÑO)
          </label>
          <select
            id="codigoTercerPerfil"
            name="codigoTercerPerfil"
            ref={register}
          >
            <option value="541170">541170</option>
            <option value="554022">554022</option>
            <option value="sinPoste">Sin Poste</option>
          </select>
        </div>
        <div className="celdasForm">
          <label htmlFor="cantidadHojas">Cantidad Hojas</label>
          <input
            type="number"
            name="cantidadHojas"
            id="cantidadHojas"
            ref={register}
          />
        </div>
        <div className="celdasForm">
          <label htmlFor="acabadoSuperficial">Acabado Superficial</label>
          <select
            id="acabadoSuperficial"
            name="acabadoSuperficial"
            ref={register}
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>
        <div className="celdasForm">
          <label htmlFor="codigoIdVidrio">Codigo Id Vidrio</label>
          <input
            type="number"
            maxLength={4}
            onInput={maxLengthCheck}
            name="codigoIdVidrio"
            id="codigoIdVidrio"
            ref={register}
          />
        </div>
        <div className="celdasForm">
          <label htmlFor="tipoEspaciador">Tipo Espaciador</label>
          <select id="tipoEspaciador" name="tipoEspaciador" ref={register}>
            <option value="metalicoConvencional">Metálico convencional</option>
            <option value="termicamenteMejorado">Térmicamente mejorado</option>
          </select>
        </div>
        <div className="celdasForm">
          <label htmlFor="provincia">Provincia</label>
          <select id="provincia" name="provincia" ref={register}>
            <option value="001">Capital Federal</option>
            <option value="002">Buenos Aires</option>
            <option value="003">Catamarca</option>
            <option value="004">Córdoba</option>
            <option value="005">Corrientes</option>
            <option value="006">Chaco</option>
            <option value="007">Chubut</option>
            <option value="008">Entre Ríos</option>
            <option value="009">Formosa</option>
            <option value="010">Jujuy</option>
            <option value="011">La Pampa</option>
            <option value="012">La Rioja</option>
            <option value="013">Mendoza</option>
            <option value="014">Misiones</option>
            <option value="015">Neuquén</option>
            <option value="016">Río Negro</option>
            <option value="017">Salta</option>
            <option value="018">San Juan</option>
            <option value="019">San Luis</option>
            <option value="020">Santa Cruz</option>
            <option value="021">Santa Fe</option>
            <option value="022">Santiago del Estero</option>
            <option value="023">Tucumán</option>
            <option value="024">
              Tierra del Fuego, Antártida e Isla del Atlántico Sur
            </option>
          </select>
        </div>
        <br />
      </div>
      <div className="botonesDiv">
        <button type="submit">ACEPTAR</button>
        <button onClick={cancelCourse}>LIMPIAR</button>
      </div>
    </form>
  );
}

{
  /* 
  
 <input name="exampleRequired" ref={register({ required: true })} />
  {errors.exampleRequired && <span>This field is required</span>} 
  
  

<option defaultValue="coconut">Coconut</option>


	 
 - el atributo que coincide con htmlFor es el ID
 - el nombre del parametro que se pasa en el objeto es el NAME
	  */
}
