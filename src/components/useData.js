import { useEffect, useState } from "react";
import baseURL from "./api";

export const useData = (url) => {
	const [state, setState] = useState();

	useEffect(() => {
		const dataFetch = async () => {
			const data = await (await fetch(baseURL + url)).json();

			setState(data);
		};

		dataFetch();
	}, [url]);

	return { data: state };
};