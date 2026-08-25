import { createContext, useContext, useEffect, useState } from "react";

const AddressContext = createContext(null);

const DEFAULT_ADDRESSES = [
  { id: 1, title: "منزل", detail: "تهران، انتهای اتوبان ستاری، میدان دانشگاه، پلاک ۱۲" },
  { id: 2, title: "محل کار", detail: "تهران، خیابان ولیعصر، بالاتر از پارک ملت" },
];

export function AddressProvider({ children }) {
  const [addresses, setAddresses] = useState(() => {
    try {
      const saved = localStorage.getItem("addresses");
      return saved ? JSON.parse(saved) : DEFAULT_ADDRESSES;
    } catch {
      return DEFAULT_ADDRESSES;
    }
  });

  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  const addAddress = (title, detail) => {
    const newAddr = { id: Date.now(), title, detail };
    setAddresses((prev) => [...prev, newAddr]);
    return newAddr;
  };

  const removeAddress = (id) => {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <AddressContext.Provider value={{ addresses, addAddress, removeAddress }}>
      {children}
    </AddressContext.Provider>
  );
}

export function useAddress() {
  const ctx = useContext(AddressContext);
  if (!ctx) throw new Error("useAddress باید داخل AddressProvider استفاده بشه");
  return ctx;
}