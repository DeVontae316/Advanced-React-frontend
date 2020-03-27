import {createContext,useState,useContext} from 'react';
import { is } from 'date-fns/locale';


const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function StateProvider({children}){
    const [iscartOpen,setState] = useState(true);

    function toggleCart(){
        setState(!iscartOpen);
    }
    

    return <LocalStateProvider value={{iscartOpen,toggleCart}}>
        {children}
    </LocalStateProvider>
}

function useCart(){
  const all = useContext(LocalStateContext);

  return all;
}


export{StateProvider,LocalStateContext,useCart};