// import { generateMockAds } from './mock-data.js';
import { initForm, toggleForms, initFilterForm } from './form.js';
import { initMap } from './map.js';

// const mockAds = generateMockAds();

initForm();
initFilterForm();
toggleForms(false);

initMap();

