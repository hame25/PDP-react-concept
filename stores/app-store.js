import AppDispatcher from '../dispatcher/app-dispatcher';
import assign from 'object-assign';
let EventEmitter = require('events').EventEmitter;


let appData = {
        id: 12345,
            name: 'Battlefield 4: Standard Edition (PS3)', 
            image: {
                url: 'http://tesco.scene7.com/is/image/tesco/604-8904_PI_1000025MN?wid=170&hei=170&$Offers$'
            },
            qtyInBasket: 0,
            sellers: [
          {
            seller: { 
              name:'Tesco',
              logo: 'http://direct.tescoassets.com/directuiassets/Merchandising/NonSeasonal/en_GB/banners/sellerLogos/1000001_buybox_logo.jpg'
            },
            price: 114.00,
            clubcardPoints: 114,
            deliveryOptions: [
              {
                name: 'Free Click+Collect (next day*)',
                type: 'collect'
              },
              {
                name: 'Standard delivery (2-5 days)',
                type: 'delivery',
                price: 'from £3.00'
              }
            ]
          }, {
            seller: { 
              name:'External seller',
              logo: 'http://direct.tescoassets.com/directuiassets/Merchandising/NonSeasonal/en_GB/banners/sellerLogos/1000319_buybox_logo.jpg'
            },
            price: 154.00,
            clubcardPoints: 154
          }
        ]
  };

let AppStore = assign({}, EventEmitter.prototype, {

  getAllData () {
    return appData;
  }


});

// replace later
AppDispatcher.register(function() {
  
});

module.exports = AppStore;