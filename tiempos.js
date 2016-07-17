var arrTiempos=["56", "6:55", "53", "6:46", "9:16"];
//["56", "2:25", "6:47", "1:25:25", "9:25"];

document.write(totalTiempo(arrTiempos)+"<br>");
document.write(promedioTiempos(arrTiempos));

function totalTiempo (arrTiempos) {
	var count, string, seg, min, hrs, sep1, sep2, seconds, tiempoFinal, resultHoras, resultMin, resultSeg;
	seconds=0;
	tiempoFinal="";

	for(i=0;i<arrTiempos.length;i++) {
		string=arrTiempos[i];
		count = (string.match(/:/g) || []).length;
		
		if(count==0){
			seg= Number(string);
			seconds+= seg;
		}else if(count==1){
			sep1=string.indexOf(":");
			min=Number(string.substr(0,sep1));
			seg=Number(string.substr(sep1+1));
			seconds+= seg + (min*60);
		}else{
			sep1=string.indexOf(":");
			sep2=string.lastIndexOf(":");
			hrs=Number(string.substr(0,sep1))
			min=Number(string.substr(sep1+1, sep2-sep1-1));
			seg=Number(string.substr(sep2+1));
			seconds+= seg + (min*60) + (hrs*3600);
		}
	}

	resultHoras= Math.floor(seconds/3600);
	resultMin=Math.floor((seconds- (3600*resultHoras))/60);
	resultSeg=seconds-((resultHoras*3600)+(resultMin*60));
	
	tiempoFinal= (resultHoras + "h " + resultMin + "m " + resultSeg +"s");
	return tiempoFinal;
}



function promedioTiempos(arrTiempos) {
	var count, string, seg, min, hrs, sep1, sep2, seconds, tiempoFinal, resultHoras, resultMin, resultSeg;
	seconds=0;
	tiempoFinal="";

	for(i=0;i<arrTiempos.length;i++) {
		string=arrTiempos[i];
		count = (string.match(/:/g) || []).length;
		
		if(count==0){
			seg= Number(string);
			seconds+= seg;
		}else if(count==1){
			sep1=string.indexOf(":");
			min=Number(string.substr(0,sep1));
			seg=Number(string.substr(sep1+1));
			seconds+= seg + (min*60);
		}else{
			sep1=string.indexOf(":");
			sep2=string.lastIndexOf(":");
			hrs=Number(string.substr(0,sep1))
			min=Number(string.substr(sep1+1, sep2-sep1-1));
			seg=Number(string.substr(sep2+1));
			seconds+= seg + (min*60) + (hrs*3600);
		}
	}

	seconds=seconds/arrTiempos.length;
	resultHoras= Math.floor(seconds/3600);
	resultMin=Math.floor((seconds- (3600*resultHoras))/60);
	resultSeg=Math.floor(seconds-((resultHoras*3600)+(resultMin*60)));
	
	if(resultHoras==0 && resultMin!=0){
		tiempoFinal= (resultMin + "m " + resultSeg +"s");
	}else if(resultHoras==0 && resultMin==0){
		tiempoFinal= (resultSeg +"s");
	}else{
		tiempoFinal= (resultHoras + "h " + resultMin + "m " + resultSeg +"s");
	}
	
	return tiempoFinal;
}

