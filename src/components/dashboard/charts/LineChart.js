import React from "react";
import { Line } from 'react-chartjs-2'

export const LineChart = () => {


	const data = {
		labels: ["1", "2", "3", "4", "2"],
		datasets: [
			{
				label: "Ultimas capturas de PH",
				fill: true,
				lineTension: 0.1,
				backgroundColor: "rgba(75,192,192,0.4)",
				borderColor: "rgba(75,192,192,1)",
				borderCapStyle: "butt",
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: "miter",
				pointBorderColor: "rgba(75,192,192,1)",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(75,192,192,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [1, 2, 1, 1, 5],
			},
		],
	};

	return (
		<div>
			<Line width={300} height={300} data={data} />
		</div>
	);
};
