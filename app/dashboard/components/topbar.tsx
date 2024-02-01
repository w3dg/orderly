"use client";

const TopBar = () => {
  return (
    <div className="h-20 lg:py-4 mb-4 bg-gradient-to-r from-red-400 via-amber-500 to-yellow-600 w-full flex flex-col items-stretch justify-center text-white font-bold px-5 lg:px-20">
      <p>{new Intl.DateTimeFormat("en-GB").format(new Date())}</p>
    </div>
  );
};
export default TopBar;
