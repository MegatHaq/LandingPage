type SeventContentProps = {
  className: string;
};
// TODO : UPDATE LOREMP
export const SeventContent = (props: SeventContentProps) => {
  return (
    <div {...props}>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-0 mt-[-50vh] opacity-50"
      >
        <path
          fill="#CCCCCC"
          d="M28.2,-31.1C35.6,-13.2,40.1,-1.5,38.4,9.8C36.6,21.1,28.7,32,17.1,38.8C5.6,45.6,-9.5,48.4,-20.7,43C-31.9,37.6,-39.2,24.1,-45.1,7.6C-51.1,-9,-55.7,-28.5,-48,-46.5C-40.2,-64.5,-20.1,-81,-4.9,-77.1C10.4,-73.2,20.8,-49,28.2,-31.1Z"
          transform="translate(100 100)"
        />
      </svg>
      <div className="w-full mt-[15vh] relative z-10">
        <div className="h-[7px] w-1/5 bg-green-500 mb-4 mx-auto" />
        <h1 className="text-7xl font-bold text-center">
          The Ultimate Element Library
        </h1>
        <p className="text-2xl mx-[10vw] mt-4 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};
