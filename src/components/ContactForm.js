import React from "react";
import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="container-contact">
      
      <form

        action="https://formspree.io/f/xjvleneb"
        method="POST">
        

        <h1 className="heading2">Get in touch</h1>

        <div className="contactForm">
            <div>
            <label>
              Your email:
              <div><input type="email" name="email"></input></div>
            </label>
            </div>

            
            <div>
            <label>
              Your message:
              <div><textarea name="message"></textarea></div>
            </label>
            </div>

            <div>
            <button type="submit">Send</button>
            </div>
            

        </div>
        
      
      </form>
    </div>
  );
}

export default ContactForm;
