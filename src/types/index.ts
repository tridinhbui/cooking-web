export interface Recipe {
  id: string
  title: string
  slug: string
  description: string
  content: string
  image: string
  images?: string[]
  category: RecipeCategory
  tags: string[]
  ingredients: Ingredient[]
  instructions: Instruction[]
  cookingTime: number
  servings: number
  difficulty: 'Dễ' | 'Trung bình' | 'Khó'
  nutrition?: Nutrition
  tips?: string
  story?: string
  isBookmarked?: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Ingredient {
  id: string
  name: string
  amount: string
  unit?: string
  optional?: boolean
  notes?: string
}

export interface Instruction {
  id: string
  step: number
  description: string
  image?: string
  tips?: string
  time?: number
}

export interface Nutrition {
  calories: number
  protein: number
  carbs: number
  fat: number
  fiber?: number
  sugar?: number
}

export interface RecipeCategory {
  id: string
  name: string
  slug: string
  description?: string
  image?: string
  color?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  author: Author
  category: string
  tags: string[]
  isPublished: boolean
  readingTime: number
  createdAt: Date
  updatedAt: Date
}

export interface Author {
  id: string
  name: string
  bio: string
  avatar: string
  instagram?: string
  email?: string
}

export interface ChatMessage {
  id: string
  type: 'user' | 'bot'
  content: string
  timestamp: Date
  mood?: UserMood
  suggestedRecipes?: string[]
}

export type UserMood = 'happy' | 'sad' | 'tired' | 'excited' | 'chill' | 'stressed'

export interface BookmarkState {
  recipeIds: string[]
  lastUpdated: Date
}

export interface FilterOptions {
  category?: string
  tags?: string[]
  difficulty?: string
  cookingTime?: number
  search?: string
}

export interface ThemeMode {
  mode: 'light' | 'dark'
  preference: 'system' | 'light' | 'dark'
}

export interface AudioSettings {
  enabled: boolean
  volume: number
  effects: {
    hover: boolean
    click: boolean
    bookmark: boolean
    notification: boolean
  }
}

export interface AnimationSettings {
  enabled: boolean
  reduced: boolean
  parallax: boolean
  particles: boolean
  transitions: boolean
}

export interface UserPreferences {
  theme: ThemeMode
  audio: AudioSettings
  animations: AnimationSettings
  language: 'vi' | 'en'
  cookingUnits: 'metric' | 'imperial'
}

export interface NavigationItem {
  label: string
  href: string
  icon?: string
  badge?: number
  isActive?: boolean
}

export interface ParallaxElement {
  element: HTMLElement
  speed: number
  direction: 'up' | 'down' | 'left' | 'right'
}

export interface Toast {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  description?: string
  duration?: number
}

export interface SearchResult {
  id: string
  type: 'recipe' | 'post' | 'category'
  title: string
  description: string
  image?: string
  url: string
  relevance: number
} 