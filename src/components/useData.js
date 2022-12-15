import { useEffect, useState } from "react";
import baseURL from "./api";

export const useData = (url, name) => {
	const [state, setState] = useState();
	const namee = name || 'data';

	useEffect(() => {
		const dataFetch = async () => {
			const data = await (await fetch(baseURL + 'api/' + url)).json();

			setState(data);
		};

		dataFetch();
	}, [url]);

	var data = {};
	data[namee] = state
	return data;
};