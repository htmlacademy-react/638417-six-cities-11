import MainPage from '../../pages/main-page/main-page';

type AppScreenProps = {
  favoritesCount: number;
}

function App({favoritesCount}: AppScreenProps): JSX.Element {
  return (
    <MainPage favoritesCount={favoritesCount} />
  );
}

export default App;
