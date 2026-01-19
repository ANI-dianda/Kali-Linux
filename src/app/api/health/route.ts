import { NextResponse } from 'next/server'
import { createSuccessResponse, HTTP_STATUS } from '@/lib/api-response'

export async function GET() {
  return NextResponse.json(
    createSuccessResponse({ status: 'ok', timestamp: new Date().toISOString() }, 'Health check passed'),
    { status: HTTP_STATUS.OK }
  )
}