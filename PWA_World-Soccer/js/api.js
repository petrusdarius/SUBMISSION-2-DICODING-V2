// Konsumsi JSON  dengan Fetch

const api_token = '7117be604a8f4d3888f9d5866470946b'
const id_liga = 2021 //liga inggris
let base_url = "https://api.football-data.org/v2/";
let endpoint_tim = `${base_url}teams/`
let endpoint_pemain = `${base_url}players/`
let endpoint_klasemen = `${base_url}competitions/${id_liga}/standings?standingType=TOTAL`
let endpoint_pertandingan_upcoming = `${base_url}competitions/${id_liga}/matches?status=SCHEDULED`
let endpoint_pertandingan_detail = `${base_url}matches/`

var fetchApi = url => {
  return fetch(url, {
    headers: {
      'X-Auth-Token': api_token
    }
  });
}

// fungsi response fetch
function status(response) {
  if (response.status !== 200) {
    console.log("Error : " + response.status);
    return Promise.reject(new Error(response.statusText));
  } else {
    return Promise.resolve(response);
  }
}

// fungsi pharsing json
function json(response) {
  return response.json();
}

// kode untuk memuat error
function error(error) {
  console.log("Error : " + error);
}

//Req Data Json
function getLigaKlasemen() {
  if ('caches' in window) {
    caches.match(endpoint_klasemen).then(function (response) {
      if (response) {
        response.json().then(function (data) {
          resultKlasemenJSON(data);
          console.dir("getLigaKlasemen " + data);
        });
      }
    });
  }

  fetchApi(endpoint_klasemen)
    .then(status)
    .then(json)
    .then(function (data) {
      console.log(data)
      console.log(data)

      resultKlasemenJSON(data)
    })
    .catch(error);
}

// Detail Tim
function getIdDetailTim() {
  return new Promise(function (resolve, reject) {

    let urlParams = new URLSearchParams(window.location.search);
    let idParam = urlParams.get("id");

    var dataSquadHTML = ''
    var tabelSquadHTML = ''
    if ("caches" in window) {
      caches.match(endpoint_tim + idParam).then(function (response) {
        if (response) {
          response.json().then(function (data) {

            resultDetailTimJSON(data)
            data.squad.forEach(function (squad, index) {
              dataSquadJSON = squad;

              dataSquadHTML += `
                <tr>
                  <td >
                    a href="./detailplayer.html?id=${squad.id}"> ${squad.name}</a>
                  </td>
                  <td >${squad.position}</td>
                </tr>
              `
            });
            tabelSquadHTML += `<table> <tbody> ${dataSquadHTML}  </tbody> </table>`

            document.getElementById("squad").innerHTML = tabelSquadHTML;
            resolve(data);
          });
        }
      });
    }

    fetchApi(endpoint_tim + idParam)
      .then(status)
      .then(json)
      .then(function (data) {
        console.log(data);
        
        resultDetailTimJSON(data)
        dataTeamJSON = data;
        data.squad.forEach(function (squad, index) {
          dataSquadJSON = squad;
          console.log("cek squad name: " + squad.name);
          console.log("cek squad position: " + squad.position);
          dataSquadHTML += `
      <tr>
        <td >
        <a href="./detailplayer.html?id=${squad.id}"> ${squad.name}</a>
        </td>
        <td >${squad.position}</td>
      </tr>
     `
        });
        tabelSquadHTML += `<table> <tbody> ${dataSquadHTML}  </tbody> </table>`

        document.getElementById("squad").innerHTML = tabelSquadHTML;
        // Kirim objek data hasil parsing json agar bisa disimpan ke indexed db
        resolve(data);
      })
      .catch(error);
  });
}

// Detail player
function getDetailPlayerById() {
  return new Promise(function (resolve, reject) {
    
    var urlParams = new URLSearchParams(window.location.search);
    var idParam = urlParams.get("id");
    var dataSquadHTML = ''
    var tabelSquadHTML = ''
    if ('caches' in window) {
      caches.match(endpoint_pemain + idParam).then(function (response) {
        if (response) {
          response.json().then(function (data) {
            resultDetailPemainJSON(data);
            resolve(data)
          });
        }
      });
    }
    fetchApi(endpoint_pemain + idParam)
      .then(status)
      .then(json)
      .then(function (data) {
        console.log(data);
        resultDetailPemainJSON(data);
        resolve(data);
      })
      .catch(error);
  });
}


function getMatchByIdLeague() {
  return new Promise(function (resolve, reject) {

    if ('caches' in window) {
      caches.match(endpoint_pertandingan_upcoming).then(function (response) {
        if (response) {
          response.json().then(function (data) {
            resultMatchJSON(data);
            resolve(data);
          });
        }
      });
    }

    fetchApi(endpoint_pertandingan_upcoming)
      .then(status)
      .then(json)
      .then(function (data) {
        resultMatchJSON(data);
        resolve(data);
      })
      .catch(error);
  });
}

function getDetailMatchById() {
  return new Promise(function (resolve, reject) {
    var urlParams = new URLSearchParams(window.location.search);
    var idParam = urlParams.get("id");
    var dataSquadHTML = ''
    var tabelSquadHTML = ''
    if ('caches' in window) {
      caches.match(endpoint_pertandingan_detail + idParam).then(function (response) {
        if (response) {
          response.json().then(function (data) {
            resultDetailMatchJSON(data);
            resolve(data)
          });
        }
      });
    }
    fetchApi(endpoint_pertandingan_detail + idParam)
      .then(status)
      .then(json)
      .then(function (data) {
        console.log(data);
        resultDetailMatchJSON(data);
        resolve(data);
      })
      .catch(error);
  });
}