import { Warehouse, WarehouseWithDiscountPrice } from "./models/Warehouse";

let detroitWarehouse: Warehouse[] = [
  {
    name: "iPhone SE",
    price: 399,
    fiveG: false,
  },
  {
    name: "iPhone XR",
    price: 499,
    fiveG: false,
  },
  {
    name: "iPhone 11",
    price: 599,
    fiveG: false,
  },
  {
    name: "iPhone 12 Mini",
    price: 729,
    fiveG: true,
  },
  {
    name: "iPhone 12",
    price: 829,
    fiveG: true,
  },
  {
    name: "iPhone 12 Pro",
    price: 999,
    fiveG: true,
  },
  {
    name: "iPhone 12 Max",
    price: 1099,
    fiveG: true,
  },
  {
    name: "Pixel 4a",
    price: 349,
    fiveG: false,
  },
  {
    name: "Pixel 5",
    price: 699,
    fiveG: true,
  },
];

let newYorkWarehouse: Warehouse[] = [
  {
    name: "iPhone SE",
    price: 399,
    fiveG: false,
  },
  {
    name: "Pixel 5",
    price: 699,
    fiveG: true,
  },
  {
    name: "Pixel 4a 5G",
    price: 499,
    fiveG: true,
  },
  {
    name: "Pixel 4a 5G",
    price: 499,
    fiveG: true,
  },
  {
    name: "Pixel 4a 5G",
    price: 499,
    fiveG: true,
  },
  {
    name: "Pixel 4a",
    price: 349,
    fiveG: false,
  },
  {
    name: "Pixel 4a",
    price: 349,
    fiveG: false,
  },
  {
    name: "Galaxy S10",
    price: 750,
    fiveG: false,
  },
  {
    name: "Galaxy S10+",
    price: 1500,
    fiveG: true,
  },
];

let chicagoWarehouse: Warehouse[] = [
  {
    name: "Galaxy S10",
    price: 750,
    fiveG: false,
  },
  {
    name: "Galaxy S10+",
    price: 1500,
    fiveG: true,
  },
  {
    name: "Galaxy S10+",
    price: 1500,
    fiveG: true,
  },
  {
    name: "Galaxy S10+",
    price: 1500,
    fiveG: true,
  },
  {
    name: "iPhone 12",
    price: 829,
    fiveG: true,
  },
  {
    name: "iPhone 12 Pro",
    price: 999,
    fiveG: true,
  },
  {
    name: "iPhone 12 Max",
    price: 1099,
    fiveG: true,
  },
  {
    name: "Pixel 4a",
    price: 349,
    fiveG: false,
  },
  {
    name: "Pixel 5",
    price: 699,
    fiveG: true,
  },
];

const addPhone = (
  array: Warehouse[],
  newName: string,
  newPrice: number,
  newFiveG: boolean
): void => {
  const newWarehouseData: Warehouse = {
    name: newName,
    price: newPrice,
    fiveG: newFiveG,
  };

  array.push(newWarehouseData);
};

//console.log(addPhone(detroitWarehouse, "Iphone 12 pro max", 999, true));

const deletePhoneByIndex = (array: Warehouse[], index: number): void => {
  if (array.length > 0) {
    array.splice(index, 1);
  }
};

// console.log(deletePhoneByIndex(chicagoWarehouse, 0))
// console.log(chicagoWarehouse)


const deletePhoneByName = (array: Warehouse[], name: string): Warehouse[] => {
  return array.filter((obj) => {
    return obj.name !== name;
  });
};
//console.log(deletePhoneByName(chicagoWarehouse, 'Pixel 51'))

const filter5G = (array: Warehouse[], isFiveG: boolean): Warehouse[] => {
  return array.filter((obj) => {
    return obj.fiveG === isFiveG;
  });
};

// console.log(filter5G(chicagoWarehouse, true))

const filterPriceLessThan = (
  array: Warehouse[],
  price: number
): Warehouse[] => {
  return array.filter((obj) => {
    return obj.price < price;
  });
};

 //console.log(filterPriceLessThan(chicagoWarehouse, 5))

const filterPriceGreaterThan = (
  array: Warehouse[],
  price: number
): Warehouse[] => {
  return array.filter((obj) => {
    return obj.price > price;
  });
};

//console.log(filterPriceGreaterThan(chicagoWarehouse, 2000))

const findPhoneByName = (array: Warehouse[], name: string): Warehouse | undefined => {
  let foundArray = array.filter((obj) => {
    return obj.name === name;
  });

  return foundArray[0];
};

//console.log(findPhoneByName(chicagoWarehouse, "iPhone 12 Max1"));

const calcAverageCost = (array: Warehouse[]): number => {
  let sum: number = 0;
  let avgValue = array.length;
  array.forEach((submission) => {
    sum += submission.price;
  });

  if (avgValue > 0) {
    return sum / avgValue;
  } else {
    return 0;
  }
};

const doWeHaveA5GPhone = (array: Warehouse[]): boolean => {
  let found5GPhone = array.filter((obj) => {
    return obj.fiveG === true;
  });
  return found5GPhone.length > 0 ? true : false;
};
//console.log(doWeHaveA5GPhone(chicagoWarehouse))


const phoneFlashSale = (array: Warehouse[], percentage: number): WarehouseWithDiscountPrice[] => {
  let warehouseWithDiscountPrice: WarehouseWithDiscountPrice[] = [];
    array.forEach((warehouse) => {
      let wareHouseDiscount: WarehouseWithDiscountPrice = { name: '', price: 0, fiveG: false, afterDiscountPrice: 0};
      wareHouseDiscount.name = warehouse.name;
      wareHouseDiscount.price = warehouse.price;
      wareHouseDiscount.fiveG = warehouse.fiveG;
      wareHouseDiscount.afterDiscountPrice = warehouse.price - (warehouse.price * (percentage/100));
      warehouseWithDiscountPrice.push(wareHouseDiscount);
    })
    return warehouseWithDiscountPrice;
}
//console.log(phoneFlashSale(chicagoWarehouse, 10))


const phoneFlashSaleV2 = (array: Warehouse[], name: string, percentage: number): any[] => {
  let warehouseWithDiscountPrice: any[] = [];
  let warehouseWithNameNoDiscout: Warehouse[] = [];

  let nameFoundArray = array.filter((obj) => {
    return obj.name === name;
  });
  
  let nameNotFoundArray = array.filter((obj) => {
    return obj.name !== name;
  });

  nameFoundArray.forEach((warehouse) => {
      let wareHouseDiscount: WarehouseWithDiscountPrice = { name: '', price: 0, fiveG: false, afterDiscountPrice: 0};
      wareHouseDiscount.name = warehouse.name;
      wareHouseDiscount.price = warehouse.price;
      wareHouseDiscount.fiveG = warehouse.fiveG;
      wareHouseDiscount.afterDiscountPrice = warehouse.price - (warehouse.price * (percentage/100));
      warehouseWithDiscountPrice.push(wareHouseDiscount);
    })

    return warehouseWithDiscountPrice.concat(nameNotFoundArray);
}
//console.log(phoneFlashSaleV2(chicagoWarehouse, 'iPhone 12 Max1', 10))
