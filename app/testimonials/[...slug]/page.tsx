import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { GET_TESTIMONIAL_BY_PATH } from '@/lib/queries'
import { DrupalTestimonial } from '@/lib/types'
import Header from '../../components/Header'
import ResponsiveImage from '../../components/ResponsiveImage'
import { ArrowLeft } from 'lucide-react'

export const revalidate = 300
export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ slug: string[] }>
}

interface TestimonialByPathData {
  route: {
    entity: DrupalTestimonial
  } | null
}

async function getTestimonial(path: string): Promise<DrupalTestimonial | null> {
  try {
    const client = getClient()
    const data = await client.raw(GET_TESTIMONIAL_BY_PATH, { path })
    return data?.route?.entity || null
  } catch (error) {
    console.error('Error fetching testimonial:', error)
    return null
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const path = `/testimonials/${slug.join('/')}`
  const item = await getTestimonial(path)

  if (!item) {
    return { title: 'Testimonial Not Found | Sterling Events Catering' }
  }

  return {
    title: `${item.title} | Sterling Events Catering`,
    description: ((item as any).body?.processed ? (item as any).body.processed.replace(/<[^>]*>/g, '').substring(0, 160) : '') || `Learn more about ${item.title}.`,
  }
}

export default async function TestimonialDetailPage({ params }: PageProps) {
  const { slug } = await params
  const path = `/testimonials/${slug.join('/')}`
  const item = await getTestimonial(path)

  if (!item) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-primary-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/testimonials"
            className="inline-flex items-center text-primary-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Testimonials
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black font-display">
            {item.title}
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">

              {(item as any).body?.processed && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                  <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: (item as any).body.processed }}
                  />
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Details</h3>
                <dl className="space-y-4">
                  {(item as any).clientName && (
                    <div>
                      <dt className="text-sm text-gray-500">Client Name</dt>
                      <dd className="font-semibold text-gray-900">{(item as any).clientName}</dd>
                    </div>
                  )}
                  {(item as any).eventHosted && (
                    <div>
                      <dt className="text-sm text-gray-500">Event Hosted</dt>
                      <dd className="font-semibold text-gray-900">{(item as any).eventHosted}</dd>
                    </div>
                  )}
                </dl>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 bg-accent-500 text-white rounded-lg font-bold hover:bg-accent-600 transition-colors"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
