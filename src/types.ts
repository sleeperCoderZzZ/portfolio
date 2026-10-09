export type Locale = 'pt' | 'en'
export type Localized<T> = Record<Locale, T>

export interface Project {
  url: string
  tags: string[]
  title: Localized<string>
  description: Localized<string>
}

export interface TimelineItem {
  when: Localized<string>
  title: Localized<string>
  subtitle?: Localized<string>
  url?: string
  description: Localized<string>
  bullets?: Localized<string[]>
}

export interface Certification {
  issuer: string
  title: string
  date: Localized<string>
  hours?: number
  url: string
}
