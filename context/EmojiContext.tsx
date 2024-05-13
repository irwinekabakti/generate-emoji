"use client";
import axios from "axios";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface EmojiData {
  name: string;
  category: string;
  group: string;
  htmlCode: string[];
  unicode: string[];
}

interface EmojiContextType {
  emojis: EmojiData[];
  randomEmoji: EmojiData | null;
  fetchEmojis: () => void;
  getRandomEmoji: () => void;
}

const EmojiContext = createContext<EmojiContextType>({
  emojis: [],
  randomEmoji: null,
  fetchEmojis: () => {},
  getRandomEmoji: () => {},
});

interface EmojiProviderProps {
  children: ReactNode;
}

export const EmojiProvider: React.FC<EmojiProviderProps> = ({ children }) => {
  const BASE_API = `https://emojihub.yurace.pro/api/all`;

  const [emojis, setEmojis] = useState<EmojiData[]>([]);
  const [randomEmoji, setRandomEmoji] = useState<EmojiData | null>(null);

  const fetchEmojis = async () => {
    try {
      const { data } = await axios.get<EmojiData[]>(BASE_API);
      setEmojis(data);
      if (data.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomEmoji(data[randomIndex]);
      }
    } catch (error) {
      console.error("Error fetching emojis:", error);
    }
  };

  const getRandomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    setRandomEmoji(emojis[randomIndex]);
  };

  return (
    <EmojiContext.Provider
      value={{ emojis, randomEmoji, fetchEmojis, getRandomEmoji }}>
      {children}
    </EmojiContext.Provider>
  );
};

export const useEmoji = () => useContext(EmojiContext);
