// Build a simple wooden box
// js box0('5', 3,3,3);

// Build a stone 'house'
// js box('5', 10,10,10);

// Build a giant stone cylinder
// js cylinder0(43.5, 11,100)

// Build a stone house with roof
// js box0('4', 11, 5, 11).move('start').up(5).prism('5',11,11);

// Add a 2x1 window (be sure to point at where you want it to spawn)
// js box(102,2,1);

// Start flying
// js self.capabilities.flying = true;
// js self.updateCapabilities();
// Space/space to start flying, shift to move towards the ground

// Stop flying
// js self.capabilities.flying = false;
// js self.updateCapabilities();

// Wrap the house command in a function
// var makeHouse = function() {
//  box0('4', 11, 5, 11).move('start').up(5).prism('5',11,11);
// }
