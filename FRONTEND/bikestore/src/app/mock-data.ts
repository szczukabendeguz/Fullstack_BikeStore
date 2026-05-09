import { Brand } from './brand';
import { Model } from './model';

export const INITIAL_BRANDS: Brand[] = [
  { id: 'b1', brandName: 'Specialized', location: 'Morgan Hill, CA', averageAskingPrice: 4500, modelCount: 3 },
  { id: 'b2', brandName: 'Trek', location: 'Waterloo, WI', averageAskingPrice: 3800, modelCount: 3 },
  { id: 'b3', brandName: 'Santa Cruz', location: 'Santa Cruz, CA', averageAskingPrice: 5500, modelCount: 2 },
  { id: 'b4', brandName: 'Canyon', location: 'Koblenz, Germany', averageAskingPrice: 3200, modelCount: 2 },
  { id: 'b5', brandName: 'Giant', location: 'Taichung, Taiwan', averageAskingPrice: 2800, modelCount: 2 },
  { id: 'b6', brandName: 'Yeti Cycles', location: 'Golden, CO', averageAskingPrice: 6200, modelCount: 1 },
  { id: 'b7', brandName: 'Pivot Cycles', location: 'Tempe, AZ', averageAskingPrice: 5800, modelCount: 1 },
  { id: 'b8', brandName: 'Cannondale', location: 'Wilton, CT', averageAskingPrice: 3500, modelCount: 2 }
];

export const INITIAL_MODELS: Model[] = [
  // Specialized
  { id: 'm1', brandId: 'b1', modelName: 'Stumpjumper', frontTravel: 140, backTravel: 130, askingPrice: 4200, userFullName: 'Demo Admin' },
  { id: 'm2', brandId: 'b1', modelName: 'Enduro', frontTravel: 170, backTravel: 170, askingPrice: 4800, userFullName: 'Demo Admin' },
  { id: 'm3', brandId: 'b1', modelName: 'Epic', frontTravel: 100, backTravel: 100, askingPrice: 4500, userFullName: 'Demo Admin' },
  
  // Trek
  { id: 'm4', brandId: 'b2', modelName: 'Fuel EX', frontTravel: 140, backTravel: 130, askingPrice: 3500, userFullName: 'Demo Admin' },
  { id: 'm5', brandId: 'b2', modelName: 'Slash', frontTravel: 170, backTravel: 160, askingPrice: 4100, userFullName: 'Demo Admin' },
  { id: 'm6', brandId: 'b2', modelName: 'Supercaliber', frontTravel: 100, backTravel: 60, askingPrice: 3800, userFullName: 'Demo Admin' },
  
  // Santa Cruz
  { id: 'm7', brandId: 'b3', modelName: 'Tallboy', frontTravel: 130, backTravel: 120, askingPrice: 5500, userFullName: 'Demo Admin' },
  { id: 'm8', brandId: 'b3', modelName: 'Nomad', frontTravel: 170, backTravel: 170, askingPrice: 5800, userFullName: 'Demo Admin' },
  
  // Canyon
  { id: 'm9', brandId: 'b4', modelName: 'Spectral', frontTravel: 160, backTravel: 150, askingPrice: 3100, userFullName: 'Demo Admin' },
  { id: 'm10', brandId: 'b4', modelName: 'Strive', frontTravel: 170, backTravel: 160, askingPrice: 3300, userFullName: 'Demo Admin' },
  
  // Giant
  { id: 'm11', brandId: 'b5', modelName: 'Trance X', frontTravel: 150, backTravel: 135, askingPrice: 2700, userFullName: 'Demo Admin' },
  { id: 'm12', brandId: 'b5', modelName: 'Reign', frontTravel: 170, backTravel: 160, askingPrice: 2900, userFullName: 'Demo Admin' },
  
  // Yeti
  { id: 'm13', brandId: 'b6', modelName: 'SB150', frontTravel: 170, backTravel: 150, askingPrice: 6200, userFullName: 'Demo Admin' },
  
  // Pivot
  { id: 'm14', brandId: 'b7', modelName: 'Firebird', frontTravel: 170, backTravel: 165, askingPrice: 5800, userFullName: 'Demo Admin' },
  
  // Cannondale
  { id: 'm15', brandId: 'b8', modelName: 'Habit', frontTravel: 140, backTravel: 130, askingPrice: 3400, userFullName: 'Demo Admin' },
  { id: 'm16', brandId: 'b8', modelName: 'Jekyll', frontTravel: 170, backTravel: 165, askingPrice: 3600, userFullName: 'Demo Admin' }
];
