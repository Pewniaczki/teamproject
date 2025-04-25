import styles from './CurrentDetails.module.scss';

export const CurrentDetails: React.FC = () => {
  return (
    <div className="m-auto mb-16 flex flex-wrap justify-center gap-4">
      <div className="flex h-33.5 w-[400px] flex-col justify-center rounded-xl bg-[var(--color-grey-60)] px-2.5 py-0">
        <p className="mb-1.5 text-center text-2xl font-normal text-[var(--color-grey-0)]">
          Who will win
        </p>

        <div className="flex justify-center gap-1.5">
          <div className="h-10 w-full rounded-xl bg-[var(--color-secondary)]">
            <p className="text-center leading-10 font-bold text-[var(--color-grey-60)]">
              1
            </p>
          </div>

          <div className="h-10 w-full rounded-xl bg-[var(--color-primary)]">
            <p className="w-full text-center leading-10 font-bold text-[var(--color-grey-60)]">
              2
            </p>
          </div>
        </div>

        <p className="text-sm font-medium text-[var(--color-grey-0)]">
          Your prediction, your game - vote!
        </p>
      </div>

      <div className="flex h-33.5 w-[400px] flex-col justify-center rounded-xl bg-[var(--color-grey-60)] px-2.5 py-0">
        <p className="mb-1.5 text-center text-2xl font-normal text-[var(--color-grey-0)]">
          Will both teams score
        </p>

        <div className="flex justify-center gap-1.5">
          <div className="h-10 w-full rounded-xl bg-[var(--color-secondary)]">
            <p className="text-center leading-10 font-bold text-[var(--color-grey-60)]">
              Yes
            </p>
          </div>

          <div className="h-10 w-full rounded-xl bg-[var(--color-primary)]">
            <p className="text-center leading-10 font-bold text-[var(--color-grey-60)]">
              No
            </p>
          </div>
        </div>

        <p className="text-sm font-medium text-[var(--color-grey-0)]">
          Your prediction, your game - vote!
        </p>
      </div>

      <div className="flex h-33.5 w-[400px] flex-col justify-center rounded-xl bg-[var(--color-grey-60)] px-2.5 py-0">
        <p className="mb-1.5 text-center text-2xl font-normal text-[var(--color-grey-0)]">
          Who will score first
        </p>

        <div className="flex justify-center gap-1.5">
          <div className="h-10 w-full rounded-xl bg-[var(--color-secondary)]">
            <p className="text-center leading-10 font-bold text-[var(--color-grey-60)]">
              1
            </p>
          </div>

          <div className="h-10 w-full rounded-xl bg-[var(--color-grey-30)]">
            <p className="text-center leading-10 font-bold text-[var(--color-grey-60)]">
              Withoutnheads
            </p>
          </div>

          <div className="h-10 w-full rounded-xl bg-[var(--color-primary)]">
            <p className="text-center leading-10 font-bold text-[var(--color-grey-60)]">
              2
            </p>
          </div>
        </div>
        <p className="text-sm font-medium text-[var(--color-grey-0)]">
          Your prediction, your game - vote!
        </p>
      </div>

      <div className="flex h-33.5 w-[400px] flex-col justify-center rounded-xl bg-[var(--color-grey-60)] px-2.5 py-0">
        <p className="mb-1.5 text-center text-2xl font-normal text-[var(--color-grey-0)]">
          Will there be a draw
        </p>

        <div className="flex justify-center gap-1.5">
          <div className="h-10 w-full rounded-xl bg-[var(--color-secondary)]">
            <p className="text-center leading-10 font-bold text-[var(--color-grey-60)]">
              Yes
            </p>
          </div>

          <div className="h-10 w-full rounded-xl bg-[var(--color-primary)]">
            <p className="text-center leading-10 font-bold text-[var(--color-grey-60)]">
              No
            </p>
          </div>
        </div>

        <p className="text-sm font-medium text-[var(--color-grey-0)]">
          Your prediction, your game - vote!
        </p>
      </div>
    </div>
  );
};
