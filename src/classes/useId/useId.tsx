import { useId, useState } from "react";

export const UseId = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const id = useId();
  const emailId = `email-${id}`;
  const messageId = `message-${id}`;

  const idForm2 = useId();
  const emailForm2Id = `email-${idForm2}`;
  const messageForm2Id = `message-${idForm2}`;

  return (
    <div>
      <form action="">
        <label htmlFor={emailId}>Email: </label>
        <input
          type="email"
          id={emailId}
          name="email"
          placeholder="juan@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor={messageId}> Mensaje</label>
        <textarea
          id={messageId}
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>

      <br />
      <hr />
      <br />
      <form action="">
        <label htmlFor={emailForm2Id}>Email: </label>
        <input
          type="email"
          id={emailForm2Id}
          name="email"
          placeholder="juan@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor={messageForm2Id}> Mensaje</label>
        <textarea
          id={messageForm2Id}
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
  );
};
