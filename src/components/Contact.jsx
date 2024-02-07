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
    <section className="w-3/4 h-screen bg-concrete-50 relative">
      <div className="flex h-3/4   ">
        <div id="left-side-text" className="w-3/5 flex flex-col justify-center itmes-center p-10 gap-16   ">
          <div>
          <h1 className="text-4xl text-pretty">Fragen Sie Ihr individuelles Angebot an!</h1>
          <p className="text-lg text-pretty pr-16"> Ihr Projekt ist uns wichtig! Haben Sie Fragen, benötigen Sie ein individuelles Angebot oder möchten Sie einfach nur Hallo sagen? 
          Unser Team freut sich auf Ihre Nachricht!</p>
          </div>
          <div id="avatar-group" className="flex gap-4">
          <div id="Avatar-Name" className="">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <p>Ramiz </p>
          <p>Inhaber</p>
          </div>
          <div id="Avatar-Name" className="">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <p>Flamur </p>
          <p>Facharbeiter</p>
          </div>
          </div>
        </div>
        <div className="w-2/5  flex bg-concrete-600  absolute bottom-20 right-20 ">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full gap-3 p-5   ">
            
            <input type="text" name="user_name" placeholder="Mustermann" className="min-w-full bg-concord-50 " />
            
            <input type="email" name="user_email" placeholder="example@email.com" className="min-w-full bg-concord-50" />
            
            <textarea name="message" placeholder="Hallo..." className="min-w-full min-h-64 max-h-64 overscroll-auto bg-concord-50"   />
            <button type="submit" className="btn rounded-none">Anfrage senden</button>
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
      <div className="h-1/4 bg-coral-500  ">
        <img className="h-full w-full object-cover" src="https://www.villeroy-boch.de/fileadmin/upload/fliesen/images/Bilder_Redesign_-_EVB/960x400/URBAN_JUNGLE_OUTDOOR20_1_PALMEN.jpg" alt="" />
      </div>
    </section>
  );
};

export default Contact;
