import { Affix, Button, Stack } from "@mantine/core";
import { useCharacterAnimation } from "../context/CharacterAnimation";

const InterFace = () => {
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimation();
  return (
    <Affix position={{ bottom: 50, right: 20 }}>
      <Stack>
        {animations.map((animation, index) => (
          <Button
            key={animation}
            variant={index === animationIndex ? "filled" : "light"}
            onClick={() => setAnimationIndex(index)}
          >
            {animation}
          </Button>
        ))}
      </Stack>
    </Affix>
  );
};

export default InterFace;
