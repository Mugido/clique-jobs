import {Link} from 'react-router-dom'
import UserCard from './UserCard'

const UserHomeCards = () => {
  return (
    <section className='py-4'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <UserCard bg='bg-gray-100'>
            <h2 className='text-2xl font-bold'>For Fashion Designers</h2>
            <p className='mt-2 mb-4'>
              Browse our Fashion jobs and start your career today
            </p>
            <Link
              to='/user-jobs'
              className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
            >
              Browse Jobs
            </Link>
          </UserCard>

          <UserCard bg='bg-indigo-100'>
            <h2 className='text-2xl font-bold'>For Employees</h2>
            <p className='mt-2 mb-4'>
            Discover exciting fashion job opportunities and apply for your dream role
            </p>
            <Link
              to='/apply-job'
              className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600'
            >
              Apply Job
            </Link>
          </UserCard>

          {/* <Card >
            <div className='bg-indigo-100'>
            <h2 className='text-2xl font-bold'>For Employers</h2>
            <p className='mt-2 mb-4'>
              List your job to find the perfect Fashion Designer for the role
            </p>
            <a
              href='/add-job.html'
              className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600'
            >
              Add Job
            </a>
            </div>
          </Card> */}

        </div>
      </div>
    </section>
  );
};
export default UserHomeCards;