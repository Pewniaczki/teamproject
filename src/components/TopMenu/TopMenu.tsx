import { useState } from 'react';
import { Link } from 'react-router-dom';

export const TopMenu: React.FC = () => {
  const links = [
    ['#all', 'All'],
    ['#live', 'Live'],
    ['#finished', 'Finished'],
    ['#scheduled', 'Scheduled'],
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav
      id="nav-component"
      className="after relative mb-2.5 flex lg:mb-8 lg:w-full lg:px-2.5 lg:py-0"
    >
      <div className="mr-[4%] lg:w-[calc(160px+4%)]">
        <Link
          className={`mr-[4%] leading-10 font-bold no-underline lg:text-3xl`}
          to={links[activeIndex][0]}
        >
          {links[activeIndex][1]}
        </Link>
      </div>

      <div className="relative flex w-full gap-x-[18%] overflow-auto pr-6.5 lg:justify-evenly lg:p-0">
        {links.map((link, index) => (
          <Link
            onClick={() => setActiveIndex(index)}
            key={link[0]}
            className={`font-boldtext-[var(--color-grey-50)] leading-10 no-underline lg:text-3xl lg:text-[var(--color-grey-30)] ${activeIndex === index && 'hidden'} )`}
            to={link[0]}
          >
            {link[1]}
          </Link>
        ))}
      </div>
    </nav>
  );
};
