import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',  // Any path that starts with /sign-in
  '/',  // The root path
  '/sign-up(.*)'   // Any path that starts with /sign-up
])

export default clerkMiddleware(async (auth, request) => {
  // If the request is not from a public route, protect the route
  if (!isPublicRoute(request)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files (like images, fonts, etc.)
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    
    // Always apply middleware to API routes and TRPC routes
    '/(api|trpc)(.*)',
  ],
}
