import { Box, Theme } from "@material-ui/core";

type Props = {
  theme: Theme;
};

const Logo: React.FC<Props> = ({ theme }) => {

  return (
    <Box
      display="flex"
      alignContent="center"
      justifyContent="center"
    >
      <img
        src={theme.palette.type === 'light'
          ? require('./logo-black.png')
          : require('./logo-white.png')
        }
        width="32px"
        height="32px"
      />
    </Box>
  );
};

export default Logo;