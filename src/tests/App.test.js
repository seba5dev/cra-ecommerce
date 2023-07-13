import { act, render, screen } from "@testing-library/react";
import App from "../App";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/cart/cartReducer";
import selectedItemReducer from "../store/ui/selectedItemReducer";
import { Provider } from "react-redux";

let mockStore;

describe("States", () => {
  beforeEach(() => {
    mockStore = configureStore({
      reducer: {
        cart: cartReducer,
        selectedItem: selectedItemReducer,
      },
    });
  });
  test("Renders the store", () => {
    render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );
    const linkElement = screen.getByText(/Store/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("Clicks on Milo Bolsa and adds one to cart", async () => {
    render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );
    // select the first product
    const product = screen.getByAltText("Milo Bolsa");
    act(() => {
      product.click();
    });
    // wait for the product info to appear
    const productInfo = await screen.findByText(/Milo Bolsa/i);
    expect(productInfo).toBeInTheDocument();
    const addToCartButton = screen.getByTestId("add-to-cart-button");
    act(() => {
      addToCartButton.click();
    });
    const state = mockStore.getState();
    // console.log(state.cart.cartItems);
    expect(state.cart.cartItems.length).toBe(1);
  });
  test("Clicks on Milo Bolsa and adds three to cart", async () => {
    render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );
    // select the first product
    const product = screen.getByAltText("Milo Bolsa");
    act(() => {
      product.click();
    });
    // wait for the product info to appear
    const productInfo = await screen.findByText(/Milo Bolsa/i);
    expect(productInfo).toBeInTheDocument();
    const addToCartButton = screen.getByTestId("add-to-cart-button");
    for (let i = 0; i < 3; i++) {
      act(() => {
        addToCartButton.click();
      });
    }
    const state = mockStore.getState();
    // console.log(state.cart.cartItems);
    expect(state.cart.cartItems[0].quantity).toBe(3);
  });
  test("Clicks on three products and adds each one to cart", async () => {
    render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );
    // select the first product
    const product1 = screen.getByAltText("Milo Bolsa");
    act(() => {
      product1.click();
    });
    // wait for the product info to appear
    const productInfo1 = await screen.findByText(/Milo Bolsa/i);
    expect(productInfo1).toBeInTheDocument();
    const addToCartButton1 = screen.getByTestId("add-to-cart-button");
    act(() => {
      addToCartButton1.click();
    });
    // select the second product
    const product2 = screen.getByAltText("Zucaritas Caja");
    act(() => {
      product2.click();
    });
    // wait for the product info to appear
    const productInfo2 = await screen.findByText(/Zucaritas Caja/i);
    expect(productInfo2).toBeInTheDocument();
    const addToCartButton2 = screen.getByTestId("add-to-cart-button");
    act(() => {
      addToCartButton2.click();
    });
    // select the first product
    const product3 = screen.getByAltText("Choco Krispis Caja");
    act(() => {
      product3.click();
    });
    // wait for the product info to appear
    const productInfo3 = await screen.findByText(/Choco Krispis Caja/i);
    expect(productInfo3).toBeInTheDocument();
    const addToCartButton3 = screen.getByTestId("add-to-cart-button");
    act(() => {
      addToCartButton3.click();
    });
    const state = mockStore.getState();
    // console.log(state.cart.cartItems);
    expect(state.cart.cartItems.length).toBe(3);
  });
  test("Clicks on seven products and adds two of each to cart", async () => {
    render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );
    // select the first product
    const product1 = screen.getByAltText("Milo Bolsa");
    act(() => {
      product1.click();
    });
    // wait for the product info to appear
    const productInfo1 = await screen.findByText(/Milo Bolsa/i);
    expect(productInfo1).toBeInTheDocument();
    const addToCartButton1 = screen.getByTestId("add-to-cart-button");
    for (let i = 0; i < 2; i++) {
      act(() => {
        addToCartButton1.click();
      });
    }
    // select the second product
    const product2 = screen.getByAltText("DeTodito Mix");
    act(() => {
      product2.click();
    });
    // wait for the product info to appear
    const productInfo2 = await screen.findByText(/DeTodito Mix/i);
    expect(productInfo2).toBeInTheDocument();
    const addToCartButton2 = screen.getByTestId("add-to-cart-button");
    for (let i = 0; i < 2; i++) {
      act(() => {
        addToCartButton2.click();
      });
    }
    // select the first product
    const product3 = screen.getByAltText("Choco Krispis Caja");
    act(() => {
      product3.click();
    });
    // wait for the product info to appear
    const productInfo3 = await screen.findByText(/Choco Krispis Caja/i);
    expect(productInfo3).toBeInTheDocument();
    const addToCartButton3 = screen.getByTestId("add-to-cart-button");
    for (let i = 0; i < 2; i++) {
      act(() => {
        addToCartButton3.click();
      });
    }
    // select the second product
    const product4 = screen.getByAltText("Leche Condensada 1L");
    act(() => {
      product4.click();
    });
    // wait for the product info to appear
    const productInfo4 = await screen.findByText(/Leche Condensada 1L/i);
    expect(productInfo4).toBeInTheDocument();
    const addToCartButton4 = screen.getByTestId("add-to-cart-button");
    for (let i = 0; i < 2; i++) {
      act(() => {
        addToCartButton4.click();
      });
    }
    // select the second product
    const product5 = screen.getByAltText("Del Valle 1L");
    act(() => {
      product5.click();
    });
    // wait for the product info to appear
    const productInfo5 = await screen.findByText(/Del Valle 1L/i);
    expect(productInfo5).toBeInTheDocument();
    const addToCartButton5 = screen.getByTestId("add-to-cart-button");
    for (let i = 0; i < 2; i++) {
      act(() => {
        addToCartButton5.click();
      });
    }
    // select the second product
    const product6 = screen.getByAltText("Leche Alpina 1L");
    act(() => {
      product6.click();
    });
    // wait for the product info to appear
    const productInfo6 = await screen.findByText(/Leche Alpina 1L/i);
    expect(productInfo6).toBeInTheDocument();
    const addToCartButton6 = screen.getByTestId("add-to-cart-button");
    for (let i = 0; i < 2; i++) {
      act(() => {
        addToCartButton6.click();
      });
    }
    // select the second product
    const product7 = screen.getByAltText("DeTodito BBQ");
    act(() => {
      product7.click();
    });
    // wait for the product info to appear
    const productInfo7 = await screen.findByText(/DeTodito BBQ/i);
    expect(productInfo7).toBeInTheDocument();
    const addToCartButton7 = screen.getByTestId("add-to-cart-button");
    for (let i = 0; i < 2; i++) {
      act(() => {
        addToCartButton7.click();
      });
    }
    const state = mockStore.getState();
    // console.log(state.cart.cartItems);
    expect(state.cart.cartItems.length).toBe(7);
    for (let i = 0; i < 7; i++) {
      expect(state.cart.cartItems[i].quantity).toBe(2);
    }
  });
});

describe("UI", () => {
  beforeEach(() => {
    mockStore = configureStore({
      reducer: {
        cart: cartReducer,
        selectedItem: selectedItemReducer,
      },
    });
  });
  test("Renders the store", () => {
    render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );
    const linkElement = screen.getByText(/Store/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("Clicks on Milo Bolsa and shows name and description", async () => {
    render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );
    // select the first product
    const product = screen.getByAltText("Milo Bolsa");
    act(() => {
      product.click();
    });
    // wait for the product info to appear
    const productInfo = await screen.findByText(/Milo Bolsa/i);
    expect(productInfo).toBeInTheDocument();
    const productDescription = await screen.findByTestId("product-description");
    expect(productDescription).toBeInTheDocument();
  });
  test("Clicks on Milo Bolsa and after clicks on Zucaritas Caja and changes", async () => {
    render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );
    // select the first product
    const product = screen.getByAltText("Milo Bolsa");
    act(() => {
      product.click();
    });
    // wait for the product info to appear
    const productInfo = await screen.findByText(/Milo Bolsa/i);
    expect(productInfo).toBeInTheDocument();
    // select the first product
    const product2 = screen.getByAltText("Zucaritas Caja");
    act(() => {
      product2.click();
    });
    // wait for the product info to appear
    const productInfo2 = await screen.findByText(/Zucaritas Caja/i);
    expect(productInfo2).toBeInTheDocument();
  });
  test("Clicks on Cart and show nothing", async () => {
    render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );
    // select the first cartButton
    const cartButton = screen.getByTestId("cart-button");
    act(() => {
      cartButton.click();
    });
    // wait for the product info to appear
    const cartInfo = await screen.findByText(/Your cart is empty./i);
    expect(cartInfo).toBeInTheDocument();
  });
  test("Clicks on Cart and shows selected products", async () => {
    render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );
    // select the first product
    const product1 = screen.getByAltText("Milo Bolsa");
    act(() => {
      product1.click();
    });
    // wait for the product info to appear
    const productInfo1 = await screen.findByText(/Milo Bolsa/i);
    expect(productInfo1).toBeInTheDocument();
    const addToCartButton1 = screen.getByTestId("add-to-cart-button");
    act(() => {
      addToCartButton1.click();
    });
    // select the second product
    const product2 = screen.getByAltText("Zucaritas Caja");
    act(() => {
      product2.click();
    });
    // wait for the product info to appear
    const productInfo2 = await screen.findByText(/Zucaritas Caja/i);
    expect(productInfo2).toBeInTheDocument();
    const addToCartButton2 = screen.getByTestId("add-to-cart-button");
    act(() => {
      addToCartButton2.click();
    });
    // select the first product
    const product3 = screen.getByAltText("Choco Krispis Caja");
    act(() => {
      product3.click();
    });
    // wait for the product info to appear
    const productInfo3 = await screen.findByText(/Choco Krispis Caja/i);
    expect(productInfo3).toBeInTheDocument();
    const addToCartButton3 = screen.getByTestId("add-to-cart-button");
    act(() => {
      addToCartButton3.click();
    });
    const state = mockStore.getState();
    // console.log(state.cart.cartItems);
    expect(state.cart.cartItems.length).toBe(3);
    // select the first cartButton
    const cartButton = screen.getByTestId("cart-button");
    act(() => {
      cartButton.click();
    });
    // wait for the product info to appear
    const cartInfo = await screen.findByText(/Total:/i);
    expect(cartInfo).toBeInTheDocument();
  });
})