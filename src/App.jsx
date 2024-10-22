import React, { useState } from 'react'
import { ShoppingCart, Bookmark } from 'lucide-react'
import logoxd from './assets/logosecutee.png'
import js from './assets/polera-js.png'
import jsback from './assets/js-back.png'
import python from './assets/polera-py.png'
import pyback from './assets/py-back.png'
import github from './assets/polera-github.png'
import githuback from './assets/github-back.png'
import html from './assets/polera-html.png'
import htmlback from './assets/html-back.png'
import nestjs from './assets/polera-nestjs.png'
import nestback from './assets/nest-back.png'
import java from './assets/polera-java.png'
import javaback from './assets/java-back.png'
import whatsapp from './assets/whatsapp.png'

import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";

function App() {

  const products = [
    { id: 1, name: "Polera Github", price: 18.99, description: "Polera negra en talla M/L con diseño GITHUB", img: [github, githuback] },
    { id: 2, name: "Polera NestJs", price: 18.99, description: "Polera negra en talla M/L con diseño de Framework", img: [nestjs, nestback] },
    { id: 3, name: "Polera Python", price: 18.99, description: "Polera negra en talla M/L con diseño de Lenguaje", img: [python, pyback] },
    { id: 4, name: "Polera del poderoso Html", price: 18.99, description: "Polera negra en talla M/L con HTML", img: [html, htmlback] },
    { id: 5, name: "Polera Java", price: 18.99, description: "Polera negra en talla M/L con diseño de Lenguaje", img: [java, javaback] },
    { id: 6, name: "Polera JavaScript", price: 18.99, description: "Polera negra en talla M/L con diseño de Lenguaje", img: [js, jsback] },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white text-green-500">
      <header className="px-4 lg:px-6 h-14 flex items-center flex-wrap">

        <img src={logoxd} alt="" className='w-16 pt-2 text-black' />
        <span className="font-bold text-[#124150]">SECUTEE</span>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-[#007644] hover:text-green-400 cursor-pointer"
            onClick={() => {
              document.getElementById('producto').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Producto
          </a>
          <a
            className="text-[#007644] hover:text-green-400 cursor-pointer"
            onClick={() => {
              document.getElementById('nosotros').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Nosotros
          </a>
          <a
            className="text-[#007644] hover:text-green-400 cursor-pointer"
            onClick={() => {
              document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contacto
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48" id='nosotros'>
          <div className="container px-4 md:px-6 mx-auto" >
            <div className="flex flex-col items-center space-y-4 text-center" >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#124150]">
                Hackea tu Estilo
              </h1>
              <p className="mx-auto max-w-[700px] text-[#124150] md:text-xl">
                Descubre nuestra colección de poleras inspiradas en la informatica. Lenguajes, Frameworks y estilo minimalista compra o seras LT5 de por vida.
              </p>
              <button className="bg-green-700 text-white hover:bg-green-400 px-4 py-2 rounded-md flex items-center">
                Ver Poleras <ShoppingCart className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#EEF0F4]">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 sm:text-4xl md:text-5xl lg:text-6xl/none text-[#124150]" id='producto'>Nuestro Producto</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5" >
              {products.map((product) => (
                <div key={product.id} className="bg-[#ffff] border rounded-2xl overflow-hidden shadow-lg">
                  <div className="aspect-w-3 aspect-h-4 bg-[#EEF0F4] flex items-center justify-center">
                    <ImageGallery items={product.img.map(image => ({ original: image }))} showPlayButton={false} showThumbnail={false} showBullets={true} showNav={false} showFullscreenButton={false} />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-[#124150]">{product.name}</h3>
                    <p className="mb-2 text-[#124150]">{product.description}</p>
                    <div className="flex flex-wrap justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-[#124150]">${product.price.toFixed(2)}</span>
                      <div className="flex space-x-2 mt-4 sm:mt-0">

                        <label>
                          <input className="sr-only peer" type="radio" autocomplete="off" />
                          <div className="w-9 h-9 border-2 rounded-lg flex items-center justify-center text-white bg-[#007644] peer-checked:font-semibold">
                            M
                          </div>
                        </label>
                        <label>
                          <input className="sr-only peer" name="size" type="radio" value="L" checked />
                          <div className="w-9 h-9 border-2 rounded-lg flex items-center justify-center text-white bg-[#007644] peer-checked:font-semibold">
                            L
                          </div>
                        </label>
                        <label>
                          <input className="sr-only peer" name="size" type="radio" value="S" />
                          <div className="w-9 h-9 border-2 border-green-500 rounded-lg flex items-center justify-center text-green-600 ">
                            S
                          </div>
                        </label>
                      </div>
                    </div>
                    <div className="flex space-x-4 mb-6 text-sm">
                      <a
                        href={`https://wa.me/+51930445060?text=Hola,%20me%20gustaría%20recibir%20más%20información%20sobre%20${encodeURIComponent(product.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out text-center justify-center w-full sm:w-auto"
                      >
                        <img src={whatsapp} alt="WhatsApp" className="w-6 h-6 mr-2" />
                        Reservar
                      </a>

                    </div>
                  </div>
                </div>
              ))}
            </div>


          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-2xl font-bold text-[#124150]">Únete a la Comunidad</h2>
              <p className="mx-auto max-w-[600px] text-[#124150]">
                Escribenos al Whatsapp para mas información.
              </p>


              <a
                href="https://wa.me/+51930445060?text=Hola%2C%20me%20gustaría%20recibir%20más%20información" // Enlace con tu número y mensaje predeterminado
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-700 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300 ease-in-out text-center justify-center"
              >
                <img src={whatsapp} alt="WhatsApp" className="w-6 h-6 mr-2" />
                Más info
              </a>

            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t" id='contacto'>
        <p className="text-xs text-[#124150]">© 2024 Secutee. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <button className="text-xs text-[#124150] hover:text-green-400">Términos de Servicio</button>
          <button className="text-xs text-[#124150] hover:text-green-400">Política de Privacidad</button>
        </nav>
      </footer>
    </div>
  )
}

export default App