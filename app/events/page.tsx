import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_EVENT_TYPES } from '@/lib/queries'
import { EventTypesData } from '@/lib/types'
import Header from '../components/Header'
import EventTypeCard from '../components/EventTypeCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Event Types | Sterling Events Catering',
  description: 'Browse our event types and find the perfect catering solution for your occasion.',
}

async function getEventTypes() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<EventTypesData>({
      query: GET_EVENT_TYPES,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodeEventTypes?.nodes || []
  } catch (error) {
    console.error('Error fetching event types:', error)
    return []
  }
}

export default async function EventTypesPage() {
  const items = await getEventTypes()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-primary-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 font-display">
              Event Types
            </h1>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              From weddings to corporate galas, we cater events of every style and scale.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Event Types Yet</h2>
              <p className="text-gray-500">
                Event Types will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <EventTypeCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
