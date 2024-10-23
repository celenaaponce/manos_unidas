"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import emailjs from '@emailjs/browser';
export default function Page() {
  const [noName, setNoName] = useState(false);
  const [noLast, setNoLast] = useState(false);
  const [noState, setNoState] = useState(false);
  const [noContact, setNoContact] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submit, setSubmit] = useState(false);
  const router = useRouter();


  async function onSubmit(event) {
    setSubmit(true);
    event.preventDefault();
    const formElement = event.target;
    const formData = new FormData(formElement);
    const acquisitionChannel = formData.getAll("acquisition");

    const input_data = Object.fromEntries(formData.entries());
    input_data.acquisition = acquisitionChannel;
    if (input_data["first-name"] == "") {
      setNoName(true);
      return;
    }
    if (input_data["last-name"] == "") {
      setNoLast(true);
      return;
    }
    if (input_data["address"] == "") {
      setNoState(true);
      return;
    }

    if (input_data["email"] == "" && input_data["phone"] == "") {
      setNoContact(true);
      return;
    }
    try {
      emailjs.sendForm('service_z30loik', 'template_bt0wb1r', formElement, 
      'K9S957DKRD9NM3VeM')
        .then((result) => {
            console.log('resultemail', result);
        }, (error) => {
            console.log('resultemail', error);
        });
      const response = await fetch("/otros/medico/api/submit", {
        method: "POST",
        body: JSON.stringify(input_data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response)

      if (response.ok) {
        setSuccess(true); // Show success message
        setTimeout(() => {
          router.push("/"); // Redirect to home after 2 seconds
        }, 2000);
      } else {
        console.error("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>Solicitud de ayuda para el seguro médico</h2>
      <h2>La inscripción para el seguro médico comienza el 1 de noviembre y se cierra el 15 de diciembre.</h2>
      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">Nombre</label>
          <input type="text" id="first-name" name="first-name" />
          <div className="control-error">
            {noName && <p>Necesita entrar un nombre</p>}
          </div>
        </div>

        <div className="control">
          <label htmlFor="last-name">Apellido</label>
          <input type="text" id="last-name" name="last-name" />
          <div className="control-error">
            {noLast && <p>Necesita entrar un apellido</p>}
          </div>
        </div>
      </div>
      <div className="control">
        <label htmlFor="address">¿En cual estado vive? 🏠</label>
        <input type="text" id="address" name="address" />
        <div className="control-error">
          {noState && <p>Necesita un estado</p>}
        </div>
      </div>
      <hr />

      <div className="control">
        <label htmlFor="email">Correo Electrónico ✉️</label>
        <input id="email" type="email" name="email" />
      </div>

      <div className="control">
        <label htmlFor="phone">Número de Teléfono 📞</label>
        <input id="phone" type="phone" name="phone" minLength={10} />
        <div className="control-error">
          {noContact && (
            <p>Necesita un correo electrónico o un número de teléfono</p>
          )}
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">¿Tiene seguro medico ahora? ⚕️</label>
        <select id="dhh" name="dhh">
          <option value="yes">Sí 👍🏽</option>
          <option value="no">No 👎🏽</option>
        </select>
      </div>

      <fieldset>
        <legend>¿Cómo debemos contactar usted?</legend>
        <div className="control">
          <input type="checkbox" id="text" name="acquisition" value="text" />
          <label htmlFor="text">Texto 💬</label>
        </div>

        <div className="control">
          <input type="checkbox" id="phone" name="acquisition" value="phone" />
          <label htmlFor="phone">Llamada 📞</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="correo"
            name="acquisition"
            value="correo"
          />
          <label htmlFor="correo">Correo Electrónico ✉️</label>
        </div>
      </fieldset>

      <p className="form-actions">
        <button type="submit" className="button">
          Registrar
        </button>
      </p>
      {/* Success Message */}
      {success && (
        <p className="success-message">🎉🎉¡Registro exitoso! Redirigiendo...🎉🎉</p>
      )}
    </form>
  );
}