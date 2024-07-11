
import './App.css'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { ModeToggle } from './components/theme-provider/mode-toggle'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-[600px]'>
        <div className='flex flex-col justify-center items-center'>
          <div className='py-2'>
            <ModeToggle />
          </div>

          <Tabs defaultValue='main' className=''>
            <div className=' '>
              <TabsList className='grid w-full grid-cols-2'>
                <TabsTrigger value='main' >Main Account</TabsTrigger>
                <TabsTrigger value='secondary'>Secondary Account</TabsTrigger>
              </TabsList>
            </div>

            {/* CONTENT main */}
            <TabsContent value='main' className=''>
              <Card className='h-[400px] w-[456px]'>
                <CardHeader>
                  <CardTitle>Main</CardTitle>
                  <CardDescription>Realfar#2542</CardDescription>
                </CardHeader>
                <CardContent className='space-y-2'>
                  <h1>main</h1>
                </CardContent>
              </Card>
            </TabsContent>

            {/* CONTENT secondary */}
            <TabsContent value='secondary'>
              <Card className='h-[400px]'>
                <CardHeader>
                  <CardTitle>Secondary</CardTitle>
                  <CardDescription>Euver#3870</CardDescription>
                </CardHeader>
                <CardContent className='space-y-2'>
                  <h1>secondaru</h1>
                </CardContent>
              </Card>
              {/* <div
                className='container mx-auto border border-black/85 h-[400px] rounded-xl'
              >
                <h1>secondary</h1>
              </div> */}
            </TabsContent>
          </Tabs>
        </div>

      </div>

    </div>



  )
}

export default App


{/* <div>
  https://docs.henrikdev.xyz
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}