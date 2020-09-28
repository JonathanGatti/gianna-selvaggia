import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins, sans-serif',
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    height: '50%',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: '300',
    letterSpacing: '0.3rem',
  },
  intro: {
    fontSize: '1.5em'
  },
  title: {
    fontSize: '3rem',
    fontWeight: '300',
    letterSpacing: '0.3rem',
    marginTop: '3rem',
  },
  h2: {
    fontWeight: '300',
    fontSize: '2.3em',
    margin: 0
  },
  linksContainer: {
    width: '90%',
    display: 'flex',
    justifyContent: 'space-around'
  },
  '@media (max-width: 1100px)':{
    linksContainer: {
      display: 'flex',
      flexDirection: 'column'
    },
    headerContainer: {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  link: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    fontSize: '2em',
    letterSpacing: '0.1em',
    '&:hover':{
      transform: 'scale(1.05)',
      transition: 'all 0.2s ease-in-out',
    },
  }
}))

export default useStyles;