import '../styles/Page.css';
import Aside from './Aside';
import Header from './Header';
import Main from './Main';
import { aside, header, main } from '../data/data';

function Page() {
  return (
    <div className="page">
        <Aside data={aside} />
        <div>
            <Header data={header} />
            <Main data={main} />
        </div>
    </div>
  );
}

export default Page;
