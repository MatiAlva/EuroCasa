import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';
import Article from './components/Article/Article';
import theme from './components/constants/theme';
import {ThemeProvider} from 'styled-components'


function App() {
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Header />
        <Section />
        <Article />
        <Footer />
      </ThemeProvider> 
    </Layout>
  );
}

export default App;
