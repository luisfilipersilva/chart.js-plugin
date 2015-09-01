var pieData = [ 
{
			value: 92.10,
			label: 'Telefonica',
			color: '#F7464A'
		},
		{
			value: 4.06,
			label: 'Embratel',
			color: '#FFC870'
		},
		{
			value: 2.67,
			label: 'GVT',
			color: '#5AD3D1'
		},
		{
			value : 0.85,
			label: 'Algar Telecom',
			color: '#616774'
		}
];
	var context = document.getElementById('skills').getContext('2d');
	var skillsChart = new Chart(context).Pie(pieData, {
		//responsive : true,
		//tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>%",
		//segmentStrokeColor : "#f9f9f9",
		segmentShowStroke: false,
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><div class=\"comm-how\"><%=segments[i].value%>%</div><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
	});
	//skillsChart.generateLegend();
	
         
	document.getElementById('js-legend').innerHTML = skillsChart.generateLegend();
