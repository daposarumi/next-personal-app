import { getPages } from '@/sanity/sanity-utils'
import '../globals.css'
import Link from 'next/link'



export const metadata = {
  title: 'Frontend Engineer in Ilorin',
  description: 'Portfolio',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pages = await getPages();

  return (
    <html lang="en">
      <body className='px-7 lg:px-40 mx-auto py-5'>
        <header className='flex items-center justify-between'>
          <Link href="/"
          className="logo text-2xl font-bold">
            DS.
          </Link>
          
          <div className='flex items-center gap-7 text-base text-gray-500'>
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className='menu'>{page.title}</Link>
            ))}
            
            {/* <a href="#" className="resume hover:text-neutral-900 text-base border px-5 py-1 rounded-lg">Resume</a> */}
            </div>
          
        </header>
         <main className='py-20'>{children}</main>
         <footer className='text-center text-gray-500 text-sm'>
            &copy; Dapo Sarumi, 2023.
        </footer>
         </body>
    </html>
  )
}
