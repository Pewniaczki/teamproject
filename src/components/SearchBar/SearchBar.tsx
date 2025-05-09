type Props = {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
};

export const SearchBar: React.FC<Props> = ({ setSearchQuery, searchQuery }) => {

  return (
    <div className="mb-4 flex h-20 items-center justify-between border-b-1 border-b-[var(--color-grey-50)] bg-[var(--color-grey-70)]">
      <p className="ml-2.5 text-3xl leading-20 font-bold text-[var(--color-grey-20)]">
        Matches
      </p>

      <div className="mr-7.5 flex h-12 justify-baseline rounded-sm border-1 border-[var(--color-grey-30)] bg-[var(--color-grey-80)] p-1.5">
        <img src="./UI_Elements/search.svg" />

        <input
          className="border-none bg-inherit text-[var(--color-grey-40)]"
          type="text"
          value={searchQuery}
          placeholder="Search team"
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button
          type="button"
          onClick={() => setSearchQuery('')}
          className="my-auto flex size-5 justify-center text-[var(--color-grey-40)]"
        >
          ✖
        </button>
      </div>
    </div>
  );
};
