import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Quotes from "./components/Quotes";

const quotesList = [
  "The only way to do great work is to love what you do.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "Believe you can and you're halfway there.",
  "Life is what happens when you're busy making other plans.",
  "It always seems impossible until it's done.",
];

function App() {
  const notify = () => toast("Quote succesvol toegevoegd!");

  return (
    <div>
      <Quotes quotes={quotesList} showToast={notify} />
      <ToastContainer />
    </div>
  );
}

export default App;
