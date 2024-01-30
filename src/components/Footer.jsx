import React from 'react';
import {
  EnvelopeSimple,
  InstagramLogo,
  Phone,
  WhatsappLogo,
} from '@phosphor-icons/react';

const Footer = () => {
  return (
    <div
      id="contatos"
      className="w-full h-64 bg-[#460A04] mt-36 flex justify-center items-center text-white"
    >
      <div className="w-11/12 h-52 flex justify-around mt-6">
        <div className="h-20 flex flex-col gap-7">
          <h3 className="text-4xl text-center">Contatos</h3>
          <a className="text-xl flex gap-5" href="#">
            <Phone size={27} /> (84) 9 9999-9999
          </a>
          <a className="text-xl flex  gap-5" href="#">
            <EnvelopeSimple size={27} />
            Mliliazvdo96@gmail.com
          </a>
        </div>
        <div className="h-20 flex flex-col gap-7">
          <h3 className="text-4xl text-center">Redes Sociais</h3>
          <a className="text-xl flex gap-5" href="#">
            <InstagramLogo size={27} />
            Instagram
          </a>
          <a className="text-xl flex gap-5" href="#">
            <WhatsappLogo size={27} />
            Whatsapp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
