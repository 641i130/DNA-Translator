// Code to translate the DNA into mRNA and tRNA

var DNA, mRNA = "", tRNA = "";

function clean() {
  mRNAbox = document.getElementsByClassName("mRNA")[0]
  tRNAbox = document.getElementsByClassName("tRNA")[0]
  while (mRNAbox.hasChildNodes()) {
    mRNAbox.removeChild(mRNAbox.childNodes[0]);
  }
  while (tRNAbox.hasChildNodes()) {
    tRNAbox.removeChild(tRNAbox.childNodes[0]);
  }
  DNA = "";
  mRNA = "";
  tRNA = "";
}

function handle(e){
    if(e.keyCode === 13){
        // Make sure divs are clean


        e.preventDefault(); // Ensure it is only this code that rusn
        //function to translate input
        DNA = document.getElementById('DNA').value;
        //document.getElementById('DNA').value = "";
        // Generate the mRNA and tRNA strings
        m_RNA();
        t_RNA();
        // Append them to the spans and divs
        createThings();

      }
}

function check(a, b, string) {
  if (string == a) {
    mRNA = mRNA.concat(b);
  }
}

function m_RNA(){
  //console.log(DNA)
  for (var i = 0; i < DNA.length; i++) {
    check("T", "A", DNA[i]);
    check("A", "U", DNA[i]);
    check("C", "G", DNA[i]);
    check("G", "C", DNA[i]);
  }
  console.log(mRNA);
}

function c_heck(a, b, string) {
  if (string == a) {
    tRNA = tRNA.concat(b);
  }
}

function t_RNA() {
  for (var i = 0; i < mRNA.length; i++) {
    c_heck("A", "U", mRNA[i]);
    c_heck("U", "A", mRNA[i]);
    c_heck("C", "G", mRNA[i]);
    c_heck("G", "C", mRNA[i]);
  }
  console.log(tRNA);
}

function createThings() {
  var str_out = "";
  for (var letter in mRNA) {
    console.log(letter);
    str_out = str_out + mRNA[letter];
    if (str_out.length == 3) {
      var span = document.createElement("SPAN");
      var textnode = document.createTextNode(str_out);
      span.appendChild(textnode);
      span.setAttribute("id", "mRNA");
      document.getElementsByClassName("mRNA")[0].appendChild(span);
      str_out  = "";
    }
  }

  var str_out = "";
  for (var letter in tRNA) {
    console.log(letter);
    str_out = str_out + tRNA[letter];
    if (str_out.length == 3) {
      var span = document.createElement("SPAN");
      var textnode = document.createTextNode(str_out);
      span.appendChild(textnode);
      span.setAttribute("id", "tRNA");
      document.getElementsByClassName("tRNA")[0].appendChild(span);
      str_out  = "";
    }
  }
}
