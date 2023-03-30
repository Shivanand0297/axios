import Title from './components/Title';
import GlobalInstance from './examples/4-global-instance';
import "./axiosDefaults/global"


function App() {
  return (
    <main>
      <Title />
      <GlobalInstance/>
      <CustomInstance/>
    </main>
  );
}

export default App;
