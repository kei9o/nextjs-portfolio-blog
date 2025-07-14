'use client'

import type { Metadata } from 'next'
import { useState } from 'react'

export const metadata: Metadata = {
  title: 'Contact',
}

export default function Page() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const response = await fetch('/api/discord', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `New contact form submission:\n\n**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`,
        }),
      })

      if (response.ok) {
        setStatus('Message sent successfully!')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('Failed to send message. Please try again later.')
      }
    } catch (error) {
      console.error('Error submitting contact form:', error)
      setStatus('An error occurred. Please try again later.')
    }
  }

  return (
    <section>
      <h1 className='mb-8 text-2xl font-semibold tracking-tighter'>Contact</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label htmlFor='name' className='block text-sm font-medium'>
            Name
          </label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className='mt-1 block w-full rounded-md border-gray-300 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
          />
        </div>
        <div>
          <label htmlFor='email' className='block text-sm font-medium'>
            Email
          </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='mt-1 block w-full rounded-md border-gray-300 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
          />
        </div>
        <div>
          <label htmlFor='message' className='block text-sm font-medium'>
            Message
          </label>
          <textarea
            id='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className='mt-1 block w-full rounded-md border-gray-300 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
          />
        </div>
        <button
          type='submit'
          className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        >
          Send Message
        </button>
      </form>
      {status && <p className='mt-4 text-sm'>{status}</p>}
    </section>
  )
}