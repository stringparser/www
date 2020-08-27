import { Box, Theme, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: '0.25rem',
    borderRadius: '50%',
    backgroundColor: 'snow',
  }
});

const Logo: React.FC = () => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      alignContent="center"
      justifyContent="center"
      className={classes.root}
    >
      <img
        src={require('./logo-black.png')}
        width="24px"
        height="24px"
      />
    </Box>
  );
};

export default Logo;