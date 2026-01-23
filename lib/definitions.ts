export type Plan = 'basic' | 'pro' | 'premium';
// Wizard registration types
export type WizardState = {
  user: {
    username: string;
    email: string;
    password: string;
  };
  plan: string;
  step: number;
  errors?: Record<string, string[]>;
};

export type RegisterFormProps = {
  user: WizardState['user'];
  errors?: Record<string, string[]>;
};

export type PlanSelectionProps = {
  plan: string;
  errors?: Record<string, string[]>;
};

export type ConfirmationProps = {
  state: WizardState;
};

// Movie search types
export type MovieSearchResult = {
  "#TITLE": string;
  "#YEAR": number;
  "#IMDB_ID": string;
  "#RANK": number;
  "#ACTORS": string;
  "#AKA": string;
  "#IMDB_URL": string;
  "#IMDB_IV": string;
  "#IMG_POSTER": string;
  photo_width: number;
  photo_height: number;
};

export type MovieSearchResponse = {
  ok: boolean;
  description: MovieSearchResult[];
  error_code: number;
};
