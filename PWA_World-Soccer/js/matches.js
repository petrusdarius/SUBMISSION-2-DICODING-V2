function resultMatchJSON(data) {
  var dataMatchesHtml = '';
  var match = data.matches;
  var maxLoopData = match.length;

  //maksimal memuat 20 pertandingan yang diadakan dalam seminggu
  if (match.length > 20) {
    maxLoopData = 20;
  }

  for (let i = 0; i < maxLoopData; i++) {
    dataMatchesHtml += `
  <div class="col s12 m6 l6">
    <div class="card">
    <div class="card-content">
    <div center-align>

        <h5 class="center-align">Matchday: ${match[i].matchday}</h5>
        <div class="center-align">Kick Off: ${convertUTCDate(new Date(match[i].utcDate))}</div>

      <div class="row" style="margin:20px">
        <div class="col s5 truncate right-align">
          <span class="blue-text text-darken-2">  ${match[i].homeTeam.name}</span>
        </div>
        <div class="col s2 ">
          VS
        </div>
        <div class="col s5 truncate left-align">
          <span class="blue-text text-darken-2">  ${match[i].awayTeam.name}</span>
        </div>
      </div>
      <div class="center-align">
      <a class="red waves-effect waves-light btn" href="./detailmatch.html?id=${match[i].id}">Simpan</a>
      </div>
    </div>
    </div>
    </div>
  </div>
      `
  }
  // Sisipkan komponen card ke dalam elemen
  document.getElementById("divMatches").innerHTML = dataMatchesHtml;
}

function resultDetailMatchJSON(data) {
  document.getElementById("homeTeamWins").innerHTML = data.head2head.homeTeam.wins;
  document.getElementById("awayTeamWins").innerHTML = data.head2head.awayTeam.wins;
  document.getElementById("homeTeamDraws").innerHTML = data.head2head.homeTeam.draws;
  document.getElementById("awayTeamDraws").innerHTML = data.head2head.awayTeam.draws;
  document.getElementById("homeTeamLosses").innerHTML = data.head2head.homeTeam.losses;
  document.getElementById("awayTeamLosses").innerHTML = data.head2head.awayTeam.losses;
  document.getElementById("venue").innerHTML = `Stadion: ${data.match.venue}`;
  document.getElementById("matchDay").innerHTML = `Matchday: ${data.match.matchday}`;
  document.getElementById("kickOff").innerHTML = `Kick Off: ${convertUTCDate(new Date(data.match.utcDate))}`;
  document.getElementById("homeTeamName").innerHTML = data.match.homeTeam.name;
  document.getElementById("awayTeamName").innerHTML = data.match.awayTeam.name;
  document.getElementById("preloader").innerHTML = "";
  document.getElementById("numberOfMatches").innerHTML = `Jumlah Pertandingan: ${data.head2head.numberOfMatches}`;
  document.getElementById("totalGoals").innerHTML = `Total Goals: ${data.head2head.totalGoals}`;


}