import { Outlet, useRoutes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { TodosRoutes } from '../features/todos/routes';

const App = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export const AppRoutes = () => {
  const routes = [
    {
      path: '/app',
      element: <App />,
      children: [{ path: 'todos/*', element: <TodosRoutes /> }],
    },
  ];
  const element = useRoutes([...routes]);
  return <>{element}</>;
};
