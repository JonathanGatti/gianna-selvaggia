import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontWeight: '300',
    marginBottom: '30px'
  },
  root: {
    flexGrow: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'transparent',
    width: '300px',
    '&:hover': {
      transform: 'scale(1.05)',
      transition: 'all 0.2s ease-in-out'
    }
  },
  '@media (max-width: 900px)':{
    root: {
      marginLeft: '100px',
      marginTop: '10px'
    }
  },
  img: {
    width: '300px',
    height: '300px',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  link: {
    fontSize: '16px',
    marginTop: '15px',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  }
}));

export default useStyles;
