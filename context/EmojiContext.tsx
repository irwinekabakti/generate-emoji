"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Define the EmojisProps interface
export interface EmojisProps {
  name: string;
  category: string;
  group: string;
  htmlCode: string[];
  unicode: string[];
}

interface EmojiContextProps {
  emojis: EmojisProps[];
  getRandomEmoji: () => EmojisProps | null;
}

const EmojiContext = createContext<EmojiContextProps | undefined>(undefined);

export const useEmojiContext = () => {
  const context = useContext(EmojiContext);
  if (!context) {
    throw new Error("useEmojiContext must be used within an EmojiProvider");
  }
  return context;
};

export const EmojiProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const BASE_API = `https://emojihub.yurace.pro/api/all`;
  const [emojis, setEmojis] = useState<EmojisProps[]>([]);

  const fetchEmojis = async () => {
    try {
      const { data } = await axios.get<EmojisProps[]>(BASE_API);
      setEmojis(data);
    } catch (error) {
      console.error("Error fetching emojis:", error);
    }
  };

  const getRandomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  };

  useEffect(() => {
    fetchEmojis();
  }, []);

  return (
    <EmojiContext.Provider value={{ emojis, getRandomEmoji }}>
      {children}
    </EmojiContext.Provider>
  );
};
