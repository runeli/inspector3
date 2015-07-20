import stepFeeder from './modules/stepFeeder.js';
import xy from './modules/xy.js';

export default {
  "title": "Uppotukki PaperiMyllyt - Lathe 123",
  "type": "object",
  "properties": {
    "stepFeeder": stepFeeder,
    "xycharger": xy
  }
}
