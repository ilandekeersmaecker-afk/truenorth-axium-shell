import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_FILES = ['/favicon.ico','/robots.txt','/sitemap.xml']

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/static/') ||
    PUBLIC_FILES.includes(pathname)
  ) return NextResponse.next()

  const auth = req.headers.get('authorization') || ''
  const [scheme, encoded] = auth.split(' ')
  const okScheme = scheme === 'Basic'
  const decoded = encoded ? Buffer.from(encoded, 'base64').toString() : ''
  const [user, pass] = decoded.split(':')

  const USER = process.env.BASIC_AUTH_USER
  const PASS = process.env.BASIC_AUTH_PASS

  const authorized = okScheme && user === USER && pass === PASS
  if (authorized) return NextResponse.next()

  return new NextResponse('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="True North Axium"' },
  })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
