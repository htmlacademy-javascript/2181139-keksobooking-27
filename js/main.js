import { generateMockAds } from './mock-data.js';
import { initForm } from './form.js';

const mockAds = generateMockAds();

const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.appendChild(mockAds[0]);


initForm();