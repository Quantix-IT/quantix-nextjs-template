import { ApiError, withErrorHandler } from '@/lib/api/error'
import { NextResponse } from 'next/server'

export const GET = withErrorHandler(() => {
	return NextResponse.json({ result: 'OK' })
})

export const POST = withErrorHandler((request) => {
	throw new ApiError('example', 'This is an example of an ApiError.', 400)
})
