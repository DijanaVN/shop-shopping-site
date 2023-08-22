import React, { ReactNode, createContext, useContext, useState } from "react";

interface ContactForm {
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

const ContactFormContext = createContext<ContactFormContext | undefined>(
  undefined
);

export function useContactFormContext() {
  const context = useContext(ContactFormContext);
}

export function ContactFormProvider({ children }: ContactFormContextProps) {
  const [contactForm, setContactForm] = useState<ContactForm[]>([]);

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
