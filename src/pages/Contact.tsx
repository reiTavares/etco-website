import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-16">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
