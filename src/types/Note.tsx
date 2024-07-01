export enum Priority {
  LOW = "BAJA",
  MEDIUM = "MEDIA",
  HIGH = "ALTA",
}

export type NoteData = {
  title: string;
  description: string;
  priority: Priority;
  categoryId: string;
};

export type RawNote = {
  id: string;
} & NoteData;
