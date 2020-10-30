let convertUTCDate = date => {
    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()} ${formatTime(date)}`
}

// convert waktu menjadi pm dan am
function formatTime(date) {
    let hours = date.getHours(); //definisi jam
    let minutes = date.getMinutes(); //definisi menit
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hours + ':' + minutes //menampilkan jam dan menti
    return strTime;
}