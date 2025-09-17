"use client"
import React, { useState } from "react";
import { toast } from "sonner";

interface ContactInfoItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  link?: string;
  overlay?: string;
}

const contactInfo: ContactInfoItem[] = [

  {
    id: 1,
    title: "Our Address",
    description: "Address: 1 Gold Souq - Deira - Dubai - United Arab Emirates",
    icon: "images/icons/home.svg",
    overlay: "images/gradient/gradient-22.png",
  },
  {
    id: 2,
    title: "Email Us",
    description: "web3DeCodeds@gmail.com",
    icon: "images/icons/mail-open.svg",
    overlay: "images/gradient/gradient-17.png",
    link: "mailto:web3DeCodeds@gmail.com",
  },
  {
    id: 3,
    title: "Call Us",
    description: "+971 56 324 2996",
    icon: "images/icons/phone-right.svg",
    overlay: "images/gradient/gradient-6.png",
    link: "tel:+971563242996",
  },
];

const ContactSection: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState("+91");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
  
    const url =
      "https://script.google.com/macros/s/AKfycbyCJepkwGGRvtTPnb4dqXa_yr8Kg41A75t69uj6egIKl5YMS_7x02--Hds31oZ0MjYenA/exec";
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      setLoading(true);
      e.preventDefault();
  
      try {
        await fetch(url, {
          method: "POST",
  
          body: JSON.stringify({
            Name: name,
            Email: email,
            PhoneNumber: phoneNumber,
            Subject: subject,
            Message: message,
          }),
        });
        toast.success("Message sent successfully");
        setName("");
        setEmail("");
        setPhoneNumber("+91");
        setSubject("");
        setMessage("");
      } catch (error) {
        console.error(error);
        toast.error("Message sent failed");
      } finally {
        setLoading(false);
      }
    };
  
  return (
    <section
    id="contact"
      className="pt-10 pb-14 md:pb-16 lg:pb-20 xl:pb-[100px]"
      aria-label="Contact Information and Form"
    >
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* heading */}
          <div className="max-w-[680px] mx-auto text-center space-y-3">
            <h2 data-ns-animate data-delay="0.2">
              Reach out to our support team for help.
            </h2>
            <p data-ns-animate data-delay="0.3">
              Whether you have a question, need technical assistance, or just want some guidance,
              our support team is here to help. We're available around the clock to provide quick
              and friendly support.
            </p>
          </div>

          <div className="flex lg:items-start flex-col justify-center items-center gap-10 lg:flex-row lg:gap-8 xl:gap-[70px]">
            {/* contact info cards */}
            <div
              data-ns-animate
              data-delay="0.4"
              className="flex flex-col gap-8 md:flex-row lg:flex-col"
            >
              {contactInfo.map((item) => (
                <div
                  key={item.id}
                  className="bg-secondary dark:bg-background-6 rounded-[20px] p-11 space-y-6 w-full md:max-w-[371px] text-center relative overflow-hidden"
                >
                  {/* bg overlay */}
                  {item.overlay && (
                    <figure className="absolute select-none pointer-events-none size-[350px] overflow-hidden top-[-187px] left-[174px]">
                      <img src={item.overlay} alt="Decorative gradient overlay" />
                    </figure>
                  )}

                  <figure className="size-10 overflow-hidden mx-auto">
                    <img src={item.icon} alt={`${item.title} icon`} className="size-full object-cover" />
                  </figure>

                  <div className="space-y-2.5">
                    <p className="text-heading-6 text-accent">{item.title}</p>
                    {item.link ? (
                      <p className="text-accent/60">
                        <a href={item.link}>{item.description}</a>
                      </p>
                    ) : (
                      <p className="text-accent/60">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* contact form */}
            <div
              data-ns-animate
              data-delay="0.3"
              className="max-w-[847px] w-full mx-auto bg-white dark:bg-background-6 rounded-4xl p-6 md:p-8 lg:p-11"
            >
              <form onSubmit={handleSubmit} method="POST" className="space-y-8">
                {/* name and phone number */}
                <div className="flex items-center text-white flex-col md:flex-row gap-8 justify-between">
                  <div className="space-y-2 lg:max-w-[364px] w-full">
                    <label htmlFor="fullname" className="block text-tagline-2 font-medium">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      placeholder="Enter your name"
                      required
                      autoComplete="name"
                      className="w-full px-[18px] py-3 rounded-full text-white  bg-white/5"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2 max-w-[364px] w-full">
                    <label htmlFor="number" className="block text-white text-tagline-2 font-medium">
                      Your phone number
                    </label>
                    <input
                      type="text"
                      id="number"
                      name="number"
                      placeholder="Enter your phone number"
                      required
                      autoComplete="tel"
                      className="w-full px-[18px] py-3 rounded-full text-white  bg-white/5"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>

                {/* email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-white text-tagline-2 font-medium">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    autoComplete="email"
                    className="w-full px-[18px] py-3 rounded-full text-white  bg-white/5"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-white text-tagline-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Enter your subject"
                    required
                    className="w-full px-[18px] py-3 rounded-full text-white  bg-white/5"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                {/* message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-white text-tagline-2 font-medium">
                    Write message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    placeholder="Enter your messages"
                    required
                    className="w-full px-[18px] py-3 rounded-xl text-white  bg-white/5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

  

                {/* submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn disabled:opacity-50 btn-md btn-primary w-full hover:btn-primary"
                >
                    {loading ? "Submitting..." : "Submit"}
                 
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
