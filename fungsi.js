function tes() {
  // Get the input values
  const banyak = document.getElementById("inputJumlah").value;
  const Nama = document.getElementById("inputNama").value;
  // Get the demo and group1 elements
  const demo = document.getElementById("demo");
  const group1 = document.getElementById("group1");

  // Validate the input
  if (!banyak) {
    alert("Jumlah harus diisi!");
    return;
  }

  // Display the header
  demo.innerHTML += `<h1>Kumpulan data ${Nama}</h1>`;

  // Display the name input fields
  let nameInputs = "";
  for (let i = 0; i < banyak; i++) {
    nameInputs += `<p style="font-size: medium; position: relative; left: 20%;">Nama ke-${i + 1}:<input type="input" placeholder="<Teks Pilihan ${i + 1}>" id="nama${i}" style="position: relative;left: 14%;"/></p>`;
  }
  demo.innerHTML += nameInputs;

  // Display the OK button for the name input fields
  demo.innerHTML += '<button id="btnNameOK" style="position: relative;top: 50%;left: 45%;">OK</button>';

  // Handle the OK button click event for the name input fields
  document.getElementById("btnNameOK").addEventListener("click", function() {
    // Collect the name inputs
    const kumpulannama = [];
    for (let i = 0; i < banyak; i++) {
      const input = document.getElementById(`nama${i}`);
      kumpulannama.push(input.value);
    }

    // Display the name inputs as radio buttons
    let radioInputs = "";
    for (let i = 0; i < banyak; i++) {
      radioInputs += `<p style="font-size: medium; position: relative; left: 20%;">Nama ke-${i + 1}:<input type="radio" name="group1" value="${kumpulannama[i]}">${kumpulannama[i]}</input></p>`;
    }
    group1.innerHTML = radioInputs;

    // Display the OK button for the radio buttons
    group1.innerHTML += '<button id="btnRadioOK" style="position: relative;top: 50%;left: 45%;">OK</button>';

    // Handle the OK button click event for the radio buttons
    document.getElementById("btnRadioOK").addEventListener("click", function() {
      const selectedSize = document.querySelector('input[name="group1"]:checked');
      Hasil.innerHTML += `Hallo, nama saya ${Nama}, saya mempunyai sejumlah ${banyak} pilhan yaitu ${kumpulannama} dan saya memilih ${selectedSize.value}`;
    });
  });
}
