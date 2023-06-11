import { createContext, useContext, useState } from "react";

const CharacterAnimationContext = createContext({});
 
export const CharacterAnimationProvider = (props) => {
    const [animationIndex, setAnimationIndex] = useState(0);
    const [animations, setAnimations] = useState([]);
  return (
    <CharacterAnimationContext.Provider value={{
        animationIndex,
        setAnimationIndex,
        animations,
        setAnimations,
    }}>
      {props.children}
    </CharacterAnimationContext.Provider>
  );
};

export const useCharacterAnimation = () => {
    return useContext(CharacterAnimationContext)
}