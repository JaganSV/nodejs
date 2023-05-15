const morning2 = {
    breakfast: "oatmeal",
    menu: {
      lunch: "butter and jam",
      snacks: "pizza"
    }
  }
  const dinner2 = "veg and cheese";

  let{breakfast} = morning2
  let {menu} = morning2
  const backpackingMeals = {
    breakfast,
    ...menu,
    dinner2
  }

  console.log("backpackingMeals: ", backpackingMeals, "\n\n");
