import React, { ReactNode, createContext, useContext, useState } from "react";

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

type ContactFormContext = {
  contactForm: ContactForm[];
  setContactForm: React.Dispatch<React.SetStateAction<ContactForm[]>>;
};

type ContactFormContextProps = {
  children: ReactNode;
};

const ContactFormContext = createContext<ContactFormContext>({
  contactForm: [],
  setContactForm: () => {},
});

export function useContactFormContext() {
  return useContext(ContactFormContext);
}

export function ContactFormProvider({ children }: ContactFormContextProps) {
  const [contactForm, setContactForm] = useState<ContactForm[]>([]);
  console.log(contactForm);

  return (
    <ContactFormContext.Provider
      value={{
        contactForm,
        setContactForm,
      }}
    >
      {children}
    </ContactFormContext.Provider>
  );
}
