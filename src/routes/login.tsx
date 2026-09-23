import { createFileRoute } from '@tanstack/react-router'

const title = 'Sign in — SUPERINTELLIGENS'
const description =
  'Sign in to SUPERINTELLIGENS and turn a plain-language idea into a deployable app in minutes.'

export const Route = createFileRoute('/login')({
  head: () => ({
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: '/login' }],
  }),
  component: LoginPage,
})

import { AuthForm } from '@/components/auth/auth-form'
import { SiteHeader } from '@/components/landing/site-header'
import { Hero } from '@/components/landing/hero'

function LoginPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* The landing page stays visible behind the sign-in dialog */}
      <main className="landing-page pointer-events-none min-h-screen bg-background" aria-hidden>
        <div className="hero-pastel">
          <SiteHeader />
          <Hero />
        </div>
      </main>

      <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/45 px-6 py-12 backdrop-blur-[2px]">
        <div className="login-light w-full max-w-[420px]">
          <AuthForm />
        </div>
      </div>
    </div>
  )
}
