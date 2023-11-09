import ReactDOM from 'react-dom/client';

import Layout from './app/Layout.tsx';
import { CanProvider } from './lib/providers/CanProvider.tsx';
import { BackgroundProvider } from './lib/providers/BackgroundProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<CanProvider>
		<BackgroundProvider>
			<Layout />
		</BackgroundProvider>
	</CanProvider>
);