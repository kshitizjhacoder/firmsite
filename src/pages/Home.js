import Aboutus from './components/Aboutus';
import Appreciated from './components/Appreciated';
import Innerbody from './components/Innerbody/Innerbody';
import Services from './components/Services';
import Working from './components/Working';

const Home=()=>{
    return (
        <div>
          <Innerbody/>
          <Appreciated />
          <Services />
          <Working />
          <Aboutus/>
        </div>
  );
}
export default Home;