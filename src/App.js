import './App.css';
import Alert from './components/Alert';
import Form from './components/Form';
import List from './components/List';
import { useGlobalContext } from './context';

function App() {
  const { alert, items } = useGlobalContext();

  return (
    <>
      {alert.show && <Alert type={alert.type} msg={alert.message} />}
      <h1>budget app</h1>
      <main className='App'>
        <Form />
        <List />
      </main>
      <h1>
        total spending :
        <span className='total'>
          $
          {items.reduce((acc, item) => {
            return (acc += parseInt(item.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
