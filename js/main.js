// import { generateMockAds } from './mock-data.js';
import { initForm, toggleForm } from './form.js';
import { initMap } from './map.js';
import { getAds } from './server.js';

// const mockAds = generateMockAds();

initForm();
toggleForm(false);

initMap();
getAds();