let count = 100;
while (count <= 200) {
  if (count % 3 == 0 && count % 4 == 0) {
    console.log("LoopyLighthouse");
  } else if (count % 3 == 0) {
    console.log("Loopy");
  } else if (count % 4 == 0) {
    console.log("Lighthouse");
  } else {
    console.log(count);
  }
  count++;
}
