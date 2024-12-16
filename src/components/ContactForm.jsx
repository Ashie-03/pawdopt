import { useState } from "react";
import Button from "./Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData)
    //EmailJS or Database integration goes here
  };

  return (
    <div className="flex flex-col md:flex-row items-center p-2 text-secondary rounded-lg md:items-start">
      <form className="w-full flex flex-col gap-3 items-center font-inter font-light" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Name
          </label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="w-full p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-secondary" required />
        </div>
        <div>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="w-full p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-secondary" required />
        </div>
        <div>
          <label htmlFor="message">
            Message
          </label>
          <textarea name="message" id="message" value={formData.message} onChange={handleChange} placeholder="Your message" className="w-full p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-secondary" required></textarea>
        </div>

        <button type="submit" disabled>
          <Button ctaText="ENQUIRE" className="bg-gray-400 hover:bg-gray-400"/>
          <p className="text-sm w-3/4 md:w-2/4 mx-10 md:mx-24 mt-4">** Currently, we are not taking enquiries. Sorry for the inconvenience **</p>
        </button>
      </form>

      {/* Contact details */}
      <div className="w-full mt-6 font-inter font-light md:mt-0">
        <div className="border-[0.5px] w-full border-secondary m-2 md:hidden"></div>
        <h3 className="font-boogaloo my-4 md:my-0">CONTACT US:</h3>
        <div className="flex gap-3">
          <img src="../src/assets/email_icon.svg" alt="Email Icon" />
          <p>adopt-now@pawdopt.com</p>
        </div>
        <div className="flex gap-3">
          <img src="../src/assets/call_icon.svg" alt="Phone Icon" />
          <p>(555) 123-4567</p>
        </div>
        <h3 className="font-boogaloo my-4 md:mb-0">VISIT US DIRECTLY:</h3>
        <div className="flex items-start gap-3">
          <img src="../src/assets/home_icon.svg" alt="Home Icon" />
          <p>Pawdopt Adoption Center <br/> 123 Pawsome Lane <br/> Furtown, FL 98765 <br/> United States</p>
        </div>
        <div className="mt-4 md:w-28">
          <img src="../src/assets/Map.png" alt="Map Image" />
        </div>
      </div>
    </div>
  )
};

export default ContactForm;