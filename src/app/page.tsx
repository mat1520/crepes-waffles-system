export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center mb-8">
          Crepes & Waffles System
        </h1>
        
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <p className="flex place-items-center gap-2 p-8 lg:p-0">
            Sistema de Facturación y Atención al Cliente
          </p>
        </div>
      </div>

      <div className="relative flex place-items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Estado del Sistema</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Bienvenido al sistema
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
