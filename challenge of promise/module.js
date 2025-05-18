export function builtStructure(data, container) {
  let div = document.createElement("div");
  let title = document.createElement("h3");
  let description = document.createElement("p");
  title.append(data.title);
  description.append(data.description);
  div.append(title, description);
  container.append(div);
}
