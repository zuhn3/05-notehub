import axios from "axios";
import type { Note, NewNoteData } from "../types/note";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFvcDE2MDNAZ21haWwuY29tIiwiaWF0IjoxNzUzNTQ2NTQzfQ.LYxMZuV2Tpllo6VtbmOeKKwVgDQuCiJ95G12z1iDSMY";

const instance = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

interface FetchNotesResponse {
  notes: Note[];
  total: number;
  page: number;
  perPage: number;
}

export const fetchNotes = async (
  page = 1,
  perPage = 12,
  search = ""
): Promise<FetchNotesResponse> => {
  const params: Record<string, string | number> = { page, perPage };
  if (search.trim() !== "") {
    params.search = search.trim();
  }

  const res = await instance.get<FetchNotesResponse>("/notes", {
    params,
  });
  return res.data;
};

export const addNote = async (newNote: NewNoteData): Promise<Note> => {
  const res = await instance.post<Note>("/notes", newNote);
  return res.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const res = await instance.delete<Note>(`/notes/${id}`);
  return res.data;
};

export interface NoteFormProps {
  onClose: () => void;
}
