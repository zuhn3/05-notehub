export interface Note {
  id: number;
  title: string;
  content: string;
  tag: string;
  createdAt: string;
    updatedAt: string;
}

export interface NewNoteData {
  title: string;
  content: string;
  tag: string;
}

export type NoteTag = 'Todo' | 'Work' | 'Personal' | 'Meeting' | 'Shopping';