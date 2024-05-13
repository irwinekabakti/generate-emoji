"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface EmojisProps {
  name: string;
  category: string;
  group: string;
  htmlCode: string[];
  unicode: string[];
}

export default function Home() {
  const BASE_API = `https://emojihub.yurace.pro/api/all`;

  const [emojis, setEmojis] = useState<EmojisProps[]>([]);
  const [randomEmoji, setRandomEmoji] = useState<EmojisProps | null>(null);

  const getImage = async () => {
    try {
      const { data } = await axios.get<EmojisProps[]>(BASE_API);
      setEmojis(data);
    } catch (error) {
      console.error("Error fetching emojis:", error);
    }
  };

  const handleRandomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    setRandomEmoji(emojis[randomIndex]);
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <main className="mx-auto my-0 bg-[#FAF4E1]">
      <div className="bg-[#F8DD84]">
        <div className="title text-center p-6">
          <h1 className="text-2xl py-5 text-[#509BB6] font-normal">
            What's <span className="text-black font-normal">your</span> emoji
            today?
          </h1>
        </div>

        <div className="content text-center p-6">
          <button
            className="cursor-pointer italic text-[#4A7582]"
            onClick={handleRandomEmoji}>
            Click it!
          </button>
          <div className="text-center my-6">
            {randomEmoji && (
              <>
                <div
                  className="text-7xl"
                  dangerouslySetInnerHTML={{ __html: randomEmoji.htmlCode[0] }}
                />
                <p className="text-lg font-semibold mt-2">
                  {randomEmoji.group}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
