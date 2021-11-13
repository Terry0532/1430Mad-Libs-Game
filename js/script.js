function madlibsgame() {
  let noun1 = document.getElementById("noun1").value;
  let noun2 = document.getElementById("noun2").value;
  let verb1 = document.getElementById("verb1").value;
  let verb2 = document.getElementById("verb2").value;
  let adj1 = document.getElementById("adj1").value;
  let adj2 = document.getElementById("adj2").value;
  if (
    noun1 === "" ||
    noun2 === "" ||
    verb1 === "" ||
    verb2 === "" ||
    adj1 === "" ||
    adj2 === ""
  ) {
    document.getElementById("story").innerHTML = "fill all of them";
  } else {
    document.getElementById("story").innerHTML =
      "Charlotte Walker looked at the ripped " +
      noun1 +
      "in her hands and felt" +
      adj1 +
      ". She " +
      verb1 +
      " over to the " +
      noun2 +
      " and reflected on her sunny surroundings. She had always loved grand Exeter with its fast, few fields. It was a place that encouraged her tendency to feel " +
      adj2 +
      ". Then she saw something in the distance, or rather someone. It was the figure of Charlotte Grey. Charlotte was a modest teacher with fluffy ankles and vast warts. Charlotte " +
      verb2 +
      ".";
  }
}
