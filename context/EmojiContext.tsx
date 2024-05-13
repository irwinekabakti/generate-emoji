// import axios from "axios";
// import React, {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
//   ReactNode,
// } from "react";

// const EmojisContext = createContext([]);

// export const EmojisProvider = ({ children }: { children: ReactNode }) => {
//   const BASE_API = `https://emojihub.yurace.pro/api/all`;
//   const [emojis, setEmojis] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { data } = await axios.get(BASE_API);
//         setEmojis(data);
//       } catch (error) {
//         console.error("Error fetching emojis:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <EmojisContext.Provider value={emojis}>{children}</EmojisContext.Provider>
//   );
// };

// export const useEmojis = () => useContext(EmojisContext);
// //
