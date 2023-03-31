import Title from './components/Title';
import GlobalInstance from './examples/4-global-instance';
// import "./axiosDefaults/global"

import CustomInstance from './examples/5-custom-instance';
import Interceptors from './examples/6-interceptors';

function App() {
  return (
    <main>
      <Title />
      {/* <GlobalInstance/> */}
      {/* <CustomInstance/> */}
      <Interceptors/>
    </main>
  );
}

export default App;
