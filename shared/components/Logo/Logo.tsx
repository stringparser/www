import { Box } from "@material-ui/core";
import logoImage from './logo-white.png';

const Logo: React.FC = () => (
  <Box
    display="flex"
    alignContent="center"
    justifyContent="center"
  >
    <img
      src={logoImage}
      width="32px"
      height="32px"
    />
  </Box>
);

export default Logo;