import Home from "../../pages/Home/Home"
import Cart from "../../pages/Cart/Cart";
import Favorites from "../../pages/Favorites/Favorites";
import Notes from "../../pages/Notes/Notes";
import SearchMedicine from "../../pages/SearchMedicine/SerachMedicine";
// import FilterItemDetails from "../../pages/search-medicine/MedicineItemDetails";
import Account from "../../pages/Account/Account";
import Contact from "../../pages/Contact/Contact";
import Notifications from "../../pages/Notifications/Notifications";
import MedicineDetails from "../../pages/MedicineDetails/MedicineDetails";
import FindPharmacy from "../../pages/FindPharmacy/FIndPharmacy";
// import Pharmacies from "../../pages/search-medicine/tabs/Pharmacies";

export const to = {
  home: "/home",
  cart: "/cart",
  favorites: "/favorites",
  notifications: "/notifications",
  notes: "/notes",
  delivery: "/delivery",
  pickUp: "/pick-up",
  contactUs: "/contact-us",
  searchMedicine: "/search-medicine",
  pharmacies: "/pharmacies",
  medicineDetails: "/medicine-details/:id",
  account: '/account',
  findPharmacy: '/find-pharmacy'
};

export const routes = [
  {
    exact: true,
    component: Home,
    path: to.home,
  },
  {
    exact: true,
    component: Cart,
    path: to.cart,
  },
  {
    exact: true,
    component: Favorites,
    path: to.favorites,
  },
  {
    exact: true,
    component: Notes,
    path: to.notes,
  },
  {
    exact: true,
    component: Notifications,
    path: to.notifications,
    privateRoute: true,
  },
  {
    exact: true,
    component: SearchMedicine,
    path: to.searchMedicine,
  },
  {
    exact: true,
    component: MedicineDetails,
    path: to.medicineDetails,
  },
  {
    exact: true,
    component: Account,
    path: to.account,
    privateRoute: true,
  },
  {
    exact: true,
    component: Contact,
    path: to.contactUs,
  },
  {
    exact: true,
    component: FindPharmacy,
    path: to.home,
  },

];

export default routes;
