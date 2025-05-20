function createDropdown(labelText, options) {
  const wrapper = document.createElement("div");
  wrapper.className = "dropdown-wrapper";

  if (labelText) {
    const label = document.createElement("label");
    label.textContent = labelText;
    wrapper.appendChild(label);
  }

  const select = document.createElement("select");
  options.forEach(opt => {
    const option = document.createElement("option");
    option.textContent = opt;
    select.appendChild(option);
  });

  wrapper.appendChild(select);
  return wrapper;
}

for (let i = 1; i <= 3; i++) {
  const sizeContainer = document.getElementById(`dropdown-size-${i}`);
  const colorContainer = document.getElementById(`dropdown-color-${i}`);

  if (!sizeContainer || !colorContainer) {
    console.error(`Missing dropdown container(s) for card #${i}`);
    continue;
  }

  for (let j = 0; j < 2; j++) {
    sizeContainer.appendChild(createDropdown(`#${j + 1}`, ["XS", "S", "M", "L", "XL"]));
    colorContainer.appendChild(createDropdown("", ["Color","Black", "Blue", "Red"]));
  }
}

const radios = document.querySelectorAll(`input[name="plan"]`);
const dropdowns = document.querySelectorAll('.bottom-section');
const totalAmountDisplay = document.getElementById("totalAmount");

radios.forEach((radio, index) =>{
    radio.addEventListener('change', () =>{
        dropdowns.forEach((drop, i) =>{
            if(i===index){
                drop.classList.add('show');
            }else {
                drop.classList.remove('show');
            }
        });

        const selectedCard = radio.closest('.card');
        const priceElement = selectedCard.querySelector('.price');
        if(priceElement){
            totalAmountDisplay.textContent = priceElement.textContent;
        }
    });
});

