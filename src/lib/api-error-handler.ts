import { NextRequest, NextResponse } from 'next/server'
import { createErrorResponse, HTTP_STATUS } from '@/lib/api-response'

/**
 * Global error handler for API routes
 * Usage: wrap your route handler with this function
 *
 * @example
 * export const GET = withErrorHandler(async (request) => {
 *   // Your handler code
 * })
 */
export function withErrorHandler(
  handler: (request: NextRequest) => Promise<NextResponse>
) {
  return async (request: NextRequest): Promise<NextResponse> => {
    try {
      return await handler(request)
    } catch (error) {
      console.error('[API Error]', error)

      const message = error instanceof Error ? error.message : 'Internal server error'
      const response = createErrorResponse('INTERNAL_ERROR', message)

      return NextResponse.json(response, {
        status: HTTP_STATUS.INTERNAL_SERVER_ERROR,
      })
    }
  }
}
