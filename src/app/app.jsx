import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/main/main';
// import Register from '../pages/register/register';
// import Auth from '../pages/auth/auth';
// import Order from '../pages/order/order';
// import Success from '../pages/success/success';
// import Contacts from '../pages/contacts/contacts';
// import OrderActive from '../pages/order-active/order-active';
// import OrderFinished from '../pages/order-finished/order-finished';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			{/* <Route path="/sign-in" element={Auth} />
			<Route path="/sign-up" element={Register} />
			<Route path="/order" element={Order} />
			<Route path="/success" element={Success} />
			<Route path="/contacts" element={Contacts} />
			<Route path="/order-active" element={OrderActive} />
			<Route path="/order-finished" element={OrderFinished} /> */}
		</Routes>
	);
}

export default App;
