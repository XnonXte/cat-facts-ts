const getCatFact = (): void => {
  const content = document.getElementById("catFact-content");
  fetch("https://catfact.ninja/fact", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      if (content !== null) content.innerHTML = data["fact"];
    });
};
