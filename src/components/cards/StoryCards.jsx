import React from "react";

const StoryCards = () => {
  return (
    <div className="flex flex-row md:flex md:flex-row lg:flex-row w-screen md:w-[800px] md:m-auto gap-2.5 p-1 md:p-3 items-center justify-center overflow-x-auto no-scrollbar">
      {/* cards comp */}
      <div className="h-28 w-20 md:h-36 md:w-24 bg-gray-500 relative cursor-pointer rounded-xl flex items-center justify-center">
        <p className="text-gray-100 font-light md:font-base text-sm md:text-sm text-center opacity-60">
          + add story
        </p>
      </div>

      <img
        className="h-28 w-20 md:h-36 md:w-24 flex cursor-pointer rounded-xl "
        src="https://wallpapers.com/images/high/aesthetic-view-of-vietnam-s-halong-bay-hgv9um9jx8c4dr9d.webp"
        alt=""
      />

      <img
        className="h-28 w-20 md:h-36 md:w-24 relative cursor-pointer rounded-xl "
        src="https://wallpapers.com/images/high/tree-swing-set-on-a-hill-2er1mhvywpsr0pnw.webp"
        alt=""
      />

      <img
        className="h-28 w-20 md:h-36 md:w-24 relative cursor-pointer rounded-xl "
        src="https://wallpapers.com/images/high/hill-background-dgugwucv383ap7ok.webp"
        alt=""
      />

      <img
        className="h-28 w-20 md:h-36 md:w-24 relative cursor-pointer rounded-xl "
        src="https://wallpapers.com/images/high/staring-in-hill-with-sadness-y6ovjc1994bl9jwe.webp"
        alt=""
      />

      {/* <img
        className="h-28 w-20 md:h-36 md:w-24 relative cursor-pointer rounded-xl "
        src="https://wallpapers.com/images/high/tree-swing-set-on-a-hill-2er1mhvywpsr0pnw.webp"
        alt=""
      /> */}
    </div>
  );
};

export default StoryCards;
