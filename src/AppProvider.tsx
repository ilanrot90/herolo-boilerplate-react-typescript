import React from 'react';
import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from 'router/history';
import configureStore from './store';

interface IProps {
	children: ReactNode;
}

const store = configureStore();
const AppProvider: React.FC<IProps> = ({ children }: IProps) => {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>{children}</ConnectedRouter>
		</Provider>
	);
};

export default AppProvider;
