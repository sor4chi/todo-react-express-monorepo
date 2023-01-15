export type TodoIndexResponse = {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}[];

export type TodoShowResponse = {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
} | null;

export interface TodoCreateRequest {
  title: string;
  completed: boolean;
}

export interface TodoCreateResponse {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export type TodoUpdateRequest = Partial<{
  title: string;
  completed: boolean;
}>;

export interface TodoUpdateResponse {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TodoDeleteResponse {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}
