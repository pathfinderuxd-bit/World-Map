/* Simplified coastlines, hand-drawn as "lon,lat" rings (planar, projected by the map). */
const P = s => s.trim().split(/\s+/).map(p => p.split(',').map(Number));
const LAND = [
  // North America and Central America
  P(`-166.8,68.3 -156.8,71.3 -148,70.3 -135,69.5 -128,70.1 -120,69.5 -108,68 -96,68 -90,69 -86,68 -82,69.5 -81,66.5 -86,64.5 -90,63.5 -92,61 -94.5,59.5 -93,58 -89,56.8 -85,55.2 -82.3,55.1 -82.3,52.9 -80.5,51.4 -79,51.7 -78.8,52.5 -77,55 -76.8,56.5 -78,58.5 -77.5,60.2 -78,62.2 -74,62.3 -70,61 -69.8,58.8 -67.5,58.3 -65.8,60.3 -64.5,60.3 -62,57.5 -60.5,55.5 -57.5,53 -55.7,52.2 -56,51.5 -60,50.2 -66,50.2 -68,49.2 -64.5,49.2 -64.3,48.4 -65,47.5 -64.8,46.5 -61.5,45.8 -60,46.2 -61,45.3 -64,44.4 -66,43.5 -66.2,44.5 -67,44.8 -68.5,44.3 -70,43.7 -70.6,42.7 -70,41.8 -69.95,41.7 -71,41.4 -72,41.2 -74,40.6 -74,39.8 -75,38.7 -75.5,37.2 -76,36.9 -75.5,35.3 -77,34.6 -78,33.9 -79.2,33.2 -80.5,32.2 -81.3,30.8 -81.2,29.5 -80.5,28 -80,26.7 -80.4,25.2 -81.2,25.2 -82,26.5 -82.7,27.6 -82.7,29 -83.7,29.9 -84.3,30 -85.5,29.7 -86.5,30.3 -88,30.4 -89.5,30.2 -89.4,29.1 -91,29.2 -92.5,29.6 -94,29.6 -95,29 -96.5,28.2 -97.4,27 -97.2,25.5 -97.8,22.5 -97.2,21 -96,19.2 -94.5,18.2 -92,18.6 -91,18.9 -90.5,20.5 -90,21.2 -88,21.5 -87,21.5 -87.2,20.2 -88,18.5 -88.3,16.5 -88.9,15.8 -87.5,15.8 -85.5,15.9 -84,15.6 -83.3,15 -83.5,12.5 -83.7,11 -82.8,9.6 -81.5,8.8 -80,9.2 -79,9.6 -77.5,8.7 -77.3,8.4 -77.9,7.2 -78.4,8.1 -79.5,8.9 -80.5,7.4 -81.8,8.2 -83,8.3 -83.7,9 -85.7,10 -85.7,11 -87.6,13 -89.5,13.5 -91.5,14 -94,16 -96,15.7 -98,16.2 -101,17.3 -103.5,18.5 -105.5,20 -105.4,21.5 -106.5,23.2 -108.5,25.4 -110.5,27.8 -112.5,29.5 -114.8,31.8 -114.5,30 -113,28.5 -111.5,26.5 -110.3,24.5 -109.5,23.2 -110.3,23.4 -112,24.8 -112.2,26.5 -114,27.8 -115,29.5 -116.2,31 -117.1,32.5 -118.5,34 -120.6,34.6 -121.9,36.6 -122.5,37.8 -123.8,39.5 -124.3,41 -124.5,43 -124,46.2 -124.7,48.4 -125.5,49.5 -127,50.8 -128.5,52.5 -130,54.5 -132,56 -134,58 -137,58.8 -140,59.7 -144,60 -147,60.8 -150,59.4 -152,58.5 -154,57.5 -157,56.5 -160,55.5 -163,54.8 -163,55.8 -158,58.5 -157,59.5 -162,59.8 -164,60.8 -165,62.5 -161,63.5 -163,64.5 -168,65.6 -164,66.6 -162,67 -165,68.4`),
  // South America
  P(`-77.3,8.6 -76.3,9.4 -75.5,10.7 -74.2,11.3 -72.2,11.9 -71.3,12.3 -71.6,10.8 -71,12 -69.8,11.5 -68,10.6 -65.5,10.2 -63,10.6 -61.5,10.7 -61,9 -60,8.5 -58,6.8 -55,5.8 -52,5 -51,4 -50,1.5 -50.5,0 -48,-1 -44.5,-2.5 -41,-2.9 -38,-4 -35.2,-5.5 -34.9,-8 -36,-10.5 -37.5,-12 -39,-13.5 -39,-17.5 -40.5,-20.5 -42,-23 -44,-23.2 -46.5,-24 -48.5,-26 -48.7,-28.5 -51,-31 -53,-33.7 -54.9,-34.9 -57,-34.4 -58.4,-34.2 -57.2,-36 -57.5,-38 -62,-39 -62.2,-40.8 -65,-41 -64.5,-42.5 -65.5,-45 -67.5,-46.5 -66,-48 -68.5,-50.2 -69,-51.7 -68.3,-52.7 -70.5,-52.8 -72.5,-53.5 -74.5,-52 -75.5,-49 -74,-44 -73.7,-41 -73.5,-37 -72,-33.5 -71.5,-30 -70.8,-26 -70.2,-20 -70.3,-18.3 -72,-17 -75,-15.5 -76.5,-13.5 -77.5,-11 -79,-7.5 -81.2,-5.8 -80.3,-3.5 -80.8,-2 -80.2,-1 -80.5,0.5 -79.2,1.5 -78.5,2.5 -77.5,4 -77.3,6 -77.7,7.2`),
  // Greenland
  P(`-73,78 -68,80 -60,82 -45,83 -30,83.5 -20,82 -18,80 -20,77 -19,75 -22,72 -24,70.5 -31,68.5 -38,65.5 -41.5,63.5 -43.5,60.2 -46,60.5 -50,63 -52,65 -53.5,67.5 -54,69.5 -56,72 -61,76 -68,76.2`),
  // Eurasia
  P(`-5.4,36 -6.3,36.7 -8.9,37 -9.5,38.7 -8.8,41 -9.3,43 -8,43.7 -4,43.4 -1.8,43.4 -1.2,46 -2.2,47.2 -4.7,48.4 -1.5,48.7 -1.5,49.6 0.2,49.5 1.6,50.9 3.5,51.4 4.7,53 7,53.5 8.6,54 8.7,55.7 8.2,57 10.5,57.7 10.4,56 10.8,55.2 9.8,54.5 11,54 14,54 18,54.7 19.5,54.4 21,55.2 21,56.8 24,57.2 24.3,58.5 23.5,59.2 28,59.5 30.2,59.9 28,60.5 25,60.2 22.5,60 21.4,61 21.3,63 25.3,65.2 22,65.7 21.3,64.7 19,63 17.2,61.4 17.3,60.3 18.7,60 16.5,58.7 16.7,57 14.5,56.2 13,55.4 12.7,56.5 11.5,58 10.7,59.4 9,58.5 5.8,58.7 5.2,60.5 5.5,62 7.5,63.3 10.5,64.5 12.5,66 15,68 18,69.7 22,70.3 26,71 28.5,70.8 31,70 33,69.4 38,68.3 41,67 38,66.2 34.5,66.2 34,65 37,64 40,64.7 44,66.3 44.5,68.5 48,67.7 53,68.5 59,68.5 60.5,69.8 66,69.5 68,71 69,73 73,72.9 75,72 80,72.5 87,74.5 95,76 104,77.7 110,76.5 113,74 120,73 128,72.2 133,71.5 140,72.7 150,71.4 160,70.5 170,70 180,69.6 180,65 179,63.5 174,61.8 170.5,60 166,60.3 163.5,59.7 162.7,57.8 163.2,56 162,54.8 160,53 158,51.2 156.5,51 156,53 155.5,56 156.8,57.5 159,61 154,59.2 148,59.3 143.5,59.3 140.5,57.8 138,55 137,54 140.5,53.2 141.2,52 140.5,50 140,48 138.3,46.4 135,43.5 132,42.8 130.7,42.3 129.7,41 128,39.6 127.5,38.5 129.4,37 129.4,35.4 128.5,34.8 126.4,34.5 126.5,36.5 126.5,37.6 125,38 125.2,39.6 124.2,39.9 122,40.5 121,40.8 119.5,39.2 118,39 117.7,38.3 119,37.2 122.5,37.3 120.5,36 119.5,35 120.9,32.8 121.9,31.5 121.5,30.2 122,29.7 121.2,28 120,26.2 119,25 117.5,23.7 116,22.8 114.2,22.3 112,21.7 110.5,21.2 109.8,20.5 108.5,21.7 106.7,20.5 105.8,19 106.5,17.8 108.3,16 109.2,13.5 109,11.5 107,10.4 105,8.7 104.8,10 103.5,10.6 102.5,12 100.9,12.7 100,13.3 100,12 99.2,10.2 100.3,8 101.3,6.8 102.3,6.2 103.5,4.3 103.5,2.5 104.2,1.4 103.4,1.3 102,2.6 100.5,4.5 100.4,6.3 99.8,7.8 98.3,8.2 98.5,10.2 98.6,12.5 97.6,16 95.3,15.8 94.2,17 94.6,19.3 92.5,20.8 91.8,22.4 90.5,22.2 89,21.8 87,21.3 86.8,20 85,19.3 82.3,16.7 80.2,15.5 80.2,13.4 79.8,11.5 79.9,10.3 79,9.2 78.2,8.9 77.5,8.1 76.4,9.6 75.5,11.5 74.7,13 73.8,15.4 72.9,19 72.8,21 72.5,21.5 70.5,20.8 69,22.3 70.2,23 68.5,23.7 67,24.8 66.5,25.4 64,25.2 61.5,25.2 58,25.6 57.3,26.8 56.5,27.1 54.5,26.7 52,27.8 50.3,30 48.8,30 48,29.6 48.8,28 50.2,26.5 50.5,25 51.5,24.2 52.5,24.2 54.2,24.1 56.2,26 56.5,24.5 58.7,23.6 59.8,22.4 58.5,20.4 57.5,18.8 55,17 52.2,15.6 49,14.3 45,12.8 43.4,12.7 43,14.5 42.7,16 41,19.5 39,22 37.2,25 35,28 34.9,29.5 34.5,31.3 34.8,32 35.5,33.5 36,35.5 35.8,36.5 34,36.2 32,36.2 30.5,36.6 28,36.7 27.2,37.2 26.3,38.5 26.8,39.5 26.2,40.1 26.2,40.8 24.5,40.9 23.5,40.2 23,40 24,38 22.8,36.6 21.7,36.8 21.2,38.3 20.3,39.3 19.4,40.3 19.5,41.8 18.5,42.5 16.5,43.5 14.9,44.7 13.7,45.2 13.7,45.7 12.4,44.9 12.4,44 13.6,43.5 14.5,42 16,41.9 16,41.5 18.5,40.1 17.2,39 16.1,38 15.7,37.9 16.2,38.8 15.8,40 14.9,40.5 14,40.8 12.5,41.7 10.5,42.9 10.2,43.9 8.8,44.4 7.5,43.8 6,43.1 4.5,43.4 3.1,43 3.2,41.9 0.9,41 0,39.7 -0.3,38.8 -0.7,37.6 -2,36.8 -4.5,36.7`),
  // Chukotka, beyond the antimeridian
  P(`-180,65 -180,69.6 -175,67.8 -170,66.2 -169.7,66 -172,64.5 -176,64.6`),
  // Africa and Sinai
  P(`34.3,31.3 32.3,31.2 30,31.5 28.5,30.9 25.2,31.6 23,32.6 20.5,32.2 19.5,30.3 18,30.8 15.5,32.3 13,32.9 11,33.3 10.3,34.3 10.8,35.7 10.2,37.2 9,37.2 7,37 5,36.8 3,36.8 1,36.5 -1.5,35.3 -2,35 -5.2,35.8 -6.5,34.5 -8.7,33.2 -9.8,31.2 -9.7,29.5 -11.5,28.2 -13,27.2 -14.5,26 -16,23.7 -17,21 -16.2,19.5 -16.5,16.5 -17.5,14.7 -16.7,13.5 -16.7,12.4 -15,11 -13.5,9.5 -12,7.5 -10,5.8 -7.5,4.4 -4,5.2 -1.8,4.8 1,6.1 3,6.3 4.5,6.2 6,4.3 8.5,4.5 9.5,3.8 9.8,2.5 9.5,1 9,-1 11,-3.5 12.2,-5.5 13,-8.5 13.5,-12 12.5,-15 11.8,-17.2 12,-18.5 14,-22.5 15,-26.5 16.5,-28.5 18,-31.5 18.4,-34.2 20,-34.8 22,-34.2 25.5,-34 27.5,-33.3 30,-31 32.5,-28.5 32.8,-26.5 35.5,-24 35.4,-21 34.8,-19.8 36.5,-18.5 40.5,-15.5 40.6,-11 39.5,-7 39,-5 40.2,-2.5 42,-0.8 44,1.5 46,2.5 48.5,5.5 51.2,10.5 50,11.8 46,10.8 43.3,11.7 43,12.7 41.5,14.5 39.5,15.6 38.5,18 37.2,21 35,24.5 33.2,27.2 32.7,29.9 33.6,28.3 34.3,27.8 34.9,29.5`),
  // Madagascar
  P(`49.3,-12 50.4,-15.5 49.5,-17.5 48.3,-21 47.2,-24.8 45.2,-25.6 43.7,-23.5 43.3,-21 44.3,-19 44,-17 46.5,-15.7 47.8,-14`),
  // Australia and Tasmania
  P(`113.2,-22 114,-26 115,-29.5 115,-33.5 118,-35 123.5,-33.8 126,-32.2 131,-31.5 134,-32.7 135.8,-34.8 137.5,-33 138,-35.5 140,-37.8 143.5,-38.8 146.3,-39 147.8,-37.9 150,-37.5 151,-34 153,-31 153.5,-28 152.5,-25 150.5,-22.5 148.5,-20.2 146,-18.5 145.3,-15 143.8,-14.3 142.5,-10.8 141.5,-13 141.5,-17 139.5,-17.5 136.5,-15.5 137,-12 135,-12.2 132.5,-11.4 130.5,-12.5 129.5,-14.8 127,-14 125,-15 123,-17 122,-18 120,-19.8 116.5,-20.7 114,-22`),
  P(`144.7,-40.8 148.3,-40.9 148,-43 146,-43.6 145,-42.2`),
  // New Zealand
  P(`172.7,-34.5 175,-36.5 176,-37.5 178.5,-37.7 177.5,-39 176.5,-40.5 175,-41.6 174.5,-39.5 173.8,-39.2 174.7,-37 173,-35.2`),
  P(`172.7,-40.5 174.2,-41.5 173,-43 171,-44.5 169,-46.5 167,-46 166.5,-45 168,-44 170.5,-43 172,-41.5`),
  // British Isles, Iceland
  P(`-5.7,50.1 -3,50.7 1.3,51.2 1.7,52.7 0.3,53.4 -0.2,54.2 -1.6,55.6 -2.4,56.3 -3,56.4 -1.8,57.6 -3.5,57.7 -4,58.6 -5,58.6 -6,57.5 -5.7,56.3 -5.5,55.3 -4.8,54.7 -3.5,54.8 -3,53.5 -4.5,53.3 -4.2,52.5 -5.2,51.8 -3.5,51.4 -5.1,50.4`),
  P(`-6,52.2 -6.2,53.5 -5.5,54.5 -6.2,55.2 -8,55.2 -10,54 -10.2,52.2 -9.5,51.5 -8,51.7`),
  P(`-24,65.5 -22,66.4 -18,66.2 -14.5,66 -13.5,64.8 -17,63.5 -20,63.5 -22.5,64`),
  // Japan, Taiwan, Hainan, Sakhalin
  P(`130.9,34 132.5,35.3 135,35.7 136.7,37 138.5,37.6 140,39.8 140.5,41 141.5,41 142,39.5 141,38 140.8,36.5 140.5,35.2 139.8,35 139,34.7 137,34.6 135.8,33.5 135.3,34.5 133,34.3 131.5,33.9`),
  P(`129.7,33.2 131,33.9 131.9,33 131.5,31.4 130.6,31 130.2,32.2`),
  P(`132.5,33.8 134.5,34 134.3,33.3 133,32.8`),
  P(`140,41.5 141.2,43.2 141.5,45.4 143,44.2 145.4,43.3 143.2,42 141.5,42.5 140.5,42.8`),
  P(`121,25 122,25 121.5,23 120.7,22 120,23.5`),
  P(`108.7,19.5 110.5,20 111,19.5 109.5,18.2`),
  P(`142,46 143.5,49 143.2,52 142.5,54.3 141.8,53 142.3,50 141.8,47.5`),
  // South-east Asia and the Indies
  P(`79.8,9.5 81.7,7.5 81.5,6.5 80.5,5.9 79.8,7.5`),
  P(`95.3,5.5 97.5,5.2 100.5,2.5 103.7,-1 106,-3 105.8,-5.8 104.5,-5.9 102,-4 100.3,-1 98.7,1.8 96.5,3.5`),
  P(`105.2,-6.8 108,-6.4 110.5,-6.9 114.5,-7.8 114.4,-8.7 110.5,-8.2 106.5,-7.4`),
  P(`109,1.5 110.5,1.8 113,3.2 115.5,5 117,7 119,5.2 118,4.2 117.5,1.5 116.7,-1.5 116,-3.5 114.5,-4 112,-3.5 110.2,-2.9 110,-1.2 109,0.5`),
  P(`119.5,0.8 121,1.3 125,1.5 123,0.5 120.8,0.3 121.5,-1 123.3,-0.9 122.6,-2.5 123.3,-4 121.5,-4.7 121,-2.5 120.3,-3 120.4,-5.5 119.5,-5.5 118.8,-3 119.7,-0.5`),
  P(`131,-0.8 134,-0.8 135,-3.3 138,-1.7 141,-2.6 144.5,-3.8 146.5,-5.5 148,-6 147.5,-7.8 150.5,-10.5 147.5,-10 145,-7.8 143,-8.5 141,-9.1 139,-8.2 138,-8.3 137.5,-5.5 135,-4.2 133.5,-4 132.5,-2.8 131,-1.5`),
  P(`120.6,18.5 122.2,18.5 122.3,16.5 121.6,15 124,12.5 123.5,13.5 122,13.8 120.6,14.2 120,16 120.2,17.5`),
  P(`122,7 123.5,8.5 125.5,9.8 126.5,7 126,6.3 125.4,5.6 124,6.5 123.5,7.5`),
  // Caribbean, Atlantic Canada, Arctic Canada
  P(`-85,21.8 -82,23.2 -79.5,22.8 -77.5,21.7 -74.2,20.2 -77.5,19.9 -78.5,21.5 -81.7,22.2 -84.5,21.7`),
  P(`-74.4,18.3 -72.8,19.9 -70,19.9 -68.4,18.6 -70.5,18.2 -72.5,18`),
  P(`-78.3,18.4 -76.3,18.2 -77.2,17.8`),
  P(`-67.2,18.5 -65.6,18.4 -65.7,18 -67.2,18`),
  P(`-59.4,47.6 -56,51.6 -55.4,50 -53.5,47.5 -52.7,47.5 -53.5,46.6 -55.5,47 -57.5,47.6`),
  P(`-80,73.5 -75,72 -68,70.2 -62,67 -64.5,63.5 -68,62.8 -72,64 -73,67.3 -79,69.5 -86,70.5 -89,73 -82,73.7`),
  P(`-119,71.2 -114,73 -105,73 -100.5,71 -103,69 -112,68.5 -117,69.6`),
  P(`-125,72 -120,74 -116,73 -123,71`),
  P(`-90,76.5 -80,76.2 -62,82.2 -80,83 -92,81 -91,77.5`),
  // Arctic islands, Mediterranean islands, Hawaii
  P(`11,79 16,80.5 26,80.2 22,77.5 16,76.7 13,78`),
  P(`51.5,71.5 55,73.5 58,75.5 68,76.7 64,74.7 57,72.8 56,70.8 53,70.7`),
  P(`12.5,37.8 15.6,38.2 15.1,36.7 12.7,37.6`),
  P(`8.2,41 9.7,41 9.6,39 8.5,38.9 8.4,40.3`),
  P(`8.6,42.3 9.5,43 9.5,41.4 9,41.5`),
  P(`23.5,35.5 26.3,35.2 24,35.1`),
  P(`32.3,35 34.5,35.7 33.5,34.9`),
  P(`-156,20.2 -155.1,19.7 -155.6,18.95 -156,19.7`),
  // Antarctica
  P(`-180,-90 -180,-78 -160,-78.5 -150,-77 -130,-74.5 -110,-74 -100,-73 -88,-73.5 -80,-73.5 -72,-72 -70,-69 -66,-66 -62,-64.5 -57.5,-63.3 -60,-65 -62,-67 -60.5,-69.5 -62,-72 -58,-75 -50,-77.7 -40,-78.3 -30,-76.5 -20,-73 -10,-71.5 0,-70 15,-69.8 30,-69.5 45,-67.5 60,-67.5 70,-69.5 75,-68 85,-66.5 100,-66.5 115,-66 130,-66 145,-67.5 155,-69.5 165,-71 170,-72.5 165,-76 163,-78 170,-78.5 180,-78 180,-90`)
];
// Inland seas and lakes, painted over the land in sea colour
const WATER = [
  P(`28,41.9 28.5,43.5 30,45.5 32,46.5 34,46 33.5,44.5 36.5,45.3 38,47 39,45 37.5,44.5 40,43.4 41.5,41.6 39.5,41 36,41.4 33,42 31,41.1 29,41.2`),
  P(`47,45 49,46.5 53,46.8 53.5,45 51,44.5 50.5,42 52.8,41.2 53,39.5 54,37.4 51,36.6 49,38 49,40 47.5,42.5 47,44`),
  P(`-92,46.8 -89,48 -85,47.9 -84.7,46.7 -87.5,46.5`),
  P(`-87.8,42.2 -87,45 -85.5,46 -86,44 -86.5,42`),
  P(`-84.5,45.9 -82,45.5 -80,44.8 -81.7,43.3 -83,44 -83.5,45`),
  P(`-83.4,41.7 -80,42.6 -79,42.8 -82.5,41.4`),
  P(`-79.7,43.3 -77,43.3 -76.2,44.1 -77.5,43.7`)
];

/* Built-in gazetteer: "Place, Country|lat|lon". Place-name search works offline. */
const GAZ_RAW = `London, United Kingdom|51.5074|-0.1278
Leicester, United Kingdom|52.6369|-1.1398
Birmingham, United Kingdom|52.4862|-1.8904
Edinburgh, United Kingdom|55.9533|-3.1883
Dublin, Ireland|53.3498|-6.2603
Paris, France|48.8566|2.3522
Marseille, France|43.2965|5.3698
Lyon, France|45.764|4.8357
Lisbon, Portugal|38.7223|-9.1393
Porto, Portugal|41.1579|-8.6291
Madrid, Spain|40.4168|-3.7038
Barcelona, Spain|41.3851|2.1734
Seville, Spain|37.3891|-5.9845
Cádiz, Spain|36.5271|-6.2886
Palos de la Frontera, Spain|37.2269|-6.8983
Rome, Italy|41.9028|12.4964
Venice, Italy|45.4408|12.3155
Naples, Italy|40.8518|14.2681
Genoa, Italy|44.4056|8.9463
Florence, Italy|43.7696|11.2558
Valletta, Malta|35.8989|14.5146
Athens, Greece|37.9838|23.7275
Santorini, Greece|36.3932|25.4615
Dubrovnik, Croatia|42.6507|18.0944
Istanbul, Türkiye|41.0082|28.9784
Berlin, Germany|52.52|13.405
Munich, Germany|48.1351|11.582
Amsterdam, Netherlands|52.3676|4.9041
Brussels, Belgium|50.8503|4.3517
Zurich, Switzerland|47.3769|8.5417
Vienna, Austria|48.2082|16.3738
Prague, Czechia|50.0755|14.4378
Budapest, Hungary|47.4979|19.0402
Warsaw, Poland|52.2297|21.0122
Bucharest, Romania|44.4268|26.1025
Kyiv, Ukraine|50.4501|30.5234
Copenhagen, Denmark|55.6761|12.5683
Stockholm, Sweden|59.3293|18.0686
Oslo, Norway|59.9139|10.7522
Bergen, Norway|60.3913|5.3221
Tromsø, Norway|69.6492|18.9553
Longyearbyen, Svalbard|78.2232|15.6267
Helsinki, Finland|60.1699|24.9384
Reykjavik, Iceland|64.1466|-21.9426
Moscow, Russia|55.7558|37.6173
St Petersburg, Russia|59.9311|30.3609
Vladivostok, Russia|43.1155|131.8855
Canary Islands (Las Palmas), Spain|28.1235|-15.4363
La Gomera, Canary Islands|28.0916|-17.1133
Madeira (Funchal), Portugal|32.6669|-16.9241
Azores (Ponta Delgada), Portugal|37.7412|-25.6756
Cape Verde (Praia)|14.9331|-23.5133
Cairo, Egypt|30.0444|31.2357
Alexandria, Egypt|31.2001|29.9187
Marrakesh, Morocco|31.6295|-7.9811
Casablanca, Morocco|33.5731|-7.5898
Algiers, Algeria|36.7538|3.0588
Tunis, Tunisia|36.8065|10.1815
Tripoli, Libya|32.8872|13.1913
Khartoum, Sudan|15.5007|32.5599
Dakar, Senegal|14.7167|-17.4677
Accra, Ghana|5.6037|-0.187
Lagos, Nigeria|6.5244|3.3792
Luanda, Angola|-8.839|13.2894
Kinshasa, DR Congo|-4.4419|15.2663
Addis Ababa, Ethiopia|9.03|38.74
Nairobi, Kenya|-1.2921|36.8219
Mombasa, Kenya|-4.0435|39.6682
Zanzibar, Tanzania|-6.1659|39.2026
Antananarivo, Madagascar|-18.8792|47.5079
Maputo, Mozambique|-25.9692|32.5732
Windhoek, Namibia|-22.5609|17.0658
Cape Town, South Africa|-33.9249|18.4241
Johannesburg, South Africa|-26.2041|28.0473
Durban, South Africa|-29.8587|31.0218
Jerusalem, Israel|31.7683|35.2137
Mecca, Saudi Arabia|21.3891|39.8579
Riyadh, Saudi Arabia|24.7136|46.6753
Dubai, United Arab Emirates|25.2048|55.2708
Doha, Qatar|25.2854|51.531
Muscat, Oman|23.588|58.3829
Aden, Yemen|12.7855|45.0187
Baghdad, Iraq|33.3152|44.3661
Tehran, Iran|35.6892|51.389
Karachi, Pakistan|24.8607|67.0011
Delhi, India|28.6139|77.209
Mumbai, India|19.076|72.8777
Kolkata, India|22.5726|88.3639
Chennai, India|13.0827|80.2707
Colombo, Sri Lanka|6.9271|79.8612
Kathmandu, Nepal|27.7172|85.324
Dhaka, Bangladesh|23.8103|90.4125
Tashkent, Uzbekistan|41.2995|69.2401
Almaty, Kazakhstan|43.222|76.8512
Ulaanbaatar, Mongolia|47.8864|106.9057
Bangkok, Thailand|13.7563|100.5018
Hanoi, Vietnam|21.0285|105.8542
Ho Chi Minh City, Vietnam|10.8231|106.6297
Singapore|1.3521|103.8198
Kuala Lumpur, Malaysia|3.139|101.6869
Jakarta, Indonesia|-6.2088|106.8456
Bali (Denpasar), Indonesia|-8.6705|115.2126
Manila, Philippines|14.5995|120.9842
Hong Kong|22.3193|114.1694
Taipei, Taiwan|25.033|121.5654
Shanghai, China|31.2304|121.4737
Beijing, China|39.9042|116.4074
Seoul, South Korea|37.5665|126.978
Tokyo, Japan|35.6762|139.6503
Osaka, Japan|34.6937|135.5023
Port Moresby, Papua New Guinea|-9.4438|147.1803
Darwin, Australia|-12.4634|130.8456
Perth, Australia|-31.9505|115.8605
Brisbane, Australia|-27.4698|153.0251
Sydney, Australia|-33.8688|151.2093
Melbourne, Australia|-37.8136|144.9631
Hobart, Australia|-42.8821|147.3272
Auckland, New Zealand|-36.8485|174.7633
Wellington, New Zealand|-41.2865|174.7762
Suva, Fiji|-18.1248|178.4501
Papeete, Tahiti|-17.5516|-149.5585
Honolulu, United States|21.3099|-157.8581
Anchorage, United States|61.2181|-149.9003
Vancouver, Canada|49.2827|-123.1207
Seattle, United States|47.6062|-122.3321
San Francisco, United States|37.7749|-122.4194
Los Angeles, United States|34.0522|-118.2437
San Diego, United States|32.7157|-117.1611
Las Vegas, United States|36.1699|-115.1398
Denver, United States|39.7392|-104.9903
Houston, United States|29.7604|-95.3698
New Orleans, United States|29.9511|-90.0715
Chicago, United States|41.8781|-87.6298
Toronto, Canada|43.6532|-79.3832
Montréal, Canada|45.5017|-73.5673
Halifax, Canada|44.6488|-63.5752
St. John's, Canada|47.5615|-52.7126
Boston, United States|42.3601|-71.0589
New York, United States|40.7128|-74.006
Washington DC, United States|38.9072|-77.0369
Miami, United States|25.7617|-80.1918
Mexico City, Mexico|19.4326|-99.1332
Cancún, Mexico|21.1619|-86.8515
Havana, Cuba|23.1136|-82.3666
Bariay Bay, Cuba|21.1|-76.1
Kingston, Jamaica|17.9714|-76.7936
Santo Domingo, Dominican Republic|18.4861|-69.9312
Môle-Saint-Nicolas, Haiti|19.8|-73.4
San Juan, Puerto Rico|18.4655|-66.1057
Nassau, Bahamas|25.0443|-77.3504
San Salvador Island, Bahamas|24.05|-74.5
Bermuda (Hamilton)|32.2949|-64.7814
Panama City, Panama|8.9824|-79.5199
Cartagena, Colombia|10.391|-75.4794
Bogotá, Colombia|4.711|-74.0721
Caracas, Venezuela|10.4806|-66.9036
Quito, Ecuador|-0.1807|-78.4678
Lima, Peru|-12.0464|-77.0428
Cusco, Peru|-13.5319|-71.9675
La Paz, Bolivia|-16.4897|-68.1193
Manaus, Brazil|-3.119|-60.0217
Salvador, Brazil|-12.9777|-38.5016
Rio de Janeiro, Brazil|-22.9068|-43.1729
São Paulo, Brazil|-23.5558|-46.6396
Montevideo, Uruguay|-34.9011|-56.1645
Buenos Aires, Argentina|-34.6037|-58.3816
Santiago, Chile|-33.4489|-70.6693
Ushuaia, Argentina|-54.8019|-68.303`;
const GAZ = GAZ_RAW.split('\n').map(l => { const [name, lat, lon] = l.split('|'); return { name, lat: +lat, lon: +lon }; });
const GAZ_BY_NAME = new Map(GAZ.map(g => [g.name.toLowerCase(), g]));

/* ===== State, storage, helpers ===== */
const STORE_KEY = 'explorers-chart-v1';
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const $ = id => document.getElementById(id);
const state = { owner: '', entries: [], editingId: null, selectedId: null };

function uid() { return 'e' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }

const EXAMPLES = [
  { name: 'Palos de la Frontera, Spain', lat: 37.2269, lon: -6.8983, date: '1492-08-03', note: 'Three ships weigh anchor on the morning tide, bound westward.' },
  { name: 'La Gomera, Canary Islands', lat: 28.0916, lon: -17.1133, date: '1492-09-06', note: 'Last landfall in known waters. Water casks refilled, the rudder mended.' },
  { name: 'San Salvador Island, Bahamas', lat: 24.05, lon: -74.5, date: '1492-10-12', note: 'Land at dawn after thirty-three days at sea. White sand, clear water.' },
  { name: 'Bariay Bay, Cuba', lat: 21.1, lon: -76.1, date: '1492-10-28', note: 'A green coast of palms and tall hills. Charts begin to fill.' },
  { name: 'Môle-Saint-Nicolas, Haiti', lat: 19.8, lon: -73.4, date: '1492-12-06', note: 'A deep harbour at the western tip of a great island.' },
  { name: 'Lisbon, Portugal', lat: 38.7223, lon: -9.1393, date: '1493-03-04', note: 'Storm-driven into the Tagus. Home waters at last.' }
].map(e => Object.assign({ id: uid(), example: true }, e));

function loadState() {
  let raw = null;
  try { raw = localStorage.getItem(STORE_KEY); } catch (e) { raw = null; }
  if (raw) {
    try {
      const d = JSON.parse(raw);
      state.owner = typeof d.owner === 'string' ? d.owner : '';
      state.entries = cleanEntries(d.entries);
      return;
    } catch (e) { /* fall through to examples */ }
  }
  state.owner = '';
  state.entries = EXAMPLES.map(e => Object.assign({}, e));
}
function saveState() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify({ owner: state.owner, entries: state.entries })); } catch (e) { /* storage unavailable */ }
}
function cleanEntries(arr) {
  if (!Array.isArray(arr)) return [];
  const out = [];
  for (const e of arr) {
    if (!e || typeof e !== 'object') continue;
    const lat = Number(e.lat), lon = Number(e.lon);
    if (!isFinite(lat) || !isFinite(lon) || Math.abs(lat) > 90 || Math.abs(lon) > 180) continue;
    out.push({
      id: typeof e.id === 'string' && e.id ? e.id : uid(),
      name: String(e.name || '').slice(0, 80) || 'Unnamed position',
      lat, lon,
      date: /^\d{4}-\d{2}-\d{2}$/.test(String(e.date || '')) ? String(e.date) : '',
      note: String(e.note || '').slice(0, 600),
      example: !!e.example
    });
  }
  return out;
}

/* chronological order: dated entries by date, undated ones after, ties by entry order */
function sortedEntries() {
  return state.entries.map((e, i) => ({ e, i }))
    .sort((a, b) => ((a.e.date || '9999-99-99') < (b.e.date || '9999-99-99') ? -1 : (a.e.date || '9999-99-99') > (b.e.date || '9999-99-99') ? 1 : a.i - b.i))
    .map(x => x.e);
}

function fmtDate(s) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || '');
  if (!m) return 'Undated';
  return (+m[3]) + ' ' + MONTHS[+m[2] - 1] + ' ' + (+m[1]);
}
function fmtCoord(lat, lon) {
  return Math.abs(lat).toFixed(2) + '°' + (lat >= 0 ? 'N' : 'S') + ', ' + Math.abs(lon).toFixed(2) + '°' + (lon >= 0 ? 'E' : 'W');
}
function haversineKm(a, b) {
  const R = 6371, r = Math.PI / 180;
  const dLat = (b.lat - a.lat) * r, dLon = (b.lon - a.lon) * r;
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(x)));
}
function totalKm(list) {
  let t = 0;
  for (let i = 1; i < list.length; i++) t += haversineKm(list[i - 1], list[i]);
  return t;
}
const nf = new Intl.NumberFormat('en-GB', { maximumFractionDigits: 0 });

/* Parse "37.2269", "37.2269 N", "6.9 W" (W and S become negative). */
function parseCoord(str, isLat) {
  const s = String(str || '').trim().replace(',', '.').replace(/°/g, '');
  if (!s) return NaN;
  const m = /^([+-]?\d+(?:\.\d+)?)\s*([NSEWnsew])?$/.exec(s);
  if (!m) return NaN;
  let v = parseFloat(m[1]);
  const h = (m[2] || '').toUpperCase();
  if (h === 'S' || h === 'W') v = -Math.abs(v);
  if ((isLat && (h === 'E' || h === 'W')) || (!isLat && (h === 'N' || h === 'S'))) return NaN;
  const lim = isLat ? 90 : 180;
  return Math.abs(v) <= lim ? v : NaN;
}

/* ===== Toast and modal ===== */
let toastTimer = null;
function toast(msg, actionLabel, actionFn) {
  let t = $('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
  t.textContent = msg + ' ';
  if (actionLabel) {
    const b = document.createElement('button'); b.className = 'small'; b.textContent = actionLabel;
    b.onclick = () => { actionFn(); t.hidden = true; };
    t.appendChild(b);
  }
  t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.hidden = true; }, actionLabel ? 7000 : 3500);
}
function openModal(title, bodyNode, actions) {
  $('mTitle').textContent = title;
  const body = $('mBody'); body.textContent = '';
  if (typeof bodyNode === 'string') { const p = document.createElement('p'); p.textContent = bodyNode; p.style.margin = '0'; body.appendChild(p); }
  else body.appendChild(bodyNode);
  const act = $('mActions'); act.textContent = '';
  for (const a of actions) {
    const b = document.createElement('button');
    b.textContent = a.label; if (a.cls) b.className = a.cls;
    b.onclick = () => { if (a.keep !== true) closeModal(); if (a.fn) a.fn(); };
    act.appendChild(b);
  }
  $('modal').hidden = false;
  const first = act.querySelector('button'); if (first) first.focus();
}
function closeModal() { $('modal').hidden = true; }

/* ===== Standalone helpers (used when the page runs outside Claude) ===== */
const IS_STANDALONE = typeof claude === 'undefined';
function standaloneDownload(filename, data) {
  const type = filename.endsWith('.pdf') ? 'application/pdf' : filename.endsWith('.png') ? 'image/png' : 'application/json';
  const blob = data instanceof Blob ? data : new Blob([data], { type });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = filename; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 5000);
}
/* Minimal one-page PDF around a JPEG, so no PDF library is needed. */
function makePdf(jpeg, pxW, pxH, mmW, mmH, title) {
  const enc = new TextEncoder(), parts = [], offs = []; let len = 0;
  const push = b => { if (typeof b === 'string') b = enc.encode(b); parts.push(b); len += b.length; };
  const w = (mmW * 72 / 25.4).toFixed(2), h = (mmH * 72 / 25.4).toFixed(2);
  const obj = (n, body) => { offs[n] = len; push(n + ' 0 obj\n' + body + '\nendobj\n'); };
  push('%PDF-1.4\n');
  obj(1, '<< /Type /Catalog /Pages 2 0 R >>');
  obj(2, '<< /Type /Pages /Kids [3 0 R] /Count 1 >>');
  obj(3, '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ' + w + ' ' + h + '] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>');
  offs[4] = len;
  push('4 0 obj\n<< /Type /XObject /Subtype /Image /Width ' + pxW + ' /Height ' + pxH + ' /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ' + jpeg.length + ' >>\nstream\n');
  push(jpeg); push('\nendstream\nendobj\n');
  const cs = 'q ' + w + ' 0 0 ' + h + ' 0 0 cm /Im0 Do Q';
  obj(5, '<< /Length ' + cs.length + ' >>\nstream\n' + cs + '\nendstream');
  const t = String(title || 'Chart').replace(/[^\x20-\x7e]/g, '').replace(/[()\\]/g, '');
  obj(6, '<< /Title (' + t + ') /Producer (Explorer Chart) >>');
  const xref = len; let x = 'xref\n0 7\n0000000000 65535 f \n';
  for (let i = 1; i <= 6; i++) x += String(offs[i]).padStart(10, '0') + ' 00000 n \n';
  push(x + 'trailer\n<< /Size 7 /Root 1 0 R /Info 6 0 R >>\nstartxref\n' + xref + '\n%%EOF\n');
  const out = new Uint8Array(len); let p = 0; for (const b of parts) { out.set(b, p); p += b.length; }
  return out;
}

/* ===== Map geometry helpers (shared with the poster) ===== */
const SVGNS = 'http://www.w3.org/2000/svg';
function ringD(ring, proj) {
  let d = '';
  for (let i = 0; i < ring.length; i++) { const p = proj(ring[i]); d += (i ? 'L' : 'M') + p[0].toFixed(1) + ',' + p[1].toFixed(1); }
  return d + 'Z';
}
function worldWidthAt(proj, lat) { return proj([180, lat])[0] - proj([-180, lat])[0]; }

/* Curved leg between two entries as quadratic arcs. Legs over the date line come back as two arcs. */
function legArcs(proj, a, b) {
  const p0 = proj([a.lon, a.lat]), p1 = proj([b.lon, b.lat]);
  const Wp = worldWidthAt(proj, (a.lat + b.lat) / 2);
  const dx = p1[0] - p0[0];
  let pairs;
  if (Math.abs(dx) > Wp / 2) {
    const s = Math.sign(dx);
    pairs = [[p0, [p1[0] - s * Wp, p1[1]]], [[p0[0] + s * Wp, p0[1]], p1]];
  } else pairs = [[p0, p1]];
  return pairs.map(([q0, q1]) => {
    const mx = (q0[0] + q1[0]) / 2, my = (q0[1] + q1[1]) / 2;
    const vx = q1[0] - q0[0], vy = q1[1] - q0[1];
    const len = Math.hypot(vx, vy) || 1;
    let nx = vy / len, ny = -vx / len;
    if (ny > 0) { nx = -nx; ny = -ny; }
    const bow = len * 0.2;
    const cx = mx + nx * bow, cy = my + ny * bow;
    return {
      d: 'M' + q0[0].toFixed(1) + ',' + q0[1].toFixed(1) + ' Q' + cx.toFixed(1) + ',' + cy.toFixed(1) + ' ' + q1[0].toFixed(1) + ',' + q1[1].toFixed(1),
      mid: [0.25 * q0[0] + 0.5 * cx + 0.25 * q1[0], 0.25 * q0[1] + 0.5 * cy + 0.25 * q1[1]],
      ang: Math.atan2(q1[1] - q0[1], q1[0] - q0[0]) * 180 / Math.PI,
      len
    };
  });
}

/* Compass rose markup, centred on (cx, cy) with radius R. */
function roseMarkup(cx, cy, R, withLabel) {
  const f = n => n.toFixed(2);
  let s = '';
  s += `<circle cx="${f(cx)}" cy="${f(cy)}" r="${f(R * 0.8)}" fill="none" stroke="#4a3220" stroke-width="1.2"/>`;
  s += `<circle cx="${f(cx)}" cy="${f(cy)}" r="${f(R * 0.74)}" fill="none" stroke="#4a3220" stroke-width=".6"/>`;
  for (let i = 0; i < 32; i++) {
    const a = i * Math.PI / 16, r1 = R * 0.74, r2 = R * (i % 2 ? 0.77 : 0.8);
    s += `<line x1="${f(cx + r1 * Math.sin(a))}" y1="${f(cy - r1 * Math.cos(a))}" x2="${f(cx + r2 * Math.sin(a))}" y2="${f(cy - r2 * Math.cos(a))}" stroke="#4a3220" stroke-width=".7"/>`;
  }
  const petal = (deg, len, wid, dark, light) => {
    const t = deg * Math.PI / 180, dx = Math.sin(t), dy = -Math.cos(t), px = Math.cos(t), py = Math.sin(t);
    const tip = [cx + len * dx, cy + len * dy], w = len * wid;
    const b1 = [cx + px * w, cy + py * w], b2 = [cx - px * w, cy - py * w];
    return `<path d="M${f(tip[0])},${f(tip[1])} L${f(cx)},${f(cy)} L${f(b1[0])},${f(b1[1])}Z" fill="${dark}" stroke="#2c1d10" stroke-width=".6"/>` +
           `<path d="M${f(tip[0])},${f(tip[1])} L${f(cx)},${f(cy)} L${f(b2[0])},${f(b2[1])}Z" fill="${light}" stroke="#2c1d10" stroke-width=".6"/>`;
  };
  for (let i = 0; i < 16; i++) if (i % 2) s += petal(i * 22.5, R * 0.46, 0.1, '#7a5a3a', '#f4ecd8');
  for (let i = 0; i < 4; i++) s += petal(i * 90 + 45, R * 0.62, 0.11, '#4a3220', '#f4ecd8');
  for (let i = 0; i < 4; i++) s += petal(i * 90, R * 0.95, 0.1, '#1d3557', '#f4ecd8');
  s += `<circle cx="${f(cx)}" cy="${f(cy)}" r="${f(R * 0.05)}" fill="#8c2f26" stroke="#2c1d10" stroke-width=".6"/>`;
  if (withLabel) s += `<text x="${f(cx)}" y="${f(cy - R * 1.02)}" text-anchor="middle" font-family="Cinzel, serif" font-weight="700" font-size="${f(R * 0.2)}" fill="#1d3557">N</text>`;
  return s;
}
function rhumbMarkup(cx, cy, len) {
  let s = '';
  for (let i = 0; i < 16; i++) {
    const a = i * Math.PI / 8;
    s += `<line x1="${cx.toFixed(1)}" y1="${cy.toFixed(1)}" x2="${(cx + len * Math.sin(a)).toFixed(1)}" y2="${(cy - len * Math.cos(a)).toFixed(1)}"/>`;
  }
  return s;
}
function sealPath(r) {
  const n = 16; let d = '';
  for (let i = 0; i < n * 2; i++) {
    const a = i * Math.PI / n, rr = r * (i % 2 ? 0.9 : 1.04);
    d += (i ? 'L' : 'M') + (rr * Math.cos(a)).toFixed(2) + ',' + (rr * Math.sin(a)).toFixed(2);
  }
  return d + 'Z';
}
const SHIP_D = 'M-13,2 L13,2 L9,8 L-9,8 Z M0,2 L0,-15 M0,-14 Q10,-9 8,0 L0,0 Z M0,-12 Q-9,-8 -7,0 L0,0 Z';

/* ===== Live map ===== */
const map = { W: 0, H: 0, proj: null, svg: null, g: null, zoom: null, k: 1, markers: null, arrows: null, legPaths: [], pin: null, playing: false, stop: false };

function initMap() {
  map.svg = d3.select('#map');
  map.zoom = d3.zoom().scaleExtent([1, 60]).on('zoom', zoomed);
  map.svg.call(map.zoom).on('dblclick.zoom', null);
  map.svg.on('click', onMapClick).on('mousemove', onMapMove).on('mouseleave', () => { $('cursorPos').textContent = 'Click the sea or land to take a bearing'; });
  $('zIn').onclick = () => map.svg.transition().duration(300).call(map.zoom.scaleBy, 1.7);
  $('zOut').onclick = () => map.svg.transition().duration(300).call(map.zoom.scaleBy, 1 / 1.7);
  $('zFit').onclick = () => fitAll(true);
  let raf = 0, firstDone = false;
  const ro = new ResizeObserver(() => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => { buildMap(); fitAll(false); firstDone = true; }); });
  ro.observe($('map').parentElement);
}

function buildMap() {
  const el = $('map'), W = el.clientWidth, H = el.clientHeight;
  if (W < 10 || H < 10) return;
  map.W = W; map.H = H;
  map.proj = d3.geoNaturalEarth1().fitExtent([[8, 8], [W - 8, H - 8]], { type: 'Sphere' });
  map.zoom.extent([[0, 0], [W, H]]).translateExtent([[0, 0], [W, H]]);
  const svg = map.svg; svg.selectAll('*').remove();
  svg.attr('viewBox', `0 0 ${W} ${H}`);
  const g = svg.append('g'); map.g = g;
  const proj = map.proj, path = d3.geoPath(proj);
  const sphere = path({ type: 'Sphere' });
  g.append('rect').attr('width', W).attr('height', H).attr('fill', '#d8c79b');
  g.append('path').attr('d', sphere).attr('fill', '#e4dab8');
  g.append('path').attr('d', path(d3.geoGraticule10())).attr('fill', 'none').attr('stroke', '#7c5d3b').attr('stroke-opacity', .28).attr('stroke-width', .6).attr('vector-effect', 'non-scaling-stroke');
  // equator and tropics, drawn a little stronger
  const lines = [[-180, 0, 180, 0], [-180, 23.44, 180, 23.44], [-180, -23.44, 180, -23.44]];
  for (const [x0, y0, x1, y1] of lines) {
    const pts = d3.range(x0, x1 + 1, 5).map(lo => proj([lo, y0]));
    g.append('path').attr('d', 'M' + pts.map(p => p.join(',')).join('L')).attr('fill', 'none').attr('stroke', '#7c5d3b').attr('stroke-opacity', .45)
      .attr('stroke-width', .8).attr('stroke-dasharray', '2 4').attr('vector-effect', 'non-scaling-stroke');
  }
  // land: coastal water-lines, then the land itself
  const landD = LAND.map(r => ringD(r, proj)).join('');
  for (const [w, o] of [[13, .06], [8, .08], [4, .12]]) g.append('path').attr('d', landD).attr('class', 'waterline').attr('stroke-width', w).attr('stroke-opacity', o);
  g.append('path').attr('d', landD).attr('class', 'land');
  g.append('path').attr('d', WATER.map(r => ringD(r, proj)).join('')).attr('fill', '#e4dab8').attr('stroke', '#4a3220').attr('stroke-width', .8).attr('vector-effect', 'non-scaling-stroke');
  // compass roses with rhumb lines
  const roses = [[-30, -30, 0.062], [-138, -14, 0.04], [78, -34, 0.045]];
  const rg = g.append('g').attr('pointer-events', 'none');
  const rhumb = rg.append('g').attr('stroke', '#4a3220').attr('stroke-opacity', .13).attr('stroke-width', .7).attr('vector-effect', 'non-scaling-stroke');
  let rhumbHtml = '', roseHtml = '';
  roses.forEach(([lo, la, s], i) => { const c = proj([lo, la]), R = W * s; rhumbHtml += rhumbMarkup(c[0], c[1], W * 1.1); roseHtml += roseMarkup(c[0], c[1], R, i === 0); });
  rhumb.html(rhumbHtml);
  rg.append('g').html(roseHtml);
  // sphere outline and neatline
  g.append('path').attr('d', sphere).attr('fill', 'none').attr('stroke', '#4a3220').attr('stroke-width', 2).attr('vector-effect', 'non-scaling-stroke');
  map.dyn = g.append('g');
  drawDynamic();
}

function drawDynamic(animateId) {
  if (!map.g) return;
  const proj = map.proj, list = sortedEntries();
  map.dyn.selectAll('*').remove();
  const legG = map.dyn.append('g'), arrG = map.dyn.append('g'), mkG = map.dyn.append('g'), pinG = map.dyn.append('g');
  map.legPaths = [];
  const arrows = [];
  for (let i = 1; i < list.length; i++) {
    const arcs = legArcs(proj, list[i - 1], list[i]);
    arcs.forEach((a, j) => {
      const p = legG.append('path').attr('class', 'route').attr('d', a.d).attr('data-to', list[i].id);
      map.legPaths.push({ el: p.node(), to: list[i].id });
      if (j === 0) arrows.push({ x: a.mid[0], y: a.mid[1], ang: a.ang });
      if (animateId && list[i].id === animateId) revealPath(p.node());
    });
  }
  map.arrows = arrG.selectAll('path').data(arrows).enter().append('path').attr('d', 'M-5,-5 L6,0 L-5,5 L-2,0Z').attr('fill', '#1d3557').attr('opacity', .85).attr('pointer-events', 'none');
  const mk = list.map((e, i) => { const p = proj([e.lon, e.lat]); return { e, n: i + 1, x: p[0], y: p[1] }; });
  map.markers = mkG.selectAll('g').data(mk, d => d.e.id).enter().append('g').attr('class', 'marker').attr('data-id', d => d.e.id);
  map.markers.append('circle').attr('class', 'pulse').attr('r', 12);
  map.markers.append('path').attr('class', 'seal-bg').attr('d', sealPath(11)).attr('fill', '#8c2f26').attr('stroke', '#4a1610').attr('stroke-width', 1);
  map.markers.append('circle').attr('r', 7.6).attr('fill', 'none').attr('stroke', 'rgba(255,225,200,.45)').attr('stroke-width', 1);
  map.markers.append('text').attr('text-anchor', 'middle').attr('dy', '0.34em').attr('font-family', 'Cinzel, serif').attr('font-size', 9.5).attr('font-weight', 700).attr('fill', '#f6e7d0').attr('pointer-events', 'none').text(d => d.n);
  map.markers.append('text').attr('class', 'lbl').attr('x', 15).attr('dy', '0.33em').attr('font-size', 14).text(d => d.e.name.split(',')[0]);
  map.markers.on('mouseenter', (ev, d) => highlight(d.e.id, true)).on('mouseleave', (ev, d) => highlight(d.e.id, false))
    .on('click', (ev, d) => { ev.stopPropagation(); selectEntry(d.e.id, true); });
  map.pin = pinG.append('g').attr('pointer-events', 'none').attr('display', 'none');
  map.pin.append('path').attr('d', 'M-7,-7 L7,7 M7,-7 L-7,7').attr('stroke', '#8c2f26').attr('stroke-width', 3).attr('stroke-linecap', 'round');
  zoomed({ transform: d3.zoomTransform(map.svg.node()) });
}

function revealPath(node) {
  const L = node.getTotalLength();
  node.style.strokeDasharray = L + ' ' + L; node.style.strokeDashoffset = L;
  node.getBoundingClientRect();
  node.style.transition = 'stroke-dashoffset 1.4s ease-in-out';
  node.style.strokeDashoffset = 0;
  setTimeout(() => { node.style.transition = ''; node.style.strokeDasharray = ''; node.style.strokeDashoffset = ''; }, 1500);
}

function zoomed(ev) {
  const T = ev.transform; map.k = T.k;
  if (!map.g) return;
  map.g.attr('transform', T);
  const inv = 1 / T.k;
  if (map.markers) map.markers.attr('transform', d => `translate(${d.x},${d.y}) scale(${inv})`);
  if (map.arrows) map.arrows.attr('transform', d => `translate(${d.x},${d.y}) rotate(${d.ang}) scale(${inv})`);
  map.svg.classed('showlbl', T.k >= 1.8);
}

function flyTo(x, y, k, ms) {
  const T = d3.zoomIdentity.translate(map.W / 2, map.H / 2).scale(k).translate(-x, -y);
  (ms === 0 ? map.svg : map.svg.transition().duration(ms || 900)).call(map.zoom.transform, T);
}
function fitAll(animate) {
  if (!map.proj) return;
  const list = state.entries;
  if (!list.length) { map.svg.call(map.zoom.transform, d3.zoomIdentity); return; }
  const pts = list.map(e => map.proj([e.lon, e.lat]));
  const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]);
  const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
  const bw = Math.max(x1 - x0, 1), bh = Math.max(y1 - y0, 1);
  let k = Math.min(map.W / (bw * 1.6 + 120), map.H / (bh * 1.9 + 120));
  k = Math.max(1, Math.min(k, list.length === 1 ? 5 : 12));
  flyTo((x0 + x1) / 2, (y0 + y1) / 2 - bh * 0.05, k, animate ? 900 : 0);
}

function mapPoint(ev) {
  const [px, py] = d3.pointer(ev, map.g.node());
  const ll = map.proj.invert([px, py]);
  return ll && isFinite(ll[0]) && Math.abs(ll[1]) <= 90 && Math.abs(ll[0]) <= 180 ? { lon: ll[0], lat: ll[1], x: px, y: py } : null;
}
function onMapMove(ev) {
  if (!map.g) return;
  const p = mapPoint(ev);
  $('cursorPos').textContent = p ? fmtCoord(p.lat, p.lon) : 'Beyond the edge of the chart';
}
function onMapClick(ev) {
  if (map.playing) return;
  const p = mapPoint(ev);
  if (!p) return;
  $('fLat').value = p.lat.toFixed(4); $('fLon').value = p.lon.toFixed(4);
  $('fErr').textContent = '';
  if (map.pin) map.pin.attr('display', null).attr('transform', `translate(${p.x},${p.y}) scale(${1 / map.k})`);
  maybeName();
}
function hidePin() { if (map.pin) map.pin.attr('display', 'none'); }

function highlight(id, on) {
  if (map.markers) map.markers.classed('on', d => on ? d.e.id === id : d.e.id === state.selectedId);
  document.querySelectorAll('.entry').forEach(li => li.classList.toggle('on', on ? li.dataset.id === id : li.dataset.id === state.selectedId));
  d3.selectAll('.route').classed('hot', function () { return on && this.getAttribute('data-to') === id; });
}

/* ===== Logbook list, form, import/export, replay ===== */
function renderAll(animateId) {
  renderList();
  drawDynamic(animateId);
}

function renderList() {
  const list = sortedEntries(), ol = $('entries');
  ol.textContent = '';
  const km = totalKm(list);
  $('stats').textContent = list.length
    ? list.length + (list.length === 1 ? ' position' : ' positions') + ' · ' + Math.max(0, list.length - 1) + (list.length === 2 ? ' leg' : ' legs') + ' · ' + nf.format(km / 1.852) + ' nautical miles (' + nf.format(km) + ' km)'
    : 'No positions charted yet';
  $('exBanner').hidden = !state.entries.some(e => e.example);
  if (!list.length) {
    const li = document.createElement('li'); li.className = 'empty';
    li.textContent = 'The log is empty. Click the chart or type a port name to chart your first position.';
    ol.appendChild(li); return;
  }
  list.forEach((e, i) => {
    const li = document.createElement('li'); li.className = 'entry' + (e.id === state.selectedId ? ' on' : ''); li.dataset.id = e.id;
    const num = document.createElement('div'); num.className = 'num'; num.textContent = i + 1;
    const head = document.createElement('div');
    const nm = document.createElement('div'); nm.className = 'nm'; nm.textContent = e.name;
    const meta = document.createElement('div'); meta.className = 'meta'; meta.textContent = fmtDate(e.date) + ' · ' + fmtCoord(e.lat, e.lon);
    head.append(nm, meta);
    li.append(num, head);
    if (e.note) { const n = document.createElement('div'); n.className = 'note'; n.textContent = e.note; li.appendChild(n); }
    const acts = document.createElement('div'); acts.className = 'acts';
    const be = document.createElement('button'); be.className = 'small ghost'; be.textContent = 'Edit'; be.onclick = ev => { ev.stopPropagation(); startEdit(e.id); };
    const bd = document.createElement('button'); bd.className = 'small ghost'; bd.textContent = 'Strike out'; bd.onclick = ev => { ev.stopPropagation(); removeEntry(e.id); };
    acts.append(be, bd); li.appendChild(acts);
    li.addEventListener('mouseenter', () => highlight(e.id, true));
    li.addEventListener('mouseleave', () => highlight(e.id, false));
    li.addEventListener('click', () => selectEntry(e.id, true));
    ol.appendChild(li);
  });
}

function selectEntry(id, fly) {
  state.selectedId = id;
  highlight(id, true);
  const e = state.entries.find(x => x.id === id);
  if (e && fly && map.proj) { const p = map.proj([e.lon, e.lat]); flyTo(p[0], p[1], Math.max(map.k, 6), 900); }
  const li = document.querySelector('.entry[data-id="' + id + '"]');
  if (li) li.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

function todayISO() {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}
function resetForm() {
  state.editingId = null;
  $('form').reset();
  $('fDate').value = todayISO();
  $('fErr').textContent = '';
  nameAuto = false; nameTok++; setNameNote('');
  $('btnSave').textContent = 'Chart this position';
  $('btnCancel').hidden = true;
  hidePin();
}
function startEdit(id) {
  const e = state.entries.find(x => x.id === id); if (!e) return;
  state.editingId = id; nameAuto = false; setNameNote('');
  $('fName').value = e.name; $('fLat').value = e.lat; $('fLon').value = e.lon; $('fDate').value = e.date; $('fNote').value = e.note;
  $('btnSave').textContent = 'Update this position';
  $('btnCancel').hidden = false;
  $('fErr').textContent = '';
  $('form').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  $('fName').focus({ preventScroll: true });
}
function removeEntry(id) {
  const idx = state.entries.findIndex(x => x.id === id); if (idx < 0) return;
  const gone = state.entries.splice(idx, 1)[0];
  if (state.editingId === id) resetForm();
  if (state.selectedId === id) state.selectedId = null;
  saveState(); renderAll();
  toast('Struck out “' + gone.name.split(',')[0] + '”.', 'Undo', () => { state.entries.splice(idx, 0, gone); saveState(); renderAll(); });
}

function onSubmit(ev) {
  ev.preventDefault();
  // a pasted "lat, lon" pair in the latitude box is split across both boxes
  const latRaw = $('fLat').value;
  if (!latRaw.trim() && !$('fLon').value.trim() && $('fName').value.trim()) { findCoords(); return; }
  if (latRaw.includes(',') && !$('fLon').value) {
    const [a, b] = latRaw.split(','); $('fLat').value = a.trim(); $('fLon').value = (b || '').trim();
  }
  const lat = parseCoord($('fLat').value, true), lon = parseCoord($('fLon').value, false);
  if (isNaN(lat)) { $('fErr').textContent = 'Latitude must be a number from -90 to 90 (south is negative).'; $('fLat').focus(); return; }
  if (isNaN(lon)) { $('fErr').textContent = 'Longitude must be a number from -180 to 180 (west is negative).'; $('fLon').focus(); return; }
  const name = $('fName').value.trim() || fmtCoord(lat, lon);
  const rec = { name: name.slice(0, 80), lat, lon, date: $('fDate').value || '', note: $('fNote').value.trim().slice(0, 600) };
  let id;
  if (state.editingId) {
    const e = state.entries.find(x => x.id === state.editingId);
    Object.assign(e, rec); id = e.id;
  } else {
    id = uid(); state.entries.push(Object.assign({ id }, rec));
  }
  const wasEdit = !!state.editingId;
  saveState(); resetForm(); state.selectedId = id;
  renderAll(wasEdit ? null : id);
  const p = map.proj([lon, lat]); flyTo(p[0], p[1], Math.max(Math.min(map.k, 4), 2.5), 900);
  setTimeout(() => highlight(id, true), 50);
}

function onNameInput() { nameAuto = false; setNameNote(''); }

/* ===== Export / Import ===== */
function exportPayload() {
  return JSON.stringify({ format: 'explorers-chart', version: 1, owner: state.owner, exportedAt: new Date().toISOString(), entries: state.entries.map(({ id, name, lat, lon, date, note }) => ({ id, name, lat, lon, date, note })) }, null, 2);
}
async function saveFile(filename, data, fallbackText) {
  if (IS_STANDALONE) { standaloneDownload(filename, data); toast('Saved ' + filename + '.'); return; }
  let dl = null;
  try { dl = await claude.use('downloads'); } catch (e) { dl = null; }
  if (dl) {
    try { await dl.save({ filename, data }); toast('Saved ' + filename + '.'); return; }
    catch (err) { if (err && err.code === 'declined') return; if (err && err.code === 'too_large') { toast('That file is too large to save here.'); return; } }
  }
  if (fallbackText != null) showTextFallback(filename, fallbackText);
  else toast('Saving files is not available in this view.');
}
function showTextFallback(filename, text) {
  const wrap = document.createElement('div');
  const p = document.createElement('p'); p.style.margin = '0 0 6px'; p.textContent = 'Saving is not available here. Copy this text into a file named ' + filename + '.';
  const ta = document.createElement('textarea'); ta.value = text; ta.readOnly = true; ta.rows = 10; ta.style.fontFamily = 'monospace'; ta.style.fontSize = '12px';
  wrap.append(p, ta);
  openModal('Copy the log', wrap, [
    { label: 'Copy', cls: 'seal', keep: true, fn: async () => { try { await navigator.clipboard.writeText(text); toast('Copied.'); } catch (e) { ta.select(); toast('Press copy on the selected text.'); } } },
    { label: 'Close', cls: 'ghost' }
  ]);
}
function onExport() { const t = exportPayload(); saveFile('explorer-voyages.json', t, t); }
function onImportFile(ev) {
  const f = ev.target.files && ev.target.files[0]; ev.target.value = '';
  if (!f) return;
  const rd = new FileReader();
  rd.onload = () => {
    let data;
    try { data = JSON.parse(rd.result); } catch (e) { toast('That file is not valid JSON.'); return; }
    const arr = Array.isArray(data) ? data : data && data.entries;
    const clean = cleanEntries(arr);
    if (!clean.length) { toast('No usable positions were found in that file.'); return; }
    clean.forEach(e => { delete e.example; });
    openModal('Import ' + clean.length + (clean.length === 1 ? ' position' : ' positions'), 'Replace the current log with these entries, or add them to it?', [
      { label: 'Replace log', cls: 'seal', fn: () => applyImport(clean, data, true) },
      { label: 'Add to log', fn: () => applyImport(clean, data, false) },
      { label: 'Cancel', cls: 'ghost' }
    ]);
  };
  rd.onerror = () => toast('The file could not be read.');
  rd.readAsText(f);
}
function applyImport(clean, data, replace) {
  if (replace) { state.entries = clean; if (data && typeof data.owner === 'string') { state.owner = data.owner.slice(0, 40); $('owner').value = state.owner; } }
  else { const have = new Set(state.entries.map(e => e.id)); clean.forEach(e => { if (have.has(e.id)) e.id = uid(); state.entries.push(e); }); }
  state.selectedId = null; resetForm(); saveState(); renderAll(); fitAll(true);
  toast('Imported ' + clean.length + (clean.length === 1 ? ' position.' : ' positions.'));
}

/* ===== Replay: a ship sails the route ===== */
const wait = ms => new Promise(r => setTimeout(r, ms));
async function replay() {
  const btn = $('btnReplay');
  if (map.playing) { map.stop = true; return; }
  if (map.legPaths.length === 0) { toast('Chart at least two positions to sail a route.'); return; }
  map.playing = true; map.stop = false; btn.textContent = 'Stop voyage';
  fitAll(true); await wait(950);
  const layer = map.dyn.append('g').attr('pointer-events', 'none');
  const ship = layer.append('g'); ship.append('path').attr('d', SHIP_D).attr('fill', '#f4ecd8').attr('stroke', '#2c1d10').attr('stroke-width', 1.4).attr('stroke-linejoin', 'round');
  const place = (pt, ang) => { const flip = Math.cos(ang * Math.PI / 180) < 0 ? -1 : 1; ship.attr('transform', `translate(${pt.x},${pt.y}) scale(${flip / map.k * 1.2}, ${1 / map.k * 1.2})`); };
  const first = map.legPaths[0].el; place(first.getPointAtLength(0), 0);
  const prevTo = new Set();
  for (const seg of map.legPaths) {
    if (map.stop) break;
    const L = seg.el.getTotalLength();
    const trail = layer.insert('path', 'g').attr('d', seg.el.getAttribute('d')).attr('class', 'route hot').style('stroke-dasharray', L + ' ' + L).style('stroke-dashoffset', L);
    const dur = Math.max(1000, Math.min(2800, L / map.W * 3200 / Math.sqrt(map.k)));
    const t0 = performance.now();
    await new Promise(res => {
      const step = now => {
        let t = Math.min(1, (now - t0) / dur); if (map.stop) t = 1;
        const e = t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        const pt = seg.el.getPointAtLength(L * e), pt2 = seg.el.getPointAtLength(Math.min(L, L * e + 1));
        place(pt, Math.atan2(pt2.y - pt.y, pt2.x - pt.x) * 180 / Math.PI);
        trail.style('stroke-dashoffset', L * (1 - e));
        t < 1 ? requestAnimationFrame(step) : res();
      };
      requestAnimationFrame(step);
    });
    if (!prevTo.has(seg.to)) { prevTo.add(seg.to); highlight(seg.to, true); state.selectedId = seg.to; renderListSelection(); }
    await wait(350);
  }
  layer.transition().duration(700).style('opacity', 0).remove();
  map.playing = false; btn.textContent = 'Replay voyage';
}
function renderListSelection() {
  document.querySelectorAll('.entry').forEach(li => li.classList.toggle('on', li.dataset.id === state.selectedId));
  const li = document.querySelector('.entry.on'); if (li) li.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

/* ===== Place naming from coordinates, GPS, and finding coordinates from a name ===== */
let nameAuto = false, nameTok = 0, nameTimer = null;
function setNameNote(t) { $('nameNote').textContent = t || ''; }

function offlineName(lat, lon) {
  let best = null;
  for (const g of GAZ) { const d = haversineKm(g, { lat, lon }); if (!best || d < best.d) best = { g, d }; }
  return best && best.d <= 250 ? 'Near ' + best.g.name : fmtCoord(lat, lon);
}
async function askClaude(prompt, asJson) {
  let s = null;
  try { s = await claude.use('sample'); } catch (e) { s = null; }
  if (!s) return null;
  try {
    if (asJson) return await s.json(prompt, { modelTier: 'quick' });
    const out = await s(prompt, { modelTier: 'quick' });
    return out && out.text;
  } catch (e) { return null; }
}
function cleanName(t) {
  return String(t || '').split('\n')[0].replace(/^["'“‘\s]+|["'”’.\s]+$/g, '').slice(0, 80);
}

/* Name the point when the name box is empty or still holds an earlier automatic name. */
function maybeName() {
  clearTimeout(nameTimer);
  nameTimer = setTimeout(() => {
    const lat = parseCoord($('fLat').value, true), lon = parseCoord($('fLon').value, false);
    if (isNaN(lat) || isNaN(lon)) return;
    if ($('fName').value.trim() && !nameAuto) return;
    suggestName(lat, lon);
  }, 450);
}
async function suggestName(lat, lon) {
  const my = ++nameTok; setNameNote('Naming this place…');
  const raw = await askClaude(
    'Name the place at latitude ' + lat.toFixed(4) + ', longitude ' + lon.toFixed(4) + '. Reply with only the name, at most 6 words, written as "Town or locality, Country". ' +
    'If the point is at sea, give the sea or ocean, for example "North Atlantic Ocean". If you are not sure of the exact town, give the nearest well-known place or region starting with "Near ". No quotes and no explanation.', false);
  if (my !== nameTok) return;
  if ($('fName').value.trim() && !nameAuto) return;
  let nm = cleanName(raw), fromClaude = !!nm;
  if (!nm) { nm = cleanName(await reverseGeocode(lat, lon)); fromClaude = !!nm; if (my !== nameTok) return; }
  if (!nm) nm = offlineName(lat, lon);
  $('fName').value = nm; nameAuto = true;
  setNameNote(fromClaude ? 'Name filled in from the coordinates. Type over it to change it.' : 'Naming is unavailable offline, so this is the nearest known place. Type over it to change it.');
}

function placePin(lat, lon, fly) {
  if (!map.proj) return;
  const p = map.proj([lon, lat]);
  if (map.pin) map.pin.attr('display', null).attr('transform', `translate(${p[0]},${p[1]}) scale(${1 / map.k})`);
  if (fly) flyTo(p[0], p[1], Math.max(map.k, 4), 900);
}
function onCoordChange() {
  const lat = parseCoord($('fLat').value, true), lon = parseCoord($('fLon').value, false);
  if (isNaN(lat) || isNaN(lon)) return;
  $('fErr').textContent = ''; placePin(lat, lon, true); maybeName();
}

function useGps() {
  if (!navigator.geolocation) { setNameNote('This device does not offer location. Click the chart or type coordinates.'); return; }
  setNameNote('Finding your position…');
  let done = false;
  const fail = () => { if (done) return; done = true; setNameNote('Location is blocked in this view. Click the chart or type coordinates instead.'); };
  const t = setTimeout(fail, 12000);
  try {
    navigator.geolocation.getCurrentPosition(pos => {
      if (done) return; done = true; clearTimeout(t);
      $('fLat').value = pos.coords.latitude.toFixed(5); $('fLon').value = pos.coords.longitude.toFixed(5);
      $('fErr').textContent = ''; placePin(pos.coords.latitude, pos.coords.longitude, true);
      nameAuto = true; $('fName').value = ''; maybeName();
    }, () => { clearTimeout(t); fail(); }, { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 });
  } catch (e) { clearTimeout(t); fail(); }
}

/* A name with no coordinates: look it up, show it on the chart, and let the person check it. */
async function findCoords() {
  const name = $('fName').value.trim();
  const g = GAZ_BY_NAME.get(name.toLowerCase());
  let lat, lon;
  setNameNote('Finding ' + name + ' on the chart…');
  if (g) { lat = g.lat; lon = g.lon; }
  else {
    const r = await askClaude('Give the latitude and longitude of the place "' + name.replace(/"/g, '') + '". Reply as JSON only: {"lat": number, "lon": number}. Use decimal degrees, south and west negative. If the name is too vague to place, reply {"lat": null, "lon": null}.', true);
    if (r && typeof r.lat === 'number' && typeof r.lon === 'number' && Math.abs(r.lat) <= 90 && Math.abs(r.lon) <= 180) { lat = r.lat; lon = r.lon; }
  }
  if (lat === undefined) { const f = await forwardGeocode(name); if (f) { lat = f.lat; lon = f.lon; } }
  if (lat === undefined) { setNameNote(''); $('fErr').textContent = 'That place could not be found. Click the chart or type latitude and longitude.'; return; }
  $('fLat').value = lat.toFixed(4); $('fLon').value = lon.toFixed(4);
  nameAuto = false; placePin(lat, lon, true);
  setNameNote('');
  $('fErr').textContent = 'Position found for “' + name + '”. Check the cross on the chart, then press Chart this position.';
}

/* Outside Claude the page can ask OpenStreetMap's Nominatim service for real place names. */
async function reverseGeocode(lat, lon) {
  try {
    const r = await fetch('https://nominatim.openstreetmap.org/reverse?format=jsonv2&zoom=10&accept-language=en&lat=' + lat + '&lon=' + lon);
    if (!r.ok) return null;
    const j = await r.json(); if (!j || j.error) return null;
    const a = j.address || {};
    const local = a.city || a.town || a.village || a.hamlet || a.suburb || a.municipality || a.county || a.state || '';
    const nm = [local, a.country].filter(Boolean).join(', ');
    return nm || (j.name ? String(j.name) : null);
  } catch (e) { return null; }
}
async function forwardGeocode(name) {
  try {
    const r = await fetch('https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&accept-language=en&q=' + encodeURIComponent(name));
    if (!r.ok) return null;
    const j = await r.json(); if (!j || !j.length) return null;
    const lat = parseFloat(j[0].lat), lon = parseFloat(j[0].lon);
    return isFinite(lat) && isFinite(lon) ? { lat, lon } : null;
  } catch (e) { return null; }
}

/* ===== Poster: draws the whole chart on a canvas for printing and framing ===== */
const PAPERS = { A4: [297, 210], A3: [420, 297], A2: [594, 420] };
const PX_PER_MM = 150 / 25.4;
let posterBusy = false;

async function loadPosterFonts() {
  try {
    await Promise.all([
      document.fonts.load('700 20px Cinzel'), document.fonts.load('500 20px Cinzel'),
      document.fonts.load('20px "IM Fell English"'), document.fonts.load('italic 20px "IM Fell English"'),
      document.fonts.load('20px "IM Fell English SC"')
    ]);
  } catch (e) { /* fall back to system serif */ }
}
function loadImage(src) { return new Promise((res, rej) => { const im = new Image(); im.onload = () => res(im); im.onerror = rej; im.src = src; }); }
function setSpacing(ctx, px) { if ('letterSpacing' in ctx) ctx.letterSpacing = px + 'px'; }
function wrapLines(ctx, text, maxW, maxLines) {
  const words = String(text).split(/\s+/), lines = []; let cur = '';
  for (const w of words) {
    const t = cur ? cur + ' ' + w : w;
    if (ctx.measureText(t).width <= maxW || !cur) cur = t; else { lines.push(cur); cur = w; }
  }
  if (cur) lines.push(cur);
  if (lines.length > maxLines) {
    const keep = lines.slice(0, maxLines); let last = keep[maxLines - 1];
    while (last.length > 1 && ctx.measureText(last + '…').width > maxW) last = last.slice(0, -1);
    keep[maxLines - 1] = last.replace(/[\s,;:.]+$/, '') + '…'; return keep;
  }
  return lines;
}

async function renderPoster(W, H, opts) {
  await loadPosterFonts();
  const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
  const ctx = cv.getContext('2d');
  const u = H / 100, list = sortedEntries(), owner = (state.owner || '').trim() || 'the Wanderer';
  const INK = '#4a3220', NAVY = '#1d3557', SEAL = '#8c2f26';

  // paper
  ctx.fillStyle = '#f4ecd8'; ctx.fillRect(0, 0, W, H);
  for (const [fx, fy, r, a] of [[.18, .3, .5, .1], [.8, .75, .55, .12], [.55, .1, .35, .07]]) {
    const gr = ctx.createRadialGradient(W * fx, H * fy, 0, W * fx, H * fy, W * r);
    gr.addColorStop(0, `rgba(150,105,50,${a})`); gr.addColorStop(1, 'rgba(150,105,50,0)');
    ctx.fillStyle = gr; ctx.fillRect(0, 0, W, H);
  }

  // layout
  const m0 = 2.4 * u, m = 5.2 * u;
  const logW = W * 0.235, gap = 2.2 * u;
  const bx = m, by = m + 14.5 * u, bw = W - 2 * m - logW - gap, availH = H - by - m;
  let bh = availH, band = 0;
  if (!opts.zoom) {
    const worldH = bw / 1.98 + 2 * u;
    if (availH - worldH - gap >= 12 * u) { bh = worldH; band = availH - worldH - gap; }
  }
  const lx = bx + bw + gap, ly = by, lw = logW, lh = availH;

  // title block
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic'; ctx.fillStyle = INK;
  ctx.font = `${1.5 * u}px "IM Fell English SC", Georgia, serif`; setSpacing(ctx, 0.5 * u);
  ctx.fillStyle = '#a4782c';
  ctx.fillText(`MAPPA ITINERUM · ANNO ${new Date().getFullYear()}`, W / 2, m + 1.8 * u);
  setSpacing(ctx, 0.12 * u);
  const title = `Chart of the Voyages of ${owner}`;
  let ts = 5 * u; ctx.font = `700 ${ts}px Cinzel, "Times New Roman", serif`;
  while (ctx.measureText(title).width > W * 0.82 && ts > 2 * u) { ts *= 0.94; ctx.font = `700 ${ts}px Cinzel, "Times New Roman", serif`; }
  ctx.fillStyle = INK; ctx.fillText(title, W / 2, m + 7.2 * u);
  setSpacing(ctx, 0);
  const km = totalKm(list);
  const dated = list.filter(e => e.date);
  let sub = list.length ? `${list.length} ${list.length === 1 ? 'position' : 'positions'} · ${nf.format(km / 1.852)} nautical miles · ${nf.format(km)} km` : 'An empty chart awaits its first position';
  if (dated.length > 1) sub += ` · ${fmtDate(dated[0].date)} to ${fmtDate(dated[dated.length - 1].date)}`;
  ctx.font = `italic ${1.9 * u}px "IM Fell English", Georgia, serif`; ctx.fillStyle = INK;
  ctx.fillText(sub, W / 2, m + 11 * u);
  ctx.strokeStyle = INK; ctx.lineWidth = 0.28 * u; ctx.beginPath(); ctx.moveTo(m, m + 12.6 * u); ctx.lineTo(W - m, m + 12.6 * u); ctx.stroke();
  ctx.lineWidth = 0.1 * u; ctx.beginPath(); ctx.moveTo(m, m + 13.2 * u); ctx.lineTo(W - m, m + 13.2 * u); ctx.stroke();

  // map projection
  const pad = 0.8 * u;
  const proj = d3.geoNaturalEarth1().fitExtent([[bx + pad, by + pad], [bx + bw - pad, by + bh - pad]], { type: 'Sphere' });
  const worldScale = proj.scale();
  if (opts.zoom && list.length) {
    proj.fitExtent([[bx + 8 * u, by + 8 * u], [bx + bw - 8 * u, by + bh - 8 * u]], { type: 'MultiPoint', coordinates: list.map(e => [e.lon, e.lat]) });
    if (!isFinite(proj.scale()) || proj.scale() > worldScale * 5.5) proj.scale(worldScale * 5.5);
    const ps = list.map(e => proj([e.lon, e.lat])), xs = ps.map(p => p[0]), ys = ps.map(p => p[1]);
    const t = proj.translate();
    proj.translate([t[0] + (bx + bw / 2) - (Math.min(...xs) + Math.max(...xs)) / 2, t[1] + (by + bh / 2) - (Math.min(...ys) + Math.max(...ys)) / 2]);
  }
  const gp = d3.geoPath(proj);

  // map
  ctx.save();
  ctx.beginPath(); ctx.rect(bx, by, bw, bh); ctx.clip();
  ctx.fillStyle = '#d8c79b'; ctx.fillRect(bx, by, bw, bh);
  ctx.fillStyle = '#e4dab8'; ctx.fill(new Path2D(gp({ type: 'Sphere' })));
  ctx.strokeStyle = 'rgba(124,93,59,.3)'; ctx.lineWidth = 0.1 * u; ctx.stroke(new Path2D(gp(d3.geoGraticule10())));
  ctx.setLineDash([0.3 * u, 0.6 * u]); ctx.strokeStyle = 'rgba(124,93,59,.5)'; ctx.lineWidth = 0.14 * u;
  for (const la of [0, 23.44, -23.44]) { const pts = d3.range(-180, 181, 4).map(lo => proj([lo, la])); ctx.stroke(new Path2D('M' + pts.map(p => p.join(',')).join('L'))); }
  ctx.setLineDash([]);
  const landP = new Path2D(LAND.map(r => ringD(r, proj)).join(''));
  ctx.lineJoin = 'round';
  for (const [w, a] of [[1.4, .07], [0.9, .09], [0.45, .13]]) { ctx.strokeStyle = `rgba(138,106,69,${a})`; ctx.lineWidth = w * u; ctx.stroke(landP); }
  ctx.fillStyle = '#f6eed7'; ctx.fill(landP);
  ctx.strokeStyle = INK; ctx.lineWidth = 0.16 * u; ctx.stroke(landP);
  const waterP = new Path2D(WATER.map(r => ringD(r, proj)).join(''));
  ctx.fillStyle = '#e4dab8'; ctx.fill(waterP); ctx.stroke(waterP);
  // compass roses and rhumb lines
  const roses = [[-30, -30, 0.062], [-138, -14, 0.04], [78, -34, 0.045]];
  const sw = proj([180, 0])[0] - proj([-180, 0])[0];
  let rh = '', rs = '';
  roses.forEach(([lo, la, s]) => { const c = proj([lo, la]); rh += rhumbMarkup(c[0], c[1], sw * 1.1); rs += roseMarkup(c[0], c[1], sw * s, false); });
  const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><g stroke="#4a3220" stroke-opacity=".14" stroke-width="${(0.12 * u).toFixed(2)}">${rh}</g><g transform="translate(0,0)">${rs}</g></svg>`;
  try { ctx.drawImage(await loadImage('data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgStr)), 0, 0, W, H); } catch (e) { /* roses are decoration only */ }
  ctx.fillStyle = NAVY; ctx.textAlign = 'center'; ctx.font = `700 ${sw * roses[0][2] * 0.2}px Cinzel, serif`;
  { const c = proj([roses[0][0], roses[0][1]]); ctx.fillText('N', c[0], c[1] - sw * roses[0][2] * 1.04); }
  ctx.strokeStyle = INK; ctx.lineWidth = 0.3 * u; ctx.stroke(new Path2D(gp({ type: 'Sphere' })));

  // routes
  ctx.strokeStyle = NAVY; ctx.lineWidth = 0.24 * u; ctx.lineCap = 'round'; ctx.setLineDash([0.95 * u, 0.7 * u]);
  const arrows = [];
  for (let i = 1; i < list.length; i++) legArcs(proj, list[i - 1], list[i]).forEach((a, j) => { ctx.stroke(new Path2D(a.d)); if (j === 0) arrows.push(a); });
  ctx.setLineDash([]); ctx.fillStyle = NAVY;
  for (const a of arrows) { ctx.save(); ctx.translate(a.mid[0], a.mid[1]); ctx.rotate(a.ang * Math.PI / 180); ctx.scale(u * 0.2, u * 0.2); ctx.fill(new Path2D('M-5,-5 L6,0 L-5,5 L-2,0Z')); ctx.restore(); }

  // markers
  const r = 1.35 * u, seal = new Path2D(sealPath(r)), pts = list.map(e => proj([e.lon, e.lat]));
  const placed = [];
  list.forEach((e, i) => {
    const [x, y] = pts[i];
    ctx.save(); ctx.translate(x, y);
    ctx.shadowColor = 'rgba(0,0,0,.35)'; ctx.shadowBlur = 0.3 * u; ctx.shadowOffsetY = 0.12 * u;
    ctx.fillStyle = SEAL; ctx.fill(seal); ctx.shadowColor = 'transparent';
    ctx.strokeStyle = '#4a1610'; ctx.lineWidth = 0.1 * u; ctx.stroke(seal);
    ctx.strokeStyle = 'rgba(255,225,200,.45)'; ctx.lineWidth = 0.08 * u; ctx.beginPath(); ctx.arc(0, 0, r * 0.7, 0, 7); ctx.stroke();
    ctx.fillStyle = '#f6e7d0'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = `700 ${r * 0.95}px Cinzel, serif`; ctx.fillText(String(i + 1), 0, r * 0.06);
    ctx.restore();
    placed.push({ x0: x - r, y0: y - r, x1: x + r, y1: y + r });
  });
  ctx.font = `italic ${1.5 * u}px "IM Fell English", Georgia, serif`; ctx.textBaseline = 'middle';
  const hit = (a, b) => a.x0 < b.x1 && a.x1 > b.x0 && a.y0 < b.y1 && a.y1 > b.y0;
  list.forEach((e, i) => {
    const [x, y] = pts[i], t = e.name.split(',')[0], tw = ctx.measureText(t).width, th = 1.7 * u, o = r + 0.5 * u;
    const cands = [[x + o, y - th / 2, 'left'], [x - o - tw, y - th / 2, 'left'], [x - tw / 2, y - o - th, 'left'], [x - tw / 2, y + o, 'left']];
    for (const [cx, cy] of cands) {
      const box = { x0: cx, y0: cy, x1: cx + tw, y1: cy + th };
      if (box.x0 < bx || box.x1 > bx + bw || box.y0 < by || box.y1 > by + bh) continue;
      if (placed.some(p => hit(box, p))) continue;
      placed.push(box);
      ctx.textAlign = 'left'; ctx.lineJoin = 'round'; ctx.strokeStyle = 'rgba(244,236,216,.95)'; ctx.lineWidth = 0.55 * u; ctx.strokeText(t, cx, cy + th / 2);
      ctx.fillStyle = INK; ctx.fillText(t, cx, cy + th / 2); break;
    }
  });
  ctx.restore();
  ctx.strokeStyle = INK; ctx.lineWidth = 0.4 * u; ctx.strokeRect(bx, by, bw, bh);
  ctx.lineWidth = 0.12 * u; ctx.strokeRect(bx + 0.7 * u, by + 0.7 * u, bw - 1.4 * u, bh - 1.4 * u);


  // lower band: legend, reckoning and scale
  if (band > 0) {
    const yb = by + bh + gap, hb = band;
    ctx.fillStyle = 'rgba(255,250,235,.45)'; ctx.fillRect(bx, yb, bw, hb);
    ctx.strokeStyle = INK; ctx.lineWidth = 0.3 * u; ctx.strokeRect(bx, yb, bw, hb);
    const col = bw / 3, cy0 = yb + hb / 2;
    ctx.textBaseline = 'alphabetic'; ctx.textAlign = 'center'; ctx.fillStyle = INK; setSpacing(ctx, 0.18 * u);
    ctx.font = `700 ${1.5 * u}px Cinzel, serif`;
    ['LEGEND', 'RECKONING', 'SCALE OF NAUTICAL MILES'].forEach((t, i) => ctx.fillText(t, bx + col * (i + 0.5), yb + 3.2 * u));
    setSpacing(ctx, 0);
    ctx.lineWidth = 0.1 * u; for (let i = 1; i < 3; i++) { ctx.beginPath(); ctx.moveTo(bx + col * i, yb + 1.2 * u); ctx.lineTo(bx + col * i, yb + hb - 1.2 * u); ctx.stroke(); }
    // legend
    const lx0 = bx + col * 0.5 - 11 * u, rows = [['seal', 'A position, numbered by visit'], ['route', 'Course sailed, by date'], ['arrow', 'Direction of travel']];
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; ctx.font = `italic ${1.55 * u}px "IM Fell English", Georgia, serif`;
    rows.forEach(([k, t], i) => {
      const y = yb + 6.4 * u + i * 3.4 * u; ctx.save(); ctx.translate(lx0 + 1.6 * u, y);
      if (k === 'seal') { ctx.fillStyle = SEAL; ctx.fill(new Path2D(sealPath(1.1 * u))); }
      else if (k === 'route') { ctx.strokeStyle = NAVY; ctx.lineWidth = 0.24 * u; ctx.lineCap = 'round'; ctx.setLineDash([0.9 * u, 0.65 * u]); ctx.beginPath(); ctx.moveTo(-1.6 * u, 0); ctx.lineTo(1.6 * u, 0); ctx.stroke(); ctx.setLineDash([]); }
      else { ctx.fillStyle = NAVY; ctx.scale(u * 0.2, u * 0.2); ctx.fill(new Path2D('M-5,-5 L6,0 L-5,5 L-2,0Z')); }
      ctx.restore(); ctx.fillStyle = INK; ctx.fillText(t, lx0 + 4 * u, y);
    });
    // reckoning
    let longest = null; for (let i = 1; i < list.length; i++) { const d = haversineKm(list[i - 1], list[i]); if (!longest || d > longest.d) longest = { d, a: list[i - 1], b: list[i] }; }
    const lines = [list.length + (list.length === 1 ? ' position' : ' positions') + ' charted', nf.format(km / 1.852) + ' nautical miles sailed'];
    if (longest) lines.push('Longest leg: ' + nf.format(longest.d / 1.852) + ' nm');
    if (longest) lines.push(longest.a.name.split(',')[0] + ' to ' + longest.b.name.split(',')[0]);
    ctx.textAlign = 'center'; ctx.fillStyle = INK; ctx.font = `italic ${1.7 * u}px "IM Fell English", Georgia, serif`;
    lines.forEach((t, i) => { let tt = t; while (ctx.measureText(tt).width > col - 3 * u && tt.length > 4) tt = tt.slice(0, -2); ctx.fillText(tt === t ? t : tt + '\u2026', bx + col * 1.5, yb + 6.6 * u + i * 2.9 * u); });
    // scale bar: true length along the equator
    const pxPerNm = sw / (2 * Math.PI * 6371) * 1.852;
    let nm = 1000; while (nm * pxPerNm > col - 8 * u) nm /= 2; while (nm * pxPerNm < col * 0.35) nm *= 2;
    const barW = nm * pxPerNm, sx = bx + col * 2.5 - barW / 2, sy = cy0 + 1.5 * u, seg = 4;
    for (let i = 0; i < seg; i++) { ctx.fillStyle = i % 2 ? '#f4ecd8' : INK; ctx.fillRect(sx + barW / seg * i, sy, barW / seg, 0.9 * u); }
    ctx.strokeStyle = INK; ctx.lineWidth = 0.12 * u; ctx.strokeRect(sx, sy, barW, 0.9 * u);
    ctx.fillStyle = INK; ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic'; ctx.font = `${1.3 * u}px "IM Fell English", serif`;
    [0, nm / 2, nm].forEach((v, i) => ctx.fillText(nf.format(v), sx + barW * i / 2, sy - 0.5 * u));
    ctx.font = `italic ${1.4 * u}px "IM Fell English", serif`; ctx.fillText('measured along the equator', bx + col * 2.5, sy + 3.2 * u);
  }
  // log column
  ctx.fillStyle = 'rgba(255,250,235,.45)'; ctx.fillRect(lx, ly, lw, lh);
  ctx.strokeStyle = INK; ctx.lineWidth = 0.3 * u; ctx.strokeRect(lx, ly, lw, lh);
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic'; ctx.fillStyle = INK; setSpacing(ctx, 0.25 * u);
  ctx.font = `700 ${2.1 * u}px Cinzel, serif`; ctx.fillText("SHIP'S LOG", lx + lw / 2, ly + 3.6 * u); setSpacing(ctx, 0);
  ctx.lineWidth = 0.12 * u; ctx.beginPath(); ctx.moveTo(lx + 1.2 * u, ly + 4.7 * u); ctx.lineTo(lx + lw - 1.2 * u, ly + 4.7 * u); ctx.stroke();
  const topY = ly + 6.2 * u, logAvail = lh - 6.2 * u - 1.2 * u, textX = lx + 1.2 * u + 2.8 * u * 1.0, textW = lw - 2.4 * u - 3.2 * u;
  const layout = (fs, notes) => {
    let y = 0, rows = [];
    for (const e of list) {
      ctx.font = `500 ${fs * 0.88}px Cinzel, serif`;
      const nm = wrapLines(ctx, e.name, textW, 2);
      ctx.font = `italic ${fs * 0.8}px "IM Fell English", Georgia, serif`;
      const nt = notes && e.note ? wrapLines(ctx, e.note, textW, 2) : [];
      const h = (nm.length * 1.2 + 1.15 + nt.length * 1.12 + 0.55) * fs;
      rows.push({ e, nm, nt, h, y }); y += h;
    }
    return { rows, total: y };
  };
  let fs = 1.75 * u, notes = true, L = layout(fs, notes);
  while (L.total > logAvail && fs > 0.75 * u) { fs *= 0.93; L = layout(fs, notes); }
  if (L.total > logAvail) { notes = false; fs = 1.5 * u; L = layout(fs, notes); while (L.total > logAvail && fs > 0.7 * u) { fs *= 0.93; L = layout(fs, notes); } }
  let shown = L.rows.filter(rw => rw.y + rw.h <= logAvail);
  let hidden = L.rows.length - shown.length;
  if (hidden > 0) { while (shown.length && shown[shown.length - 1].y + shown[shown.length - 1].h + fs * 1.6 > logAvail) shown.pop(); hidden = L.rows.length - shown.length; }
  shown.forEach((rw, i) => {
    let y = topY + rw.y + fs * 0.95;
    ctx.save(); ctx.translate(lx + 1.2 * u + fs * 0.75, y - fs * 0.3);
    const sr = fs * 0.72; ctx.fillStyle = SEAL; ctx.fill(new Path2D(sealPath(sr)));
    ctx.fillStyle = '#f6e7d0'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = `700 ${sr * 0.95}px Cinzel, serif`; ctx.fillText(String(L.rows.indexOf(rw) + 1), 0, sr * 0.05); ctx.restore();
    ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic'; const tx = lx + 1.2 * u + fs * 1.8;
    ctx.fillStyle = INK; ctx.font = `500 ${fs * 0.88}px Cinzel, serif`;
    rw.nm.forEach(t => { ctx.fillText(t, tx, y); y += fs * 1.2; });
    ctx.font = `italic ${fs * 0.8}px "IM Fell English", Georgia, serif`; ctx.fillStyle = '#6b4e33';
    ctx.fillText(fmtDate(rw.e.date) + ' · ' + fmtCoord(rw.e.lat, rw.e.lon), tx, y); y += fs * 1.15;
    ctx.fillStyle = INK; rw.nt.forEach(t => { ctx.fillText(t, tx, y); y += fs * 1.12; });
    if (i < shown.length - 1) { ctx.strokeStyle = 'rgba(74,50,32,.45)'; ctx.setLineDash([0.2 * u, 0.35 * u]); ctx.lineWidth = 0.08 * u; ctx.beginPath(); ctx.moveTo(lx + 1.2 * u, topY + rw.y + rw.h - fs * 0.2); ctx.lineTo(lx + lw - 1.2 * u, topY + rw.y + rw.h - fs * 0.2); ctx.stroke(); ctx.setLineDash([]); }
  });
  if (hidden > 0) { ctx.textAlign = 'center'; ctx.fillStyle = INK; ctx.font = `italic ${fs * 0.95}px "IM Fell English", serif`; ctx.fillText(`and ${hidden} more ${hidden === 1 ? 'position' : 'positions'} in the full log`, lx + lw / 2, ly + lh - 1.4 * u); }
  if (!list.length) { ctx.textAlign = 'center'; ctx.fillStyle = INK; ctx.font = `italic ${1.6 * u}px "IM Fell English", serif`; ctx.fillText('No positions charted yet.', lx + lw / 2, topY + 3 * u); }

  // frame
  ctx.strokeStyle = INK; ctx.lineWidth = 0.55 * u; ctx.strokeRect(m0, m0, W - 2 * m0, H - 2 * m0);
  ctx.lineWidth = 0.14 * u; ctx.strokeRect(m0 + 0.9 * u, m0 + 0.9 * u, W - 2 * m0 - 1.8 * u, H - 2 * m0 - 1.8 * u);
  ctx.fillStyle = INK;
  for (const [cx, cy] of [[m0, m0], [W - m0, m0], [m0, H - m0], [W - m0, H - m0]]) { ctx.save(); ctx.translate(cx, cy); ctx.rotate(Math.PI / 4); ctx.fillRect(-0.7 * u, -0.7 * u, 1.4 * u, 1.4 * u); ctx.restore(); }

  // aged paper: speckle and vignette
  const nc = document.createElement('canvas'); nc.width = nc.height = 256;
  const nctx = nc.getContext('2d'), id = nctx.createImageData(256, 256);
  for (let i = 0; i < id.data.length; i += 4) { id.data[i] = 110; id.data[i + 1] = 75; id.data[i + 2] = 35; id.data[i + 3] = Math.random() * 38; }
  nctx.putImageData(id, 0, 0);
  ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = ctx.createPattern(nc, 'repeat'); ctx.fillRect(0, 0, W, H);
  const vg = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.35, W / 2, H / 2, Math.hypot(W, H) * 0.56);
  vg.addColorStop(0, 'rgba(244,236,216,0)'); vg.addColorStop(1, 'rgba(150,105,50,.38)');
  ctx.fillStyle = vg; ctx.fillRect(0, 0, W, H); ctx.restore();
  return cv;
}

/* ===== Poster dialog ===== */
function onPoster() {
  if (map.playing) return;
  const wrap = document.createElement('div'); wrap.style.display = 'flex'; wrap.style.flexDirection = 'column'; wrap.style.gap = '10px';
  const row = document.createElement('div'); row.className = 'row';
  const lab = document.createElement('label'); lab.textContent = 'Paper (landscape)';
  const sel = document.createElement('select'); sel.id = 'pPaper';
  [['A4', 'A4 · 297 × 210 mm'], ['A3', 'A3 · 420 × 297 mm'], ['A2', 'A2 · 594 × 420 mm']].forEach(([v, t]) => { const o = document.createElement('option'); o.value = v; o.textContent = t; if (v === 'A3') o.selected = true; sel.appendChild(o); });
  lab.appendChild(sel);
  const lab2 = document.createElement('label'); lab2.className = 'chk';
  const cb = document.createElement('input'); cb.type = 'checkbox'; cb.id = 'pZoom'; cb.checked = state.entries.length > 1 && !state.entries.some(e => e.example);
  lab2.append(cb, document.createTextNode('Zoom the chart to my voyages'));
  row.append(lab, lab2);
  const img = document.createElement('img'); img.alt = 'Poster preview'; img.style.minHeight = '120px'; img.style.background = '#e7d9b4';
  const note = document.createElement('div'); note.style.fontStyle = 'italic'; note.style.fontSize = '14px'; note.textContent = 'Printed at 150 dpi on the paper size you pick. Coastlines are simplified.';
  wrap.append(row, img, note);
  let token = 0;
  const refresh = async () => {
    const my = ++token; img.style.opacity = .5;
    try { const cv = await renderPoster(1100, Math.round(1100 / 1.4142), { zoom: cb.checked }); if (my === token) { img.src = cv.toDataURL('image/jpeg', .85); img.style.opacity = 1; } }
    catch (e) { note.textContent = 'The preview could not be drawn.'; }
  };
  sel.onchange = () => {}; cb.onchange = refresh;
  const build = async kind => {
    if (posterBusy) return; posterBusy = true;
    const paper = sel.value, [mw, mh] = PAPERS[paper];
    note.textContent = 'Drawing the chart…';
    try {
      const cv = await renderPoster(Math.round(mw * PX_PER_MM), Math.round(mh * PX_PER_MM), { zoom: cb.checked });
      const base = 'explorer-chart-' + paper;
      if (kind === 'pdf') {
        const bin = atob(cv.toDataURL('image/jpeg', .92).split(',')[1]), bytes = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
        const pdf = makePdf(bytes, cv.width, cv.height, mw, mh, 'Chart of the Voyages of ' + ((state.owner || '').trim() || 'the Wanderer'));
        await savePoster(base + '.pdf', pdf, img);
      } else {
        const blob = await new Promise(r => cv.toBlob(r, 'image/png'));
        await savePoster(base + '.png', blob, img);
      }
      note.textContent = 'Printed at 150 dpi on the paper size you pick. Coastlines are simplified.';
    } catch (e) { note.textContent = 'That file could not be made. Try a smaller paper size.'; }
    finally { posterBusy = false; }
  };
  openModal('Poster for framing', wrap, [
    { label: 'Save PDF', cls: 'seal', keep: true, fn: () => build('pdf') },
    { label: 'Save PNG', keep: true, fn: () => build('png') },
    { label: 'Close', cls: 'ghost' }
  ]);
  refresh();
}
async function savePoster(filename, data, previewImg) {
  if (IS_STANDALONE) { standaloneDownload(filename, data); toast('Saved ' + filename + '.'); return; }
  let dl = null; try { dl = await claude.use('downloads'); } catch (e) { dl = null; }
  if (dl) {
    try { await dl.save({ filename, data }); toast('Saved ' + filename + '.'); return; }
    catch (err) { if (err && err.code === 'declined') return; if (err && err.code === 'too_large') { toast('That file is too large. Try a smaller paper size.'); return; } }
  }
  toast('Saving is not available in this view. Press and hold the preview to save the image.');
  if (previewImg) previewImg.style.outline = '3px solid #a4782c';
}

/* ===== Start-up ===== */
function init() {
  $('yr').textContent = new Date().getFullYear();
  loadState();
  $('owner').value = state.owner;
  $('owner').addEventListener('input', () => { state.owner = $('owner').value.slice(0, 40); saveState(); });
  $('fName').addEventListener('input', onNameInput);
  $('fLat').addEventListener('change', onCoordChange);
  $('fLon').addEventListener('change', onCoordChange);
  $('btnGps').addEventListener('click', useGps);
  $('form').addEventListener('submit', onSubmit);
  $('btnCancel').addEventListener('click', resetForm);
  $('btnExport').addEventListener('click', onExport);
  $('fileImport').addEventListener('change', onImportFile);
  $('btnReplay').addEventListener('click', replay);
  $('btnPoster').addEventListener('click', onPoster);
  $('btnClearEx').addEventListener('click', () => { state.entries = state.entries.filter(e => !e.example); saveState(); renderAll(); fitAll(true); });
  $('modal').addEventListener('click', ev => { if (ev.target === $('modal')) closeModal(); });
  document.addEventListener('keydown', ev => { if (ev.key === 'Escape' && !$('modal').hidden) closeModal(); });
  resetForm();
  renderList();
  initMap();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();

