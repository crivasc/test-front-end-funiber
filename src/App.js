import ListContent from "./components/ListContent";
import Container from '@mui/material/Container';
import styles from './styles/App.module.scss';

function App() {
  return (
    <div className={`App ${styles.appContainer}`}>
        <Container maxWidth="md"  sx={{
          padding:'10px',
          borderRadius:'20px',
          background:'white',
          marginTop:'2rem',
          marginBottom:'2rem',
          boxShadow:'2px 10px 30px rgba(0,0,0,.2)'
        }}>
          <ListContent/>
        </Container>
    </div>
  );
}

export default App;
