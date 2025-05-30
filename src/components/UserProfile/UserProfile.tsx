import { useQuery } from '@tanstack/react-query';

type User = {
  name: string;
  email: string;
  phone: string;
  location: string;
  avatar: string;
};

const fetchUser = (): Promise<User> =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 (123) 456-7890',
        location: 'San Francisco, USA',
        avatar: 'https://i.pravatar.cc/512?img=52',
      });
    }, 2000)
  );

export const UserProfile = () => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery<User>({
    queryKey: ['user'],
    queryFn: fetchUser,
  });

  if (isLoading)
    return (
      <div className="mt-10 text-center text-white">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-b-2 border-white" />
        <p>Loading user data...</p>
      </div>
    );

  if (error instanceof Error)
    return (
      <div className="mt-10 text-center text-red-400">
        <p>Error: {error.message}</p>
      </div>
    );

  return (
    <div className="mt-10 grid w-auto items-center justify-center gap-8 rounded-2xl bg-[var(--color-grey-70)] p-8 text-white">
      <div className="flex flex-col gap-4 space-x-4 lg:flex-row lg:items-center lg:gap-8">
        <img
          src={user?.avatar}
          alt="User avatar"
          className="aspect-square h-75 rounded-full border-2 border-zinc-700 lg:h-50"
        />
        <div>
          <h2 className="text-3xl font-bold">{user?.name}</h2>
          <p className="text-sm text-zinc-400">{user?.location}</p>
        </div>
      </div>

      <div className="flex flex-col justify-around gap-4 lg:flex-row">
        <div className="grid gap-1">
          <h3 className="text-xl font-semibold text-zinc-200">E-mail:</h3>
          <p className="text-zinc-400">{user?.email}</p>
        </div>
        <div className="grid gap-1">
          <h3 className="text-xl font-semibold text-zinc-200">Phone:</h3>
          <p className="text-zinc-400">{user?.phone}</p>
        </div>
      </div>
    </div>
  );
};
