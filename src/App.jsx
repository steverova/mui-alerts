import { Button } from '@mui/material';
import './App.css';
import useDialog from './components/AlertDialog/context/useDialog';

function App() {

  const { AlertDialog } = useDialog();

  const test = async () => {
    const response = await AlertDialog.success({
      title: "success",
      message: "Se abrio el success",
    });

    console.log("respuesta del dialog", response);
  };

  return (
    <div className="App bg-yellow-300">
      <Button onClick={test} variant='contained' color='success'>Success</Button>
    </div>
  );
}

export default App;
