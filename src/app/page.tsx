import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Button, buttonVariants } from "@/components/ui/button"
import { CircleDollarSign, Package, ShieldCheck } from "lucide-react"
import Link from "next/link"

const perks = [
  {
    name: '2 day delivery',
    Icon: Package,
    description: 
      'fast delivery within US 48 states and all product ordered before 3 PM EST will be shipped out the same day.'
  },
  {
    name: 'Mutiple currency accepted',
    Icon: CircleDollarSign,
    description: 
      'We accept a wide range of payment currency like US dollar, Europe euro, British pounds and Canadian dollar'
  },
  {
    name: 'Money back gurantee',
    Icon: ShieldCheck,
    description: 
      'Not satisfy with our product? No problem, ship it back in original state and instant refund uppon received return'
  }
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper> 
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>  
            Market place {''}
            <span className='text-blue-600'>
              click here
            </span>
            .
          </h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground'> 
            Welcom to J mart.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link href='/allproduct' className={buttonVariants()}> 
              all product
            </Link>
            <Button variant='ghost'> some thing else &rarr; </Button>
          </div>
        </div>
      </MaxWidthWrapper>
      {/* TODO: */}
      <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-col-3 lg:gap-y-0'>
            {perks.map((perk) => (
              <div key={perk.name} className='text-center md:flex mid:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>   
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-gray-900'>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
