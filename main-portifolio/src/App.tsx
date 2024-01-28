import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/root';

function App() {
  return (
    <>
      {/* <a href='https://contas-casa.vercel.app/'>contas casa</a> */}
      <a href='/projetos/contas-casa'>contas casa</a>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
