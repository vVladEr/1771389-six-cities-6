import MainPage from '../../pages/main/main';

type AppPops = {
    cardsAmount : number;
}

function App({cardsAmount} : AppPops) {
  return (<MainPage cardsAmount={cardsAmount}/>);
}

export default App;
