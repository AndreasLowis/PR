function shoppingTime(memberId, money) {
    // you can only write your code here!
    // var items = [["Stacattu", 1500000], ["Zoro", 500000], ["H&N", 250000], ["Uniklooh", 175000], ["Casing", 50000]];

    var items = [
        {
            name : "Stacattu",
            price : 1500000
        },
        {
            name : "Zoro",
            price : 500000
        },
        {
            name : "H&N",
            price : 250000
        },
        {
            name : "Uniklooh",
            price : 175000
        },
        {
            name : "Casing",
            price : 50000
        }
    ]

    var obj = {
        memberId : memberId,
        money: money,
        listPurchased: [],
        changeMoney: 0
    };

    if( memberId == undefined || memberId == ''){
        return "Maaf, Toko X hanya untuk member saja"
    } 

    if(money < 50000){
        return "Maaf uang tidak cukup"
    }

    for( var i = 0; i < items.length; i++ ) {
        var item = items[i];
        if( money >= item.price ){
            obj.listPurchased.push(item.name);
            money -= item.price;
        } 

    }

    obj.changeMoney = money;

    return obj;
    
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }

//   console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }

//   console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
//   console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
//   console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja