import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Constants
const DEFAULT_PAGE = 'home' as const;
const DEFAULT_CATEGORY = 'All' as const;
const THEME_STORAGE_KEY = 'theme-storage' as const;

// Types
export interface ThemeState {
  readonly isDark: boolean;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
}

export interface NavigationState {
  readonly isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  openMobileMenu: () => void;
}

export interface UIState {
  readonly isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  readonly currentPage: string;
  setCurrentPage: (page: string) => void;
  readonly scrollPosition: number;
  setScrollPosition: (position: number) => void;
  readonly isBookCallDrawerOpen: boolean;
  setIsBookCallDrawerOpen: (open: boolean) => void;
}

export interface ProjectFilterState {
  readonly selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  readonly searchQuery: string;
  setSearchQuery: (query: string) => void;
}

// Theme Store
export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDark: false,
      toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
      setTheme: (isDark: boolean) => set({ isDark }),
    }),
    {
      name: THEME_STORAGE_KEY,
    }
  )
);

// Navigation Store
export const useNavigationStore = create<NavigationState>((set) => ({
  isMobileMenuOpen: false,
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  openMobileMenu: () => set({ isMobileMenuOpen: true }),
}));

// UI Store
export const useUIStore = create<UIState>((set) => ({
  isLoading: false,
  setIsLoading: (loading: boolean) => set({ isLoading: loading }),
  currentPage: DEFAULT_PAGE,
  setCurrentPage: (page: string) => set({ currentPage: page }),
  scrollPosition: 0,
  setScrollPosition: (position: number) => set({ scrollPosition: position }),
  isBookCallDrawerOpen: false,
  setIsBookCallDrawerOpen: (open: boolean) => set({ isBookCallDrawerOpen: open }),
}));

// Project Filter Store
export const useProjectFilterStore = create<ProjectFilterState>((set) => ({
  selectedCategory: DEFAULT_CATEGORY,
  setSelectedCategory: (category: string) => set({ selectedCategory: category }),
  searchQuery: '',
  setSearchQuery: (query: string) => set({ searchQuery: query }),
}));

// Combined Store Hook (for components that need multiple stores)
export const useAppStore = () => ({
  theme: useThemeStore(),
  navigation: useNavigationStore(),
  ui: useUIStore(),
  projectFilter: useProjectFilterStore(),
} as const);
