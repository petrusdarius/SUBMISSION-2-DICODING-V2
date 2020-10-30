function resultTeamFav(data) { //mengambil data dari detail tim

    let FavTeam = ''
    data.forEach(function (team) {
        
        console.dir("DataFavTim: " + team.name);

        FavTeam += `

        <h2 class="center-align">Tim Favorit</h2>
        <hr style="width: 200px">
 
        <div class="col s12 m6 l6">
        
        <div class="card">
        
        <div class="card-content">
                <div center-align>
                    <h5 class="center-align">
                        <span class="blue-text text-darken-2 blue-button">  
                            <a href="./detailtim.html?id=${team.id}">${team.name}</a>
                        </span>
                    </h5>          
                </div>
            </div>
        </div>
        </div>
        `
    });


    document.getElementById("divFavorit").innerHTML = FavTeam;
}