"use client";
import React, { useEffect } from "react";
import { useEmoji } from "@/context/EmojiContext";

const HomeComp: React.FC = () => {
  const { randomEmoji, fetchEmojis, getRandomEmoji } = useEmoji();

  useEffect(() => {
    fetchEmojis();
  }, []);

  const handleRandomEmoji = () => {
    getRandomEmoji();
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
                    className="emoji-container text-7xl cursor-pointer"
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

export default HomeComp;
