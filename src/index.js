import {React , StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
// import "bootstrap/dist/js/bootstrap.bundle.min";

const queryClient = new QueryClient();
const rootElement = document.getElementById('root');
rootElement.style = 'background-color: black'
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <App/>
            <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
    </StrictMode>
);
