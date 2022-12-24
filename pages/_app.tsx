import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthContextProvider } from '../context/AuthUserContext';
import { useRouter } from 'next/router';
import ProtectedRoute from '../components/protected_route';
import Navbar from '../components/navbar';
import { useApollo } from '../lib/apolo_client';
import { ApolloProvider } from '@apollo/client';
const noAuthRequired = ['/', '/login', '/signup']

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <AuthContextProvider>
      <ApolloProvider client={apolloClient}>
        <Navbar />
        {noAuthRequired.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        )}
      </ApolloProvider>
    </AuthContextProvider>
  );
}
