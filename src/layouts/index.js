import Button from './components/common/Button/Button';

export default () => {
  return (
    <div className='border border-red-500 min-h-screen grid grid-cols-12 items-center justify-items-center'>
      <h1 className="text-5xl font-bold text-[#070710] col-span-12 text-center">
        The Best App Tasks Management
      </h1>
      <div className='col-span-12'>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}