const verDatos = `
//Browser CodeName: <br>
${navigator.appCodeName}<br> [desuso]
//Browser Name: <br>
${navigator.appName}<br> [desuso]
//Browser Version: <br>
${navigator.appVersion}<br> [desuso]
//Browser Language: <br>
${navigator.language}<br>
//Browser Online: <br>
${navigator.onLine}<br>
//Platform: <br>
${navigator.platform}<br> [desuso]
//User-agent header: <br>
${navigator.userAgent}<br>
//Cookies Enabled: <br>
${navigator.cookieEnabled}<br>

`;
document.getElementById("ver").innerHTML = verDatos;
