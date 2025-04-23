import { useNavigate } from 'react-router-dom';

export const Page404: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className='text-[var(--color-grey-0)] font-normal mb-3.5'>Are you lost?</h1>
      <p onClick={() => navigate(-1)} className='text-[var(--color-grey-0)] font-normal'>{`-> Go back <-`}</p>
    </>
  );
};
