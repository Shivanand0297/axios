import Title from './components/Title';
import GlobalInstance from './examples/4-global-instance';
// import "./axiosDefaults/global"

import CustomInstance from './examples/5-custom-instance';

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
