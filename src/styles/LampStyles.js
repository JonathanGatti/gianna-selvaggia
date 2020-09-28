import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '40%',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    color: 'rgba(255, 255, 255, 0.7)'
  },
  image: {
    width: '300px',
    height: '300px',
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  title: {
    fontSize: '2.8rem',
  },
  description: {
    fontSize: '1.4em',
  },
  price: {
    fontSize: '2rem',
  },
  btns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    fontSize: '1.2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.7)'
  }
}));

export default useStyles;