import { Navigation } from '@/components/navigation/navigation'
import '../globals.css'
import { Header } from '@/components/header/header'
import { Providers } from '@/components/providers/providers'


export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation></Navigation>
      
      <div className="main-section-container">
        <Header></Header>

        <main>
          {children}
        </main>

      </div>
    </>


  )
}
