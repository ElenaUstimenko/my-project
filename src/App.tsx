import useTheme from '@hooks/useTheme';
import Navbar from '@components/Navbar/Navbar';
import AppRouter from '@utils/helpers/AppRouter';
import Sidebar from '@components/Sidebar/Sidebar';
import '@styles/index.scss';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <div className="page-content">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;