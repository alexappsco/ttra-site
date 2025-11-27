export interface BlogItem {
  id: string;
  attachmentUrl: string;
  title: string;
  body: string;
  blogCategoryId: string;
  blogCategoryName: string;
  creationTime: string;
}
export interface BlogData {
  blog: {
    items: BlogItem[];
    totalCount: number;
  }
}
export interface BlogDetails {
    id:               string;
    attachmentUrl:    string;
    title:            string;
    body:             string;
    blogCategoryId:   string;
    blogCategoryName: string;
    creationTime:     Date;
}
