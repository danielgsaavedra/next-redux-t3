"use client";

import { store } from "@/infraestructure/redux";
import { Provider } from "react-redux";

export default function StoreReduxProviders({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
