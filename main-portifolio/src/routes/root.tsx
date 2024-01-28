import { createBrowserRouter } from 'react-router-dom';
import { UnderConstruction } from '../pages/under-construction/under-construction';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <UnderConstruction />
  }
]);
