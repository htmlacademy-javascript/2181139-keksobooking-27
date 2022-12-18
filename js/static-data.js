const featuresFieldSetChildren = document.querySelector('#housing-features').children;
const features = [];
for (const child of featuresFieldSetChildren) {
  if (child.name === 'features') {
    features.push(child.value);
  }
}

const housingTypeChildren = document.querySelector('#housing-type').children;
const types = [];
for (const child of housingTypeChildren) {
  if (child.value && child.value !== 'any') {
    types.push(child.value);
  }
}

export { features, types };


