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
    fontSize: '18px'
  },
  title: {
    fontSize: '32px',
    marginTop: '100px',
    fontWeight: '300',
  },
  h2: {
    fontWeight: '300',
    fontSize: '28px',
    margin: 0
  },
  linksContainer: {
    width: '90%',
    display: 'flex',
    justifyContent: 'space-around'
  },
  '@media (max-width: 900px)':{
    linksContainer: {
      display: 'flex',
      flexDirection: 'column'
    },
    headerContainer: {
      display: 'flex',
      flexDirection: 'column'
    },
    homeImg : {
      marginLeft: '200px',
      marginTop: 0
    }
  },
  link: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    fontSize: '24px',
    letterSpacing: '0.1em',
    '&:hover':{
      transform: 'scale(1.05)',
      transition: 'all 0.2s ease-in-out',
    },
  }
}))

export default useStyles;