'use client'

import { useState, useEffect, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2, Mail, MessageSquare, CheckCircle } from 'lucide-react'
import { sendMessage } from '@/app/actions/slack'

declare global {
  interface Window {
    grecaptcha?: {
      reset: () => void
    }
    handleContactSubmit?: (token: string) => void
  }
}

const contactFormSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

interface ContactFormProps {
  className?: string
}

export default function ContactForm({ className = '' }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = useCallback(async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      await sendMessage({
        name: data.name,
        email: data.email,
        message: data.message
      })

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.',
      })
      
      reset()
      
      // Reset captcha
      if (window.grecaptcha && typeof window.grecaptcha.reset === 'function') {
        window.grecaptcha.reset()
      }
    } catch (error) {
      console.error('Error sending message to Slack:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }, [reset])

  // Move global callback assignment to useEffect with proper dependency
  useEffect(() => {
    const handleRecaptchaSubmit = () => {
      handleSubmit(onSubmit)()
    }
    
    window.handleContactSubmit = handleRecaptchaSubmit
  }, [handleSubmit, onSubmit])

  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      <div className="bg-card border border-border rounded-lg shadow-lg p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have a question or want to discuss a project? We&apos;d love to hear from you.
          </p>
        </div>

        {submitStatus.type && (
          <Alert className={`mb-6 ${
            submitStatus.type === 'success' 
              ? 'border-green-200 bg-green-50' 
              : 'border-red-200 bg-red-50'
          }`}>
            <div className="flex items-center">
              {submitStatus.type === 'success' ? (
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
              ) : (
                <Mail className="h-4 w-4 text-red-600 mr-2" />
              )}
              <AlertDescription className={
                submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'
              }>
                {submitStatus.message}
              </AlertDescription>
            </div>
          </Alert>
        )}

        <form id="contact-form" className="space-y-6">
          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
              Full Name *
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className={`w-full ${errors.name ? 'border-red-500' : ''}`}
              {...register('name')}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
              Email Address *
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className={`pl-10 w-full ${errors.email ? 'border-red-500' : ''}`}
                {...register('email')}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
              Message *
            </Label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Textarea
                id="message"
                rows={6}
                placeholder="Tell us about your project or ask us a question..."
                className={`pl-10 w-full resize-none ${errors.message ? 'border-red-500' : ''}`}
                {...register('message')}
              />
            </div>
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:scale-105 hover:bg-primary hover:text-primary-foreground text-primary-foreground font-medium py-3 px-4 rounded-md transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed g-recaptcha flex items-center justify-center disabled:hover:scale-100"
            data-sitekey="6Le-f38gAAAAAAgJcEBgn3Y2vqDC5hDGO_u_9YIG"
            data-callback="handleContactSubmit"
            data-action="submit"
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <Loader2 className="animate-spin h-4 w-4 mr-2" />
                <span>Sending Message...</span>
              </div>
            ) : (
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>Send Message</span>
              </div>
            )}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>
            By submitting this form, you agree to our{' '}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
