import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '50%',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    color: 'rgba(255, 255, 255, 0.7)'
  },
  image: {
    width: '300px',
    height: '300px',
  },
  img: {
    float: 'right',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  '@media (max-width: 900px)': {
    img: {
      float: 'left'
    },
    btn: {
      width: '100px',
      height: '45px',
    }
  },
  title: {
    fontSize: '22px',
  },
  description: {
    fontSize: '18px',
  },
  price: {
    fontSize: '22px',
  },
  btns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    fontSize: '13px',
    backgroundColor: 'rgba(255, 255, 255, 0.7)'
  }
}));

export default useStyles;