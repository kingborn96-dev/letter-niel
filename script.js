const message = `"Dear bocil,\n\nAku ga tau apakah kamu akan baca ini atau engga.\nTapi kalau iya, aku cuma pengen bilang terima kasih.\n\nTerima kasih karena kamu pernah hadir di hidup aku.\nTerima kasih buat waktu, tawa, cerita, dan semua hal kecil yang pernah kita bagi bareng.\nWalaupun akhirnya ga berjalan seperti yang kita harapkan.\n\nAku juga mau minta maaf.\nAtas sikap aku yang mungkin nyakitin,\natas kata-kata yang seharusnya ga perlu aku ucapin,\ndan atas hal-hal yang gagal aku jaga.\n\nSekarang aku ga berharap apa-apa.\nGa minta kita kembali, ga minta jawaban.\nAku cuma pengen kamu tau,\nkehadiran kamu pernah berarti banget buat aku.\n\nHappy New Year ya.\nSemoga tahun ini jadi tahun yang lebih baik buat kamu.\nSemoga kamu bahagia,\ndengan atau tanpa aku di cerita kamu.\n\n– niel";
`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
