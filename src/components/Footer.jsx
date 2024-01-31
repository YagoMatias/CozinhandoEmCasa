import React from 'react';
import {
  EnvelopeSimple,
  InstagramLogo,
  Phone,
  WhatsappLogo,
} from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div
      id="contatos"
      className="w-full h-64 bg-[#460A04] mt-36 flex justify-center items-center text-white font-mali-regular"
    >
      <div className="w-11/12 h-52 flex justify-around mt-6">
        <div className="h-20 flex flex-col gap-7">
          <h3 className="text-4xl text-center">Contatos</h3>
          <Link
            className="text-xl flex gap-5"
            to={'tel:+558499707286'}
            target="_blank"
          >
            <Phone size={27} /> (84) 9 9970-7286
          </Link>
          <Link
            className="text-xl flex  gap-5"
            to={'mailto:mliliazvdo9619@gmail.com'}
            target="_blank"
          >
            <EnvelopeSimple size={27} />
            mliliazvdo9619@gmail.com
          </Link>
        </div>
        <div className="h-20 flex flex-col gap-7">
          <h3 className="text-4xl text-center">Redes Sociais</h3>
          <Link
            className="text-xl flex gap-5"
            to={'https://www.instagram.com/liliazvdo/'}
            target="_blank"
          >
            <InstagramLogo size={27} />
            Instagram
          </Link>
          <Link
            className="text-xl flex gap-5"
            to={
              'https://api.whatsapp.com/send/?phone=558499707286&t&type=phone_number&app_absent=0'
            }
            target="_blank"
          >
            <WhatsappLogo size={27} />
            Whatsapp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
