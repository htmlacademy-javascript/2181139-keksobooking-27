import { generateMockAds } from './mock-data.js';
import { initForm, toggleForm } from './form.js';
import { initMap, populateMap } from './map.js';

const mockAds = generateMockAds();

initForm();
toggleForm(false);

initMap();
populateMap(mockAds);
