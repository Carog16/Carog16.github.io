let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #f49f9c;">Desarrollo sitios web y estudio ingeniería civil.</span>')

  .pauseFor(200)
  .deleteChars(10)
  .start();
