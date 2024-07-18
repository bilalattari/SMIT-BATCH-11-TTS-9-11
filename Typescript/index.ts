interface UserParentInfo {
  fatherName: string;
  motherName: string;
  fatherCNIC?: string;
  fatherJob?: string;
}

interface UserFavDish {
  name: string;
  location: string;
}

var userName: string = "Bilal Raza";
var userAge: number = 20;
var isUserActive: boolean = false;
var userFavDishes: Array<UserFavDish> = [
  { name: "Biryani", location: "Naseeb" },
];
var userParentInfo: UserParentInfo = {
  fatherName: "ABC",
  motherName: "ABC",
};

userName = "12";
