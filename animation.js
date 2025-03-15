function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookies() {
    let user = getCookie("visited");
    if (user == "") {
        
        setCookie("visited", "yes", 365);
    }
}

function showInfo(guild) {
    let info = '';
    if (guild === 'sonder') {
        info = `
            <strong>Guild Name:</strong>꒰აSonder໒꒱<br>
            <strong>Guild Battle:</strong> GM3<br>
            <strong>Guild Alliance:</strong> Above 1%<br>
            <strong>Guild Level:</strong> 56<br>
            <strong>Relics:</strong> 114/114
        `;
        setCookie("lastGuild", guild, 365);
    } else if (guild === 'justice') {
        info = `
            
            <strong>Guild Name:</strong> DawnOfJustice<br>
            <strong>Guild Battle:</strong> Master IV<br>
            <strong>Guild Level:</strong> 33<br>
            <strong>Relics:</strong> 88/114
        `;
    }else if (guild === 'luministar')
        info = `
            <strong>Guild Name:</strong>LUMINASTAR<br>
            <strong>Guild Battle:</strong> GM3<br>
            <strong>Guild Alliance:</strong>top 20<br>
            <strong>Guild Level:</strong>70(max)<br>
            <strong>Relics:</strong>114/114

            `;

    document.getElementById('guild-info').innerHTML = info;
    document.getElementById('info-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('info-modal').style.display = 'none';

}

fetchGuilds();
console.log('Function triggered');
console.log('Guild:', guild);