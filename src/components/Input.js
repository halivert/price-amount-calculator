export default function Input({ label, name, className = "", ...props }) {
	return (
		<div className="flex flex-col">
			<label htmlFor={name} className="font-bold mb-1">
				{label}
			</label>

			<div className="relative">
				<input
					className={`${className} outline-none border-2 rounded border-blue-200 hover:border-blue-500 focus:border-blue-500 px-2 py-1 text-black-400 w-full`}
					id={name}
					{ ...props }
				/>
			</div>
		</div>
	);
}
