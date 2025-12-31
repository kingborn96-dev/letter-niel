const message = `"Dear bocil,\n\nAku ga tau kamu akan baca ini atau engga.\nTapi kalau iya, aku cuma pengen bilang makasih.\n\nMakasih karena kamu pernah hadir di hidup aku.\nMakasih buat waktu, tawa, cerita, dan semua hal kecil yang pernah kita bagi bareng.\nWalaupun akhirnya ga berjalan seperti yang kita harapkan.\n\nAku juga mau minta maaf.\nAtas sikap aku yang mungkin nyakitin,\natas kata-kata yang seharusnya ga perlu aku ucapin,\ndan atas hal-hal yang gagal aku jaga.\n\nSekarang aku ga berharap apa-apa.\nGa minta kita kembali, ga minta jawaban.\nAku cuma pengen kamu tau,\nkehadiran kamu pernah berarti banget buat aku.\n\nHappy New Year ya.\nSemoga tahun ini jadi tahun yang lebih baik buat kamu.\nSemoga kamu bahagia,\ndengan atau tanpa aku di cerita kamu.\n\n– niel"`;

function showLetter() {
  const audio = document.getElementById("myAudio");
  const intro = document.getElementById("introText");
  const btn = document.querySelector(".btn");
  const letterBox = document.getElementById("letterBox");
  const typedText = document.getElementById("typedText");

  // Putar Audio
  if (audio) {
    audio.currentTime = 14; 
    audio.play();
  }

  // Sembunyikan Intro & Tombol
  intro.style.display = "none";
  btn.style.display = "none";

  // Tampilkan Kertas
  letterBox.style.display = "block";
  
  let i = 0;
  function typeWriter() {
    if (i < message.length) {
      // Masukkan teks ke dalam div
      typedText.innerHTML = message.substring(0, i + 1).replace(/\n/g, '<br>');
      i++;
      
      // Auto-scroll mengikuti teks
      letterBox.scrollTop = letterBox.scrollHeight;
      
      setTimeout(typeWriter, 40);
    }
  }

  typeWriter();
}




