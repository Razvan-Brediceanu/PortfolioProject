'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z
    .string()
    .min(2, { message: 'Subject must be at least 2 characters.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' }),
})

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Handle form submission here
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20'>
      <div className='max-w-7xl mx-auto px-4 md:px-8 py-12'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600'>
            Let&apos;s Connect
          </h1>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Have a project in mind? Want to collaborate? Or just want to say hi?
            I&apos;d love to hear from you!
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-5 gap-12'>
          {/* Contact Info Cards */}
          <div className='lg:col-span-2 space-y-6'>
            {/* Contact Methods */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4'>
              <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow'>
                <div className='flex items-start space-x-4'>
                  <Mail className='h-6 w-6 text-purple-600' />
                  <div>
                    <h3 className='font-semibold mb-1'>Email</h3>
                    <p className='text-sm text-gray-600'>
                      datagrigore@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow'>
                <div className='flex items-start space-x-4'>
                  <Phone className='h-6 w-6 text-purple-600' />
                  <div>
                    <h3 className='font-semibold mb-1'>Phone</h3>
                    <p className='text-sm text-gray-600'>+40 766 677 624</p>
                  </div>
                </div>
              </div>

              <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow'>
                <div className='flex items-start space-x-4'>
                  <MapPin className='h-6 w-6 text-purple-600' />
                  <div>
                    <h3 className='font-semibold mb-1'>Location</h3>
                    <p className='text-sm text-gray-600'>Bucharest, Romania</p>
                  </div>
                </div>
              </div>

              <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow'>
                <div className='flex items-start space-x-4'>
                  <Clock className='h-6 w-6 text-purple-600' />
                  <div>
                    <h3 className='font-semibold mb-1'>Response Time</h3>
                    <p className='text-sm text-gray-600'>
                      Within 24 hours on business days
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='lg:col-span-3'>
            <div className='bg-white p-8 rounded-xl shadow-sm border border-gray-100'>
              <h2 className='text-2xl font-semibold mb-6'>Send a Message</h2>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='space-y-6'
                >
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <FormField
                      control={form.control}
                      name='name'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder='Your name' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='email'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder='your.email@example.com'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name='subject'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder='What is this about?' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='message'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder='Type your message here...'
                            className='min-h-[150px] resize-none'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type='submit'
                    className='w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
