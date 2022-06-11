import snarkdown from 'snarkdown';
import { Text } from '@chakra-ui/react';

const Markdown: React.FC<{ className?: string; text?: string }> = ({
  className,
  text,
  ...props
}) => {
  return (
    <>
      <Text
        {...props}
        dangerouslySetInnerHTML={{ __html: snarkdown(text || '') }}></Text>
    </>
  );
};

export default Markdown;
