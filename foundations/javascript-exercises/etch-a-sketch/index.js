let gridSize = 16;
const gapSize = 4;

// Add the input to change the grid size
const input = document.createElement("input");
input.style.width = "100px";
input.style.textAlign = "center";
input.style.fontSize = "24px";
input.style.margin = "0 0 24px 0";
input.value = gridSize;
input.min = 1;
input.max = 100;
input.onchange = () => {
  gridSize = parseInt(input.value);
  createGrid();
};
document.body.appendChild(input);

// Create a container for the grid and add a style class
const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");

// Set the size of the grid container
gridContainer.style.width = "900px";
gridContainer.style.height = "900px";

// Add the grid container to the body
document.body.appendChild(gridContainer);

// Function to create the grid
function createGrid() {
  // Clear existing grid items
  gridContainer.innerHTML = "";

  // Calculate the total size including gaps
  const totalSize = 900 - gapSize * (gridSize - 1);

  // Calculate the size of each grid item including the gap
  const itemSize = totalSize / gridSize;

  // Loop over gridSize variable and create grid
  for (let i = 0; i < gridSize * gridSize; i++) {
    // Create the actual grid items based on global variable
    const grid = document.createElement("div");
    grid.classList.add("grid-item");

    // Set the size of each grid item
    grid.style.height = `${itemSize}px`;
    grid.style.width = `${itemSize}px`;

    // Add event listener for hover
    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = getRandomColor();
    });

    // Add the grid items to the grid container
    gridContainer.appendChild(grid);
  }
}

// Initial grid creation
createGrid();

// Generate random hex color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
