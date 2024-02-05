import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [alert, setAlert] = useState({ show: false, success: false });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4kyfjxj",
        "template_i1ux2v9",
        form.current,
        "RQ0ydZgVHvamLosFi"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setAlert({ show: true, success: true });
          setTimeout(() => setAlert({ show: false, success: false }), 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setAlert({ show: true, success: false });
          setTimeout(() => setAlert({ show: false, success: false }), 5000);
        }
      );
  };

  return (
    <section className="w-3/4 h-screen bg-concrete-50">
      <div className="flex h-3/4 bg-pearl-500 ">
        <div id="left-side-text" className="w-1/2">
          <h1>Fragen Sie ihr individuelles Angebot an!</h1>
          <p>Lassen Sie uns wissen, wie wir...</p>

          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col">
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
          {alert.show && (
            <div
              role="alert"
              className={`alert ${
                alert.success ? "alert-success" : "alert-error"
              } fixed bottom-0 left-0 mb-4 ml-4`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    alert.success
                      ? "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      : "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  }
                />
              </svg>
              <span>
                {alert.success
                  ? "Your message has been sent!"
                  : "Error! Message not sent."}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="h-1/4 bg-coral-500"></div>
    </section>
  );
};

export default Contact;
