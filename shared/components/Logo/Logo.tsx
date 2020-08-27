import { Box, useTheme } from "@material-ui/core";

const Logo: React.FC = () => {
  const theme = useTheme();

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