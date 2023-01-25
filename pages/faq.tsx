import { NextPage } from 'next'
import Accordion from '../src/domains/BusinessInfo/components/Accordion'
import PageLayout from '../src/domains/global/components/layout/PageLayout'

const faqs = [
  {
    title: 'How often should I schedule a house cleaning?',
    content: (
      <p>
        It depends on your personal preferences and needs. Some people prefer
        weekly cleanings, while others prefer biweekly or monthly cleanings.
        It's important to consider factors such as the size of your home, the
        number of people living there, and your personal standards for
        cleanliness.
      </p>
    ),
    top: true
  },
  {
    title: 'What tasks are included in a typical house cleaning service?',
    content: (
      <p>
        A typical house cleaning service includes tasks such as dusting,
        vacuuming, mopping, scrubbing surfaces, and cleaning bathrooms and
        kitchens. Some services may also include laundry and ironing, or special
        tasks like organizing or deep cleaning.
      </p>
    )
  },
  {
    title: 'Do I need to provide cleaning supplies and equipment?',
    content: (
      <p>
        It depends on the service you choose. We provide their own supplies and
        equipment, while others may ask you to provide certain items. It's
        important to clarify this with the cleaning company before booking a
        service.
      </p>
    )
  },
  {
    title: 'Can I customize the cleaning tasks for my home?',
    content: (
      <p>
        Yes, we will allow you to customize the cleaning tasks for your home.
        It's a good idea to discuss your specific needs and preferences with the
        cleaning company before booking a service.
      </p>
    )
  },
  {
    title: 'How do I pay for a house cleaning service?',
    content: (
      <p>
        We offer online payment options such as PayPal or Venmo. You will be
        quoted for a price before the house cleaning service begins and billed
        after it is done.
      </p>
    )
  },
  {
    title: 'Do I need to be home during the cleaning service?',
    content: (
      <p>
        It's not always necessary to be home during a cleaning service, but it
        can be helpful to be there to discuss your specific needs and
        preferences with the cleaners. Some people prefer to leave a key with
        the cleaning company or use a smart lock to allow the cleaners access to
        the home.
      </p>
    )
  },
  {
    title: 'Is a house cleaning service worth the cost?',
    content: (
      <p>
        A house cleaning service can be a convenient and effective way to keep
        your home clean and organized, but it does come at a cost. Consider
        factors such as the size of your home, the tasks you need completed, and
        the frequency of cleanings when deciding if a house cleaning service is
        worth the cost for you.
      </p>
    ),
    bottom: true
  }
]

const Faq: NextPage = () => {
  return (
    <>
      <PageLayout title='CWL - Book Now'>
        <div className='p-24 max-sm:py-32 max-sm:px-2'>
          <p className='text-center text-3xl font-bold pb-8'>
            Frequently Asked Questions (F.A.Q)
          </p>
          <Accordion items={faqs} />
        </div>
      </PageLayout>
    </>
  )
}

export default Faq
