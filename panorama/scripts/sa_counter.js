"use strict";

function OnUnitsChanged(table, key, data)
{
	if (key == "sa_counter")
	{
		var unitsLeft = data.unitsLeft
		var allUnits = data.allUnits

		$("#Counter").style.visibility = "visible"
		$("#Counter").text = ("Осталось "+ unitsLeft).toUpperCase()

		var progressBarValue = (1 - ( unitsLeft/allUnits ) )
		$("#CounterProgressBar").value = progressBarValue

		if ( unitsLeft == 0 ){
			$("#Container").AddClass("Hidden")
		}else{
			$("#Container").RemoveClass("Hidden")
		}		
	}
}

(function()
{
	$("#Container").AddClass("Hidden")

	CustomNetTables.SubscribeNetTableListener("sa_player_table", OnUnitsChanged)
})();