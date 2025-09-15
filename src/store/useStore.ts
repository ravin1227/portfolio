import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Types
export interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
}

export interface NavigationState {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  openMobileMenu: () => void;
}

export interface UIState {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
  scrollPosition: number;
  setScrollPosition: (position: number) => void;
  isBookCallDrawerOpen: boolean;
  setIsBookCallDrawerOpen: (open: boolean) => void;
}

export interface ProjectFilterState {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchQuery: string;
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
      name: 'theme-storage',
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
  currentPage: 'home',
  setCurrentPage: (page: string) => set({ currentPage: page }),
  scrollPosition: 0,
  setScrollPosition: (position: number) => set({ scrollPosition: position }),
  isBookCallDrawerOpen: false,
  setIsBookCallDrawerOpen: (open: boolean) => set({ isBookCallDrawerOpen: open }),
}));

// Project Filter Store
export const useProjectFilterStore = create<ProjectFilterState>((set) => ({
  selectedCategory: 'All',
  setSelectedCategory: (category: string) => set({ selectedCategory: category }),
  searchQuery: '',
  setSearchQuery: (query: string) => set({ searchQuery: query }),
}));

// Combined Store (for components that need multiple stores)
export const useAppStore = () => ({
  theme: useThemeStore(),
  navigation: useNavigationStore(),
  ui: useUIStore(),
  projectFilter: useProjectFilterStore(),
});
