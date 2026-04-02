import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_MENU_PACKAGES } from '@/lib/queries'
import { MenuPackagesData } from '@/lib/types'
import Header from '../components/Header'
import MenuPackageCard from '../components/MenuPackageCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Menu Packages | Sterling Events Catering',
  description: 'Explore our curated menu packages designed for every occasion.',
}

async function getMenuPackages() {
  try {
    const client = getClient()
    const { data } = await client.raw(GET_MENU_PACKAGES, { first: 50 })
    return data?.nodeMenuPackages?.nodes || []
  } catch (error) {
    console.error('Error fetching menu packages:', error)
    return []
  }
}

export default async function MenuPackagesPage() {
  const items = await getMenuPackages()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-primary-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 font-display">
              Menu Packages
            </h1>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              Curated menus crafted by our award-winning chefs for every occasion and budget.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Menu Packages Yet</h2>
              <p className="text-gray-500">
                Menu Packages will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <MenuPackageCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
