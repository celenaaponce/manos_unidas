// "use client";

// export default function Signup() {
//   const [noName, setNoName] = useState(false);
//   const [noLast, setNoLast] = useState(false);
//   const [noState, setNoState] = useState(false);
//   const [noEmail, setNoEmail] = useState(false);
//   function handleSubmit(event) {
//     event.preventDefault();

//     const fd = new FormData(event.target);
//     const acquisitionChannel = fd.getAll("acquisition");
//     const data = Object.fromEntries(fd.entries());
//     data.acquisition = acquisitionChannel;
//     console.log('name', data['first-name']);
//     console.log('here')
//     if (data['first-name'] == '') {
//       setNoName(true);
//       return;
//     }

//     event.target.reset();
//   }
//   return (
// <form onSubmit={handleSubmit}>
//   <h2>¡Gracias por su interes!</h2>
//   <p>Solo necesitamos un poco informacion de usted</p>
//   <div className="control-row">
//     <div className="control">
//       <label htmlFor="first-name">Nombre</label>
//       <input type="text" id="first-name" name="first-name" />
//       <div className="control-error">
//         {noName && <p>Necesita entrar un nombre</p>}
//       </div>
//     </div>

//     <div className="control">
//       <label htmlFor="last-name">Apellido</label>
//       <input type="text" id="last-name" name="last-name" required />
//     </div>
//   </div>
//   <div className="control">
//     <label htmlFor="address">¿En cual estado vive usted? 🏠</label>
//     <input type="text" id="address" name="address" required />
//   </div>
//   <hr />

//   <div className="control">
//     <label htmlFor="email">Correo Electronico ✉️</label>
//     <input id="email" type="email" name="email" required />
//   </div>

//   <div className="control">
//     <label htmlFor="phone">Número de Teléfono 📞</label>
//     <input id="phone" type="phone" name="phone" required minLength={10} />
//   </div>

//   <div className="control">
//     <label htmlFor="phone">¿Usted tiene un hijo sordo?</label>
//     <select id="role" name="role" required>
//       <option value="yes">Si 👍🏽</option>
//       <option value="no">No 👎🏽</option>
//     </select>
//   </div>

//   <fieldset>
//     <legend>¿Como debemos contactar usted?</legend>
//     <div className="control">
//       <input type="checkbox" id="text" name="acquisition" value="text" />
//       <label htmlFor="text">Texto 💬</label>
//     </div>

//     <div className="control">
//       <input type="checkbox" id="phone" name="acquisition" value="phone" />
//       <label htmlFor="phone">Llamada 📞</label>
//     </div>

//     <div className="control">
//       <input
//         type="checkbox"
//         id="correo"
//         name="acquisition"
//         value="correo"
//       />
//       <label htmlFor="correo">Correo Electronico ✉️</label>
//     </div>
//   </fieldset>

//   <p className="form-actions">
//     <button type="reset" className="button button-flat">
//       Empezar de Nuevo
//     </button>
//     <button type="submit" className="button">
//       Registrar
//     </button>
//   </p>
// </form>
//   );
// }
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Page() {
  const [noName, setNoName] = useState(false);
  const [noLast, setNoLast] = useState(false);
  const [noState, setNoState] = useState(false);
  const [noContact, setNoContact] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
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
      const response = await fetch("/ASL/Clases/Signup/api/submit", {
        method: "POST",
        body: JSON.stringify(input_data),
        headers: {
          "Content-Type": "application/json",
        },
      });

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
      <h2>¡Gracias por su interes!</h2>
      <p>Solo necesitamos un poco informacion de usted</p>
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
        <label htmlFor="address">¿Dónde vive usted? 🏠</label>
        <input type="text" id="address" name="address" />
        <div className="control-error">
          {noState && <p>Necesita un estado</p>}
        </div>
      </div>
      <hr />

      <div className="control">
        <label htmlFor="email">Correo Electronico ✉️</label>
        <input id="email" type="email" name="email" />
      </div>

      <div className="control">
        <label htmlFor="phone">Número de Teléfono 📞</label>
        <input id="phone" type="phone" name="phone" minLength={10} />
        <div className="control-error">
          {noContact && (
            <p>Necesita un correo electronico o un numero de telefono</p>
          )}
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">¿Usted tiene un hijo sordo?</label>
        <select id="dhh" name="dhh">
          <option value="yes">Si 👍🏽</option>
          <option value="no-pero">No, pero conozco a alguien sordo 👎🏽</option>
          <option value="no">No 👎🏽</option>
        </select>
      </div>

      <fieldset>
        <legend>¿Como debemos contactar usted?</legend>
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
          <label htmlFor="correo">Correo Electronico ✉️</label>
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
