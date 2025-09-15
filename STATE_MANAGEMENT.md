# State Management Documentation

This portfolio project uses **Zustand** for state management, providing a lightweight and efficient way to manage global application state.

## Store Structure

The application uses multiple focused stores for different concerns:

### 1. Theme Store (`useThemeStore`)
Manages dark/light theme state with persistence.

```typescript
interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
}
```

**Features:**
- Persistent theme preference using localStorage
- System preference detection
- Smooth theme transitions

### 2. Navigation Store (`useNavigationStore`)
Manages mobile menu state and navigation.

```typescript
interface NavigationState {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  openMobileMenu: () => void;
}
```

**Features:**
- Mobile menu toggle functionality
- Automatic menu closing on navigation
- Smooth animations with Framer Motion

### 3. UI Store (`useUIStore`)
Manages general UI state and page tracking.

```typescript
interface UIState {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
  scrollPosition: number;
  setScrollPosition: (position: number) => void;
}
```

**Features:**
- Loading state management
- Current page tracking
- Scroll position persistence

### 4. Project Filter Store (`useProjectFilterStore`)
Manages project filtering and search functionality.

```typescript
interface ProjectFilterState {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}
```

**Features:**
- Project category filtering
- Search functionality
- Real-time filtering updates

## Usage Examples

### Using Individual Stores

```typescript
import { useThemeStore, useNavigationStore } from '@/store/useStore';

function MyComponent() {
  const { isDark, toggleTheme } = useThemeStore();
  const { isMobileMenuOpen, closeMobileMenu } = useNavigationStore();
  
  return (
    <div className={isDark ? 'dark' : ''}>
      <button onClick={toggleTheme}>
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}
```

### Using Combined Store

```typescript
import { useAppStore } from '@/store/useStore';

function MyComponent() {
  const { theme, navigation, ui, projectFilter } = useAppStore();
  
  return (
    <div>
      <p>Current theme: {theme.isDark ? 'Dark' : 'Light'}</p>
      <p>Current page: {ui.currentPage}</p>
      <p>Selected category: {projectFilter.selectedCategory}</p>
    </div>
  );
}
```

## Store Features

### Persistence
- Theme preferences are automatically saved to localStorage
- State persists across browser sessions
- Graceful fallback to system preferences

### Type Safety
- Full TypeScript support
- IntelliSense autocomplete
- Compile-time error checking

### Performance
- Minimal re-renders with selective subscriptions
- Efficient state updates
- No unnecessary re-computations

## State Flow

1. **Theme Changes**: User clicks theme toggle → Store updates → Components re-render with new theme
2. **Navigation**: User clicks nav item → Store updates current page → Navbar highlights active item
3. **Project Filtering**: User selects category → Store updates filter → Projects list re-renders
4. **Mobile Menu**: User toggles menu → Store updates state → Mobile menu animates in/out

## Best Practices

1. **Selective Subscriptions**: Only subscribe to the state you need
2. **Immutable Updates**: Always use the provided setter functions
3. **Component Separation**: Keep store logic separate from UI logic
4. **Type Safety**: Always use TypeScript interfaces for store state

## Adding New State

To add new state to the application:

1. **Define the interface**:
```typescript
interface NewFeatureState {
  data: string;
  setData: (data: string) => void;
}
```

2. **Create the store**:
```typescript
export const useNewFeatureStore = create<NewFeatureState>((set) => ({
  data: '',
  setData: (data: string) => set({ data }),
}));
```

3. **Add to combined store** (optional):
```typescript
export const useAppStore = () => ({
  theme: useThemeStore(),
  navigation: useNavigationStore(),
  ui: useUIStore(),
  projectFilter: useProjectFilterStore(),
  newFeature: useNewFeatureStore(), // Add here
});
```

4. **Use in components**:
```typescript
const { data, setData } = useNewFeatureStore();
```

## Benefits of This Approach

- **Lightweight**: Zustand is much smaller than Redux
- **Simple**: No boilerplate code or complex setup
- **Flexible**: Easy to add/remove state as needed
- **Performant**: Only re-renders components that use changed state
- **Type Safe**: Full TypeScript support
- **Persistent**: Automatic localStorage integration where needed
