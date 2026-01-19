/**
 * Standardized API Response Types
 * Ensures consistent response format across all API routes
 */

export interface ApiSuccess<T = any> {
  success: true
  data: T
  message?: string
}

export interface ApiError {
  success: false
  error: {
    code: string
    message: string
    details?: unknown
  }
}

export type ApiResponse<T = any> = ApiSuccess<T> | ApiError

/**
 * Create a success response
 */
export function createSuccessResponse<T>(
  data: T,
  message?: string
): ApiSuccess<T> {
  return {
    success: true,
    data,
    message,
  }
}

/**
 * Create an error response
 */
export function createErrorResponse(
  code: string,
  message: string,
  details?: unknown
): ApiError {
  return {
    success: false,
    error: {
      code,
      message,
      details,
    },
  }
}

/**
 * HTTP status codes helper
 */
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
} as const
