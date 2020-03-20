import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING
} from "../actions/action-types/cart-actions";

const initState = {
  items: [
    {
      id: 1,
      title: "Oak Barrell Stave Trays",
      desc:
        "Made out of used wine barrels from our Frostwatch label. These barrels no longer impart the flavors needed for our wines, but that doesn’t mean they can’t be enjoyed. We glue three staves together and add four foot pads for added stability. This piece is oil finished and great for home display or unique serving method.",
      price: 45,
      img: "https://i.ibb.co/dB6kzvG/images-1.jpg"
    },
    {
      id: 2,
      title: "Oak Barrell Lazy Susan",
      desc:
        "Made out of used barrels from our Frostwatch label. The headboards are glued together forming a sturdy yet beautiful surface. Underneath the Lazy Susan we have reinforced the headboards with a circular ¼ inch Masonite piece. To allow the Lazy Susan to spin easily we attach a ball bearing circular turntable with rubber feet to avoid scratching.  Perfect for serving any number of guests in a creative and efficient manner.",
      price: 45,
      img: "https://i.ibb.co/pKywgcM/images-2.jpg"
    },
    {
      id: 3,
      title: "Custom Cribbage Board",
      desc:
        "These boards are slabbed from enormous oak trees that have fallen down over the years, the ages range from 160-300 year old. They are slabbed, planed, sanded, and holes are drilled. The three pairs of pegs are crafted from ¼ inch diameter rods of brass, stainless steel and mild steel (Mild Steel painted black for better differentiation from stainless steel and corrosion resistance). The pegs are then milled with ridges for appearance and grip. Underneath the board is a hollowed space for peg storage with a copper plate attached to a brass hinge for easy accessibility. Each board is meticulously crafted and inscriptions are customized for each customer. Hand engraved titles and messages are encouraged!",
      price: 160,
      img: "https://i.ibb.co/nfYLMb1/images-4.jpg"
    },
    {
      id: 4,
      title: "Aluminum Epoxy Coffee Table",
      desc:
        "Beautiful 300 year old oak that fell down on the property. Years of termite damage left beautiful fragmented piece. We saw an opportunity to create a unique piece by filling in the damaged areas with layer after layer of epoxy. The wood and epoxy now seamlessly integrate to form a single piece. The table was finished with several layers of polyurethane for protection and water resistance. The stand is an aluminum beam that gives the table a modern look paired with extra stability.",
      price: 475,
      img: "https://i.ibb.co/KzzSrFS/images-3.jpg"
    },
    {
      id: 5,
      title: "Epoxy Coffee Table",
      desc:
        "Twin piece to the “Aluminum Epoxy Coffee Table”, this piece was crafted in a similar manner. The 300-year-old oak was sanded down and finished with several layers of polyurethane. This table is also a blend of oak and epoxy, however, we decided to go a different route with the legs. The table is held in place by 3/8 inch flat bar steel bent to shape with an oxyacetylene torch. These custom-made legs make the table extremely rugged and durable.",
      price: 450,
      img: "https://i.ibb.co/p4HWLgr/download-4.jpg"
    },
    {
      id: 6,
      title: "Custom Cutting Boards",
      desc:
        "We make a variety of different cutting boards. They range in shapes, sizes, thicknesses, type of wood, live edge vs cut edge, laminates vs one piece. All boards are finished with food grade mineral oil/beeswax/carnauba wax and have customized inscriptions. We love working with customers to create their perfect board!",
      price: 45,
      img: "https://i.ibb.co/92SL7XX/images.jpg"
    },
    {
      id: 7,
      title: "Silver Steel Bench",
      desc:
        "Made of 160-year-old White Oak. Once slabbed the outer bark was chipped away, giving it the semi-round bottom. We custom made the 3/8 inch flat steel by bending it to fit directly in the notches underneath the bench. This bench was also finished with polyurethane, so it can remain outside regardless of weather conditions.",
      price: 475,
      img: "https://i.ibb.co/RBKwDNn/download-4.jpg"
    },
    {
      id: 8,
      title: "Copper Plated Outdoor Bench",
      desc:
        "This behemoth of a bench was an enormous piece that was slabbed off a 300-year-old oak. We sanded the piece down and decided to keep the live edge. The termite damage creates a unique pattern which gives the bench a natural feel. The legs are also oak with copper plated feet to avoid rot or unwanted moisture from the soil. This bench belongs outdoors, overlooking a beautiful view. The inscription states “May the view and the people you share it with, be equally spectacular.",
      price: "n/a",
      img: "https://i.ibb.co/JnLZzVk/images-2.jpg"
    },
    {
      id: 9,
      title: "Outdoor Bench",
      desc: "Outdoor Bench",
      price: 45,
      img: "https://i.ibb.co/G33kkYq/download-5.jpg"
    }
  ],
  addedItems: [],
  total: 0
};
const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find(item => item.id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find(item => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal
      };
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 6
    };
  }

  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      total: state.total - 6
    };
  } else {
    return state;
  }
};

export default cartReducer;
