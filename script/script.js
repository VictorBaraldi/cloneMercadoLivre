import RemoveItem from './modules/mobileItens.js';
import slideAutoPlay from './modules/slideAutoPlay.js';
import { slider } from './modules/sliderConfig.js';

slideAutoPlay(slider, '.glider');
const mobile = new RemoveItem();
mobile.init();
