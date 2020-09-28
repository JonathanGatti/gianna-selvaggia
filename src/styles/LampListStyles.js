import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  root: {
    flexGrow: 1,
    margin: '3rem',
    backgroundColor: 'transparent',
    width: '300px',
    '&:hover': {
      transform: 'scale(1.05)',
      transition: 'all 0.2s ease-in-out'
    }
  },
  img: {
    width: '300px',
    height: '300px',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  link: {
    fontSize: '1.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  }
}));

export default useStyles;
