export interface Image {
  _id: string;
  src: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  width: number;
  height: number;
  title: string;
  altText: string;
  description: string;
  metadata: Record<string, unknown>;
}

export interface Meta {
  title: string;
  description: string;
  ogImage: Image;
}

export interface Tag {
  _id: string;
  name: string;
  slug: string;
  tagColor: string;
}

export interface BlogPost {
  _id: string;
  _sys: {
    createdAt: string;
    updatedAt: string;
    customOrder: number;
    raw: {
      createdAt: string;
      updatedAt: string;
      firstPublishedAt: string;
      publishedAt: string;
    };
  };
  title: string;
  slug: string;
  meta: Meta;
  body: string;
  coverImage: Image;
  author: string; // referenceId
  tags: Tag[]; // タグの配列
}
