// import './App.css';
import Calculator from "./Calculator";

function App() {
	return (
		<>
			<h1 className="flex justify-center py-3 px-4 text-2xl font-bold text-blue-500">
				Calculadora de precios
			</h1>
			<hr className="mb-4" />
			<div className="flex justify-center">
				<Calculator />
			</div>
		</>
	);
}

export default App;
