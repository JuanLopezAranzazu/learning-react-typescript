export enum Priority {
  LOW = "BAJA",
  MEDIUM = "MEDIA",
  HIGH = "ALTA",
}

export type RawNote = {
  id: string;
  title: string;
  description: string;
  priority: Priority;
};

export type NoteData = {
  title: string;
  description: string;
  priority: Priority;
};
