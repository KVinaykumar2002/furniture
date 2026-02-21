import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

const WISHLIST_KEY = "designerzhub-wishlist";

interface WishlistContextValue {
  wishlistIds: Set<string>;
  toggle: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  count: number;
}

const WishlistContext = createContext<WishlistContextValue | null>(null);

function loadStored(): string[] {
  try {
    const raw = localStorage.getItem(WISHLIST_KEY);
    if (raw) return JSON.parse(raw) as string[];
  } catch {
    /* ignore */
  }
  return [];
}

function saveStored(ids: string[]) {
  try {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(ids));
  } catch {
    /* ignore */
  }
}

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlistIds, setWishlistIds] = useState<Set<string>>(() => new Set(loadStored()));

  useEffect(() => {
    saveStored(Array.from(wishlistIds));
  }, [wishlistIds]);

  const toggle = useCallback((id: string) => {
    setWishlistIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const isInWishlist = useCallback(
    (id: string) => wishlistIds.has(id),
    [wishlistIds]
  );

  return (
    <WishlistContext.Provider
      value={{
        wishlistIds,
        toggle,
        isInWishlist,
        count: wishlistIds.size,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
