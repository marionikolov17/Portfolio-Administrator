export interface Feature {
  index: number;
  text: string;
}

export interface Skill {
  index: number;
  text: string;
}

export interface Image {
  index: number;
  file: File;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imageSrc: any;
}
