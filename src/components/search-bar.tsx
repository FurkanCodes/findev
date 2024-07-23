'use client'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useRouter, useSearchParams } from 'next/navigation'
import { SearchIcon, XIcon } from 'lucide-react'
import { useEffect } from 'react'

const formSchema = z.object({
  search: z.string().max(50),
})

function SearchBar() {
  const router = useRouter()
  const query = useSearchParams()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: query.get('search') ?? '',
    },
  })

  useEffect(() => {
    form.setValue('search', query.get('search') ?? '')
  }, [query, form])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.search) {
      router.push(`/dashboard/?search=${values.search}`)
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-start gap-2"
      >
        <div className="flex items-center gap-2">
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-[198px] md:w-[500px] lg:w-[540px]"
                    placeholder="Filter rooms by its keywords"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="lg:mt-0" type="submit">
            <SearchIcon />
            <span className="hidden sm:inline"> Search</span>
          </Button>
          {query.get('search') && (
            <Button
              className="lg:mt-0"
              variant="outline"
              onClick={() => {
                form.setValue('search', '')
                router.push('/dashboard')
              }}
            >
              <XIcon />
              <span className="hidden sm:inline"> Clear Search</span>
            </Button>
          )}
        </div>
        {!form.watch('search') && (
          <p className="ml-1 mt-1 text-sm text-red-300">
            Enter keywords to filter rooms
          </p>
        )}
      </form>
    </Form>
  )
}

export default SearchBar
