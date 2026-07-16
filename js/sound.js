function playSound(type) {
  let sound;

  if (type === "click") sound = new Audio("sounds/click.mp3");
  if (type === "success") sound = new Audio("sounds/success.mp3");
  if (type === "error") sound = new Audio("sounds/error.mp3");

  if (sound) sound.play();
}