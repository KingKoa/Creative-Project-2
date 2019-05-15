    
window.onload=function()
{
    document.getElementById("userNameSubmit").addEventListener("click", async function(event) 
    {
        event.preventDefault();
        const value = document.getElementById("userName").value;
        if (value === "")
        return;
        console.log(value);
        var userID= "";


        const url = "https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=" + value;
        
        try
        {
            const response = await fetch(url);
            console.log("response: ", response);
            const json = await response.json();
            userID= json.uid;
            console.log("json: ",json);
            
            let results = "";
            results+= "<h1>" + json.username + "'s Stats</h1>";
            document.getElementById("userNameResults").innerHTML = results;
        }
        catch(err)
        {
            console.log(err);
        }
        const url12 = "https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats_v2?user_id=" + userID;

        try
        {
            const response = await fetch(url12);
            console.log("response: ", response);
            const json = await response.json();
            console.log("json: ",json);
            let stats = "";

            stats += "<div>";
            stats += '<div id= "Solo" class= "gameType">Solo';
            stats += "<p> Victories: " + json.data.keyboardmouse.defaultsolo.default.placetop1 + "</p>";
            stats += "<p> Top 10: " + json.data.keyboardmouse.defaultsolo.default.placetop10 + "</p>";
            stats += "<p> Top 25: " + json.data.keyboardmouse.defaultsolo.default.placetop25 + "</p>";
            stats += "<p> Matches Played: " + json.data.keyboardmouse.defaultsolo.default.matchesplayed + "</p>";
            stats += "<p> kills: " + json.data.keyboardmouse.defaultsolo.default.kills + "</p>";
            stats += '</div>';
            stats += '<div id= "Duo" class= "gameType">Duo';
            stats += "<p> Victories: " + json.data.keyboardmouse.defaultduo.default.placetop1 + "</p>";
            stats += "<p> Top 5: " + json.data.keyboardmouse.defaultduo.default.placetop5 + "</p>";
            stats += "<p> Top 12: " + json.data.keyboardmouse.defaultduo.default.placetop12 + "</p>";
            stats += "<p> Matches Played: " + json.data.keyboardmouse.defaultduo.default.matchesplayed + "</p>";
            stats += "<p> kills: " + json.data.keyboardmouse.defaultduo.default.kills + "</p>";
            stats += '</div>'
            stats += '<div id= "Squad" class= "gameType">Squad';

            stats += "<p> Victories: " + json.data.keyboardmouse.defaultsquad.default.placetop1 + "</p>";
            stats += "<p> Top 5: " + json.data.keyboardmouse.defaultsquad.default.placetop3 + "</p>";
            stats += "<p> Top 12: " + json.data.keyboardmouse.defaultsquad.default.placetop6 + "</p>";
            stats += "<p> Matches Played: " + json.data.keyboardmouse.defaultsquad.default.matchesplayed + "</p>";
            stats += "<p> kills: " + json.data.keyboardmouse.defaultsquad.default.kills + "</p>";
            stats += '</div>';
            stats += "</div>";


            document.getElementById("playerStats").innerHTML = stats;

        }
        catch(err)
        {
            console.log(err);
        }
    });
}