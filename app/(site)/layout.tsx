import { getPages } from '@/sanity/sanity-utils'
import '../globals.css'
import Link from 'next/link'



export const metadata = {
  title: 'Frontend Engineer in Ilorin',
  description: 'Generated by Next + Sanity',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pages = await getPages();

  return (
    <html lang="en">
      <body className='max-w-4xl mx-auto py-5 px-6'>
        <header className='flex items-center justify-between'>
          <Link href="/"
          className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-2xl font-bold">
            DS.
          </Link>

          <div className='flex items-center gap-5 text-base text-gray-600'>
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className='hover:underline'>{page.title}</Link>
            ))}

          </div>
        </header>
         <main className='py-20'>{children}</main>
         <footer className='text-center text-gray-500'>
            &copy; Dapo Sarumi, 2023.
        </footer>
         </body>
    </html>
  )
}
