export default (theme) => ({
  loaderContainer: {
    padding: '0',
    margin: '0',
    textAlign: 'center',
    backgroundColor: '#EEE',
    width: '100vw',
    height: '100vh',
    zIndex: '999',
    opacity: '0.8',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  loaderWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  loader: {
    width: '5rem',
    height: '5rem',
  },
})
