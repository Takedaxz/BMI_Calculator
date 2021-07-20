let height_input1 = document.getElementById("input1");
let weight_input2 = document.getElementById("input2");
let run_button = document.getElementById("button");
let number_output = document.getElementById("output1");
let text_output = document.getElementById("output2");

function show_number() {
  let output = "";
  let text = "";
  let height = Number(height_input1.value);
  let weight = Number(weight_input2.value);

  if (height <= 0 || weight <= 0) {
    text += "<p>กรอกใหม่</p>";
    text_output.innerHTML = text;
    number_output.innerHTML = "<p>--</p>";
  } else {
    var cal = weight / (height / 100) ** 2;
    var cal = parseFloat(cal).toFixed(2);

    output += "<p>";
    output += " BMI ของคุณ คือ " + cal;
    output += "</p>";

    if (cal < 18.5 && cal > 0) {
      text += "<p>คุณมีน้ำหนักน้อย/ผอม กว่าเกณฑ์มาตรฐาน</p>";
      number_output.innerHTML = output;
      text_output.innerHTML = text;
    } else if (cal >= 18.5 && cal < 22.9) {
      text += "<p>คุณมีน้ำหนักอยู่ในเกณฑ์มาตรฐาน</p>";
      number_output.innerHTML = output;
      text_output.innerHTML = text;
    } else if (cal >= 22.9 && cal < 24.9) {
      text += "<p>คุณอยู่ในเกณฑ์ท้วม</p>";
      number_output.innerHTML = output;
      text_output.innerHTML = text;
    } else if (cal >= 24.9 && cal < 29.9) {
      text += "<p>คุณอยู่ในเกณฑ์อ้วนระดับ 2</p>";
      number_output.innerHTML = output;
      text_output.innerHTML = text;
    } else if (cal >= 29.9) {
      text += "<p>คุณอยู่ในเกณฑ์อ้วนระดับ 3</p>";
      number_output.innerHTML = output;
      text_output.innerHTML = text;
    }
  }
}

run_button.addEventListener("click", show_number);
