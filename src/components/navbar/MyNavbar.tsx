import { Button } from '@/components/ui/button'


function MyNavbar() {
  return (
    // <header className="w-full border-b">
    //   <div className="flex h-14 items-center px-4 justify-center">
    //     <DesktopNav />
    //     <MobileNav />
    //   </div>
    // </header>

    <header className='py-8 xl:py-12 text-black'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <a href="/">
          <h1 className='text-4xl font-semibold'>
            R3alfar<span className='text-accent'>.</span>
          </h1>
        </a>

        {/* desktop nav */}
        {/* <div
          className='hidden xl:flex items-center gap-8'
        >
          <NavMenu />
          <Link href="/">
            <Button>Hire me</Button>
          </Link>
        </div> */}

        {/* mobile nav */}
        {/* <div
          className='xl:hidden'
        >
          <MobileNav />
        </div> */}
      </div>
    </header>
  )
}

export default MyNavbar