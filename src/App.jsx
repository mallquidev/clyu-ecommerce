import React, { useState } from 'react'
import { ShoppingCart, Bookmark, Terminal } from 'lucide-react'

function App() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email subscrito:', email)
    setEmail('')
  }

  const products = [
    { id: 1, name: "Polera Hacker Elite", price: 29.99, description: "Algodón negro con diseño de código" },
    { id: 2, name: "Sudadera Cyberpunk", price: 49.99, description: "Diseño futurista con LEDs integrados" },
    { id: 3, name: "Camiseta Código Binario", price: 24.99, description: "Patrón de 0s y 1s en verde fosforescente" },
    { id: 4, name: "Hoodie Anonymus", price: 54.99, description: "Con capucha y máscara estampada" },
    { id: 5, name: "Tank Top Hacker Girl", price: 19.99, description: "Diseño empoderado para programadoras" },
    { id: 6, name: "Polera Firewall", price: 34.99, description: "Estampado de muro de fuego digital" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-black text-green-500">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Terminal className="h-6 w-6 mr-2" />
        <span className="font-bold">SECUTEE</span>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <button className="text-green-500 hover:text-green-400">Catálogo</button>
          <button className="text-green-500 hover:text-green-400">Sobre Nosotros</button>
          <button className="text-green-500 hover:text-green-400">Contacto</button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Hackea tu Estilo
              </h1>
              <p className="mx-auto max-w-[700px] text-green-400 md:text-xl">
                Descubre nuestra colección de poleras inspiradas en la cultura hacker. Código, seguridad y estilo en cada diseño.
              </p>
              <button className="bg-green-500 text-black hover:bg-green-400 px-4 py-2 rounded-md flex items-center">
                Ver Catálogo <ShoppingCart className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-900/10">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Nuestro Catálogo</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-black border border-green-500 rounded-lg overflow-hidden shadow-lg">
                  <div className="aspect-w-3 aspect-h-4 bg-green-800/30 flex items-center justify-center">
                    <div className="text-green-300 text-5xl font-bold opacity-20">
                      {product.name[0].toUpperCase()}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-green-400 mb-2">{product.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                      <div className="flex space-x-2">
                        <button className="bg-green-500 text-black hover:bg-green-400 px-2 py-1 rounded-md flex items-center text-sm">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Agregar
                        </button>
                        <button className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-black px-2 py-1 rounded-md flex items-center text-sm">
                          <Bookmark className="h-4 w-4 mr-2" />
                          Reservar
                        </button>
                      </div>
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
              <h2 className="text-2xl font-bold">Únete a la Comunidad Hacker</h2>
              <p className="mx-auto max-w-[600px] text-green-400">
                Suscríbete para recibir las últimas novedades, ofertas exclusivas y trucos de estilo hacker.
              </p>
              <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-2">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-green-900/20 border border-green-500 text-green-500 placeholder-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                <button type="submit" className="w-full bg-green-500 text-black hover:bg-green-400 px-4 py-2 rounded-md">
                  Suscribirse
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-green-900">
        <p className="text-xs text-green-500">© 2024 HackerWear. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <button className="text-xs text-green-500 hover:text-green-400">Términos de Servicio</button>
          <button className="text-xs text-green-500 hover:text-green-400">Política de Privacidad</button>
        </nav>
      </footer>
    </div>
  )
}

export default App