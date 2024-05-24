import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./components/App";
import '../assets/main.css';
// import { AuthClient } from '@dfinity/auth-client';

const init = async () => {

  const container = document.getElementById('root');
  const root = createRoot(container);  // Use createRoot instead of ReactDOM.render
  root.render(<App />);
  // const authClient = await AuthClient.create();

  // if(await authClient.isAuthenticated()){
  //   handleAuthenticated(authClient);
  // }
  // else{
  //   await authClient.login({
  //     identityProvider: "https://identity.ic0.app/#authorize",
  //     onSuccess: () => {
  
  //       handleAuthenticated(authClient);
  //     }
  //   });
  // }
  // async function handleAuthenticated(authClient){
  //   root.render(<App />);
  // };
  
}



init();
