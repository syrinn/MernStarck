const privateRoutes = [
  {
    path: "/",
    loader: () => import("../screens/Home"),
    exact: true,
  },

  {
    path: "/categories",
    loader: () => import("../screens/CategoriesList"),
    exact: true,
  },

  {
    path: "/categories/:categoryId",
    loader: () => import("../screens/Produits"),
    exact: true,
  },
  {
    path: "/wishList",
    loader: () => import("../screens/WishList"),
    exact: true,
  },
  {
    path: "/addproduit",
    loader: () => import("../screens/AddProduit"),
    exact: true,
  },
  {
    path: "/addcategorie",
    loader: () => import("../screens/AddCategorie"),
    exact: true,
  },
].filter(Boolean);
const publicRoutes = [
  { path: "/login", loader: () => import("../screens/Login") },
  { path: "/register", loader: () => import("../screens/Register") },
].filter(Boolean);

// const simpleRoutes = [
//   {
//     path: "/403",
//     loader: () => import("src/view/shared/errors/Error403Page"),
//   },
//   {
//     path: "/500",
//     loader: () => import("src/view/shared/errors/Error500Page"),
//   },
//   {
//     path: "**",
//     loader: () => import("src/view/shared/errors/Error404Page"),
//   },
// ].filter(Boolean);
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  publicRoutes,
  privateRoutes,
};
