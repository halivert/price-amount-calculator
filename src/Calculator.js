import React from "react";
import Input from "./components/Input";

function Calculator() {
	const [price, setPrice] = React.useState(0);
	const [units, setUnits] = React.useState(0);
	const [pricePerUnit, setPricePerUnit] = React.useState(0);
	const [secondUnits, setSecondUnits] = React.useState(0);

	React.useEffect(() => {
		if (price > 0 && units > 0) {
			setPricePerUnit(price / units);
		} else {
			setPricePerUnit(0);
		}
	}, [price, units]);

	return (
		<form className="w-full px-6 md:w-2/4 flex justify-center" onSubmit={null}>
			<fieldset>
				<div className="flex flex-col gap-2 mb-3 md:flex-row">
					<Input
						type="number"
						label="Cantidad"
						name="units"
						min="0"
						value={units}
						onChange={(evt) => setUnits(evt.target.value)}
						autoFocus
					/>

					<Input
						type="number"
						label="Precio (MXN $)"
						name="price"
						min="0"
						value={price}
						onChange={(evt) => setPrice(evt.target.value)}
					/>
				</div>

				<div className="flex flex-col gap-2 md:flex-row justify-center md:items-center md:justify-start">
					<Input
						type="number"
						label="Cantidad 2"
						name="second-units"
						value={secondUnits}
						onChange={(evt) => setSecondUnits(evt.target.value)}
						min="0"
					/>

					<div className="md:ml-2 flex gap-2">
						<label className="font-bold mb-1">Total:</label>
						<span>${(pricePerUnit * secondUnits).toFixed(2)} MXN</span>
					</div>
				</div>
			</fieldset>
		</form>
	);
}

export default Calculator;
