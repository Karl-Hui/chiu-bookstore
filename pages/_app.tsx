import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { wrapper } from '../store/index';

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
}
export default App;
