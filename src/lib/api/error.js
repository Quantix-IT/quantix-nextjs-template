import { NextResponse } from 'next/server'

export class ApiError extends Error {
	constructor(
		code = 'server',
		message = 'Something went wrong.',
		status = 500
	) {
		super()

		this.code = code
		this.message = message
		this.status = status
	}

	response() {
		return [
			{ error: { code: this.code, message: this.message } },
			{ status: this.status },
		]
	}
}

export const withErrorHandler =
	(handler) =>
	async (...parameters) => {
		try {
			return await handler(...parameters)
		} catch (err) {
			const [request, { params }] = parameters

			if (err instanceof ApiError) {
				return NextResponse.json(...err.response())
			}

			throw err
		}
	}
