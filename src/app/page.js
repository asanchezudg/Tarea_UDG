import TaskList from '../app/components/TaskList'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
      <div className="flex justify-center">
                  <img 
                    src="/udg-virtual-logo.png" 
                    alt="UDG Virtual Logo" 
                    width={150} 
                    height={150}
                  />
                </div>
      <h1 className="text-4xl font-bold mb-8 text-center">Tareas del Semestre</h1>
      <h1 className="text-4xl font-bold mb-8 text-center">Angel Francisco Sanchez de Tagle Marquez</h1>
        <TaskList />
      </div>
    </main>

//


  )


}