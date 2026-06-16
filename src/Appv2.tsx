import { useState } from "react";

const ENDPOINT = "https://test-api-codeable.up.railway.app/api1/data";

export const Appv2 = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const options = {
      method: "POST",
      body: formData,
      headers: {
        // "Content-Type": "application/json",
      },
    };

    setStatus("loading");
    try {
      const response = await fetch(ENDPOINT, options);
      const data = await response.json();
      console.log(data);
      setStatus("success");
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="field-group">
        <label htmlFor="email" className="label">
          Email:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="field"
          required
        />
      </div>
      <div className="field-group">
        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea id="message" name="message" className="field" required />
      </div>
      <button type="submit" className="button">
        {status === "loading" ? "Submiting...." : "Submit"}
      </button>
      {status === "success" && <p>Informacion enviada con exito</p>}
      {status === "error" && <p>Ocurrio un problema con la peticion</p>}
    </form>
  );
};
