"use client";
import React, { useState } from "react";
import { useEmojiContext } from "@/context/EmojiContext";
import { EmojisProps } from "@/context/EmojiContext";

const Home: React.FC = () => {
  const { getRandomEmoji } = useEmojiContext();
  const [randomEmoji, setRandomEmoji] = useState<EmojisProps | null>(null);

  const handleRandomEmoji = () => {
    setRandomEmoji(getRandomEmoji());
  };

  return (
    <main className="mx-auto my-0 bg-[#FAF4E1]">
      <div className="p-6">
        <div className="bg-[#F8DD84]">
          <div className="title text-center  p-6">
            <h1 className="text-2xl py-5 text-[#509BB6] font-normal">
              What's <span className="text-black font-normal">your</span> emoji
              today?
            </h1>
          </div>

          <div className="content text-center  p-6">
            <button
              className="cursor-pointer italic text-[#4A7582]"
              onClick={handleRandomEmoji}>
              Click it!
            </button>
            <div className="text-center my-6">
              {randomEmoji && (
                <>
                  <div
                    className="text-7xl cursor-pointer"
                    onClick={handleRandomEmoji}
                    dangerouslySetInnerHTML={{
                      __html: randomEmoji.htmlCode[0],
                    }}
                  />
                  <p className="text-lg font-semibold mt-8">
                    {randomEmoji.group}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
