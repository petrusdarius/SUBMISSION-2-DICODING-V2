function resultMatchFav(data) {

  var MatchFav = ''
  data.forEach(function (match) {


    MatchFav += `
    <h2 class="center-align">Pertandingan Favorit</h2>
    <hr style="width: 200px">

    <div class="col s12 m6 l6">
      <div class="card">

        <div class="card-content">

          <div center-align>
            <!--waktu pertandingan-->
            <h5 class="center-align">Matchday: ${match.match.matchday}</h5>
            <div class="center-align">Kick Off: ${convertUTCDate(new Date(match.match.utcDate))}</div>


            <!--tim bertanding-->
            <div class="row" style="margin:20px">
              <div class="col s5 truncate right-align">
                <span class="blue-text text-darken-2">  ${match.match.homeTeam.name}</span>
              </div>
              
              <div class="col s2 ">
                VS
              </div>
              <div class="col s5 truncate left-align">
                <span class="blue-text text-darken-2">  ${match.match.awayTeam.name}</span>
              </div>
            </div>

            <!--button-->
            <div class="center-align" style="margin-top: 20px">
              <a class="red waves-effect waves-light btn" href="./detailmatch.html?id=${match.id}">Detail</a>
            </div>
                  
          </div>
      
        </div>
      </div>
    </div>
      `
  });

  // Sisipkan komponen card ke dalam elemen dengan id divFavorit
  document.getElementById("divFavorit").innerHTML = MatchFav;
}