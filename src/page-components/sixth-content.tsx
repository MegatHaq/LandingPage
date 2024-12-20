import Image from "next/image";

type SixthContentProps = {
  className: string;
};

export const SixthContent = (props: SixthContentProps) => {
  return (
    <div {...props}>
      <div className="w-1/2">
        <h1 className="text-7xl font-bold text-orange-400">CODE EDITORS</h1>
        <p className="text-2xl mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
      </div>
      <div className="w-1/2 relative">
        <svg
          width="400"
          height="400"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute z-0 left-28"
        >
          <rect
            width="350"
            height="350"
            x="10"
            y="10"
            rx="100%"
            ry="100%"
            fill="#ff7747"
          />
        </svg>
        <svg
          width="400"
          height="400"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute z-0 right-20 top-6"
        >
          <rect
            width="350"
            height="350"
            x="10"
            y="10"
            rx="100%"
            ry="100%"
            fill="#ff5757"
          />
        </svg>
        <Image
          src={"/blobs/atom.svg"}
          width={400}
          height={400}
          alt=""
          className="mx-auto z-10 relative"
        />
      </div>
    </div>
  );
};
